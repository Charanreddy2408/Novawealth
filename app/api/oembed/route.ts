import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = new URL(request.url).searchParams.get("url");
    if (!url) {
        return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
    }

    // Handle TikTok native oEmbed
    if (url.includes("tiktok.com")) {
        let finalUrl = url;
        try {
            // TikTok oembed API hates shortlinks. We must expand vt.tiktok.com to the full canonical URL first.
            if (url.includes("vt.tiktok.com") || url.includes("vm.tiktok.com")) {
                const headController = new AbortController();
                try {
                    const expandResponse = await fetch(url, {
                        method: "GET",
                        redirect: "follow",
                        signal: headController.signal
                    });
                    finalUrl = expandResponse.url;
                } catch (e) {
                    // Ignore abort errors
                } finally {
                    headController.abort(); // Abort the stream download since we only needed the resolved URL
                }
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout for blocked regions

            const response = await fetch(
                `https://www.tiktok.com/oembed?url=${encodeURIComponent(finalUrl)}`,
                {
                    headers: { "User-Agent": "NovaWealthWebsite/1.0" },
                    next: { revalidate: 86400 },
                    signal: controller.signal
                }
            );
            clearTimeout(timeoutId);

            if (!response.ok) {
                // If TikTok blocks the oEmbed request with 403, we can still parse the URL and return the iframe manually.
                const manualMatch = finalUrl.match(/video\/(\d+)/i);
                if (manualMatch && manualMatch[1]) {
                    return NextResponse.json({
                        title: "TikTok Video",
                        thumbnailUrl: "",
                        author: "",
                        embedUrl: `https://www.tiktok.com/embed/v2/${manualMatch[1]}`
                    });
                }
                return NextResponse.json({ error: "Unable to fetch" }, { status: 502 });
            }
            const data = await response.json();

            let embedUrl = url;
            const videoIdMatch = finalUrl.match(/video\/(\d+)/i) || (data && data.html && data.html.match(/video\/(\d+)/i));
            if (videoIdMatch && videoIdMatch[1]) {
                embedUrl = `https://www.tiktok.com/embed/v2/${videoIdMatch[1]}`;
            }

            return NextResponse.json({
                title: data?.title ?? "",
                thumbnailUrl: data?.thumbnail_url ?? "",
                author: data?.author_name ?? "",
                embedUrl
            });
        } catch {
            // Fallback: If we managed to resolve the shortlink but oembed API failed, still return the embed URL.
            let embedUrl = url;
            const fallbackMatch = finalUrl.match(/video\/(\d+)/i);
            if (fallbackMatch && fallbackMatch[1]) {
                embedUrl = `https://www.tiktok.com/embed/v2/${fallbackMatch[1]}`;
                return NextResponse.json({
                    title: "",
                    thumbnailUrl: "",
                    author: "",
                    embedUrl
                });
            }
            return NextResponse.json({ error: "Unable to fetch preview due to network block or timeout" }, { status: 502 });
        }
    }

    // Handle other links (LinkedIn / YouTube) via OpenGraph scraping & Embed resolution
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const htmlResponse = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                "Accept": "text/html",
            },
            redirect: 'follow', // Ensures we resolve lnkd.in shortened URLs
            next: { revalidate: 86400 },
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        const html = await htmlResponse.text();
        const finalUrl = htmlResponse.url;

        // Attempt to regex match og:image for cover photo
        const match = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
            html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);

        let imageUrl = "";
        if (match && match[1]) {
            imageUrl = match[1].replace(/&amp;/g, '&');
        }

        // Attempt to resolve an embed URL
        let embedUrl = url;

        // Check if it's a LinkedIn post and extract activity ID to generate embed block
        const activityMatch = finalUrl.match(/activity-([^?/-]+)/i) || html.match(/urn:li:activity:(\d+)/i);
        if (activityMatch && activityMatch[1]) {
            embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityMatch[1]}`;
        } else if (finalUrl.includes('youtube.com/watch') || finalUrl.includes('youtu.be/')) {
            // Convert YouTube link to embed if needed
            const ytMatch = finalUrl.match(/[?&]v=([^&]+)/) || finalUrl.match(/youtu\.be\/([^?]+)/);
            if (ytMatch && ytMatch[1]) {
                embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
            }
        }

        return NextResponse.json({
            title: "Link Preview",
            thumbnailUrl: imageUrl,
            embedUrl
        });
    } catch {
        return NextResponse.json({ error: "Failed to scrape OpenGraph" }, { status: 502 });
    }
}
