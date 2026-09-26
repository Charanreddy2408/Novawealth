"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer-premium">
      <div className="shell">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <Logo inverse />
            <p className="footer-mission">
              Personalised financial advice for migrant families building greater
              financial security and preparing for the future with confidence.
            </p>
            <div className="footer-socials">
              <a
                href={siteConfig.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => track("social_click", { platform: "linkedin", location: "footer" })}
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>
          <div className="footer-subscribe">
            <p className="footer-label">Stay informed</p>
            <p className="footer-sub-p">Practical financial education for established families — delivered to your inbox.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe"><ArrowRight size={18} /></button>
            </form>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-col">
            <p className="footer-label">Explore</p>
            <nav className="footer-nav">
              <Link href="/about">About</Link>
              <Link href="/how-we-help">How We Help</Link>
              <Link href="/who-we-help">Who We Help</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/contact" className="footer-highlight-link">Start a Conversation</Link>
            </nav>
          </div>

          <div className="footer-col">
            <p className="footer-label">How We Help</p>
            <nav className="footer-nav">
              <Link href="/how-we-help#build-invest">Build &amp; Invest</Link>
              <Link href="/how-we-help#tax">Manage Tax Smarter</Link>
              <Link href="/how-we-help#super">Strengthen Your Super</Link>
              <Link href="/how-we-help#protect">Protect Your Family</Link>
              <Link href="/how-we-help#retire">Retire With Confidence</Link>
            </nav>
          </div>

          <div className="footer-col footer-contact-col">
            <p className="footer-label">Connect with us</p>
            <ul className="footer-contact-list" style={{ gap: "0.5rem" }}>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  onClick={() => track("phone_click", { location: "footer" })}
                >{siteConfig.phone}</a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => track("email_click", { location: "footer" })}
                >{siteConfig.email}</a>
              </li>
              <li>
                <span>Suite 10, 1 Main Street Box Hill Vic 3128</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar" style={{ flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "3rem" }}>
          <div className="footer-legal" style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center" }}>
            <p style={{ fontWeight: 600, color: "var(--brand-dark)" }}>© {new Date().getFullYear()} Nova Wealth. All rights reserved.</p>
            <div className="footer-legal-links" style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
              <Link href="/privacy">Privacy Policy</Link>
              <span style={{ color: "rgba(48,32,12,0.15)" }}>|</span>
              <Link href="/complaints">Complaints</Link>
              <span style={{ color: "rgba(48,32,12,0.15)" }}>|</span>
              <Link href="/website-disclosure">Website Disclosure Information</Link>
            </div>
          </div>
          
          <div className="footer-compliance" style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", color: "var(--brand-dark)" }}>
            <p>Advice Evolution Pty Ltd AFSL: 342880</p>
            <p>ABN: 66 137 858 023 CAR: 1311988</p>
            
            <p style={{ marginTop: "1rem" }}>
              Nova Wealth Advisers acknowledges the Traditional Owners and Custodians of the lands on which we meet, live and work. We pay our respects to the people, the cultures and the Elders past and present.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
