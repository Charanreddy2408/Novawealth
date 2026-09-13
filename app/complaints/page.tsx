import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints",
};

export default function ComplaintsPage() {
  return (
    <>
      <header className="legal-page-header">
        <h1>Complaint Process</h1>
        <p>Information on how to lodge and manage a complaint regarding our services.</p>
      </header>
      <div className="legal-document-wrapper">
        <main className="legal-content">
          <h2>What should you do if you have a complaint?</h2>
      <p>
        If you have any complaints about the services provided to you, you should take the following steps:
      </p>
      <ul>
        <li>Contact your financial adviser and tell them about your complaint.</li>
        <li>
          If your complaint is not satisfactorily resolved within three days, please contact <strong>Advice Evolution Pty Ltd</strong> on <strong>042 622 8737</strong> or email us at <strong><a href="mailto:admin@adviceevolution.com.au">admin@adviceevolution.com.au</a></strong>
        </li>
      </ul>
      
      <p>
        Advice Evolution Pty Ltd will acknowledge your complaint and will try to resolve your complaint as quickly and fairly as possible.
      </p>
      <p>
        We will conduct a thorough investigation of your situation and the issues that you raise, and we will provide you with a formal written response within a 30-day period.
      </p>

      <h2>Australian Financial Complaints Authority (AFCA)</h2>
      <p>
        If your complaint has not been resolved satisfactorily, you may lodge a complaint with the Australian Financial Complaints Authority (AFCA):
      </p>
      <ul>
        <li><strong>Website:</strong> <a href="https://www.afca.org.au" target="_blank" rel="noopener noreferrer">www.afca.org.au</a></li>
        <li><strong>Email:</strong> <a href="mailto:info@afca.org.au">info@afca.org.au</a></li>
        <li><strong>Phone:</strong> 1800 931 678 (free call)</li>
        <li><strong>In writing to:</strong> Australian Financial Complaints Authority<br />GPO Box 3, Melbourne VIC 3001</li>
      </ul>
      
      <p>
        <em>Time limits may apply to complain to AFCA and so you should act promptly or otherwise consult the AFCA website to find out if or when the time limit relevant to your circumstances expires.</em>
      </p>
        </main>
      </div>
    </>
  );
}
