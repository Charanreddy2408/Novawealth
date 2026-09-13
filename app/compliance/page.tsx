import type { Metadata } from "next";
import { PageHero } from "@/components/page-elements";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Compliance & Disclosures",
  alternates: { canonical: "/compliance" },
  description:
    "Nova Wealth Advisers compliance information, privacy information and financial services documents.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Important information"
        title="Compliance and disclosure documents."
        description="This page will hold Nova Wealth’s current approved licensee details, disclosures, privacy policy and Financial Services Guide."
        word="Trust"
      />
      <section className="content-section paper">
        <ScrollReveal className="shell compliance-index">
          <div>
            <p className="eyebrow">Document index</p>
            <h2>Important information in one place.</h2>
          </div>
          <div className="compliance-accordion">
            <details>
              <summary>Authorisation and AFSL details</summary>
              <p>
                Approved ASIC authorised representative and Australian Financial
                Services Licence details must be supplied and approved by the
                licensee before publication.
              </p>
            </details>
            <details id="fsg">
              <summary>Financial Services Guide</summary>
              <p>
                The current approved Financial Services Guide will be linked here
                when supplied by Nova Wealth and its licensee.
              </p>
            </details>
            <details id="privacy">
              <summary>Privacy policy</summary>
              <p>
                The final privacy policy, data collection statement, cookie
                treatment and marketing-consent wording require compliance approval.
              </p>
            </details>
            <details>
              <summary>General information warning</summary>
              <p>
                Content on this website is general information only and does not
                take into account your objectives, financial situation or needs.
                Before acting, consider whether the information is appropriate for
                your circumstances and seek personal advice where required.
              </p>
            </details>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
