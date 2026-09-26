"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { siteConfig } from "@/lib/site-config";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "page_view", {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsProvider() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = siteConfig.googleAnalyticsId;

  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <Suspense fallback={null}>
        <RouteTracker />
      </Suspense>
    </>
  );
}
