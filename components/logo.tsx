import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup, generated from the supplied "Radiant Logo Orange.svg".
 *
 * That export is an SVG wrapper around a single opaque JPEG rather than vector
 * paths, so it is served here as a trimmed PNG with the #FDFDFD backdrop keyed
 * out — otherwise the mark renders as a white tile on the dark footer.
 */
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-logo ${inverse ? "brand-logo-inverse" : ""}`}
      aria-label="Nova Wealth Advisers home"
    >
      <Image
        src="/nova-wealth-logo.png"
        alt=""
        width={384}
        height={379}
        className="brand-logo-image"
        priority={!inverse}
      />
    </Link>
  );
}
