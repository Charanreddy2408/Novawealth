import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="legal-page-header">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. Learn more about our collection and handling of your personal information.</p>
      </header>
      <div className="legal-document-wrapper">
        <main className="legal-content">
          <h2>Providing Information to Other Advisers</h2>
      <p>
        Another financial adviser may be appointed to you if your financial adviser leaves Advice Evolution or if your financial adviser is unable to attend to your needs due to an extended absence from the business. In these circumstances, Advice Evolution will write to you advising of the change. Your personal information will be passed on to the new financial adviser.
      </p>
      <p>
        If you choose to appoint a new financial adviser, your new adviser will be provided access to your policy information. They will be responsible for providing you with annual or ongoing advice relating to those policies and all future advice fees deducted from the policy/(ies) will be paid to your new adviser.
      </p>

      <h2>Collecting Your Information</h2>
      <p>
        As part of the financial planning process, we need to collect information about you. Where possible we will obtain that information directly from you, but if authorised by you we may also obtain it from other sources such as your employer or accountant. If that information is incomplete or inaccurate, this could affect our ability to fully or properly analyse your needs, objectives and financial situation, so our recommendations may not be completely appropriate or suitable for you.
      </p>
      <p>
        We are also required under the Anti-Money-Laundering and Counter-Terrorism Financing Act (AML/CTF) 2006 to implement client identification processes. We will need you to present identification documents such as passports and driver&rsquo;s licences in order to meet our obligations.
      </p>

      <h2>How We Use Your Personal Information</h2>
      <p>
        We keep your personal information confidential, and only use it in accordance with our Privacy Policy. Some of the ways we may use this information are set out below:
      </p>
      <ul>
        <li>Your financial adviser and Advice Evolution may have access to this information when providing financial advice or services to you.</li>
        <li>Your financial adviser may, in the future, disclose information to other financial advisers, brokers and those who are authorised by Advice Evolution to review customers&rsquo; needs and circumstances from time to time.</li>
        <li>Your information is only disclosed to other parties as are necessary for us to provide our services to you. Other parties may include fund managers, life companies, other Licensees and related parties who provide services to us.</li>
        <li>Your information may be used to provide ongoing information about opportunities that may be useful or relevant to your financial needs through direct marketing (subject to your ability to opt-out as set out in the Advice Evolution Privacy Policy).</li>
        <li>Your information may be disclosed as required or authorised by law and to anyone authorised by you.</li>
      </ul>

      <h2>Overseas Disclosures</h2>
      <p>
        In certain situations, some of the parties that we share information with may be in, or have operations in, other countries. This means that your information might end up stored or accessed in overseas countries.
      </p>
      <p>
        When we send your personal information to overseas recipients, we make sure appropriate data handling and security arrangements are in place. In all such cases, we commit to making reasonable enquiries to ensure that these organisations comply with their local privacy legislation where such legislation is comparable to the Australian legislation and to comply with the key components of Australian Privacy legislation in cases where their local legislation is considered inadequate or non-existent. In addition, we will disclose your information where we are required to by law.
      </p>

      <h2>Professional Indemnity Insurance</h2>
      <p>
        Professional indemnity insurance is maintained by Advice Evolution Pty Ltd to cover advice, actions and recommendations which have been authorised by Advice Evolution Pty Ltd and provided by your adviser. The insurance satisfies the requirements imposed by the Corporations Act 2001 and financial services regulations.
      </p>
        </main>
      </div>
    </>
  );
}
