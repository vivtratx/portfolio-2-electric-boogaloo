"use client";

import { useState } from "react";
import MainCard from "./components/maincard";
import { App } from "./components/wave";
import CircleUserButton from "./components/CircleUser";
import LinkButton from "./components/Link";
import BriefcaseButton from "./components/Briefcase";
import MailButton from "./components/Mail";
import { LinksPage } from "./components/links";

const toolRows = [
  ["Git/GitHub", "Debian", "Kali Linux"],
  ["AWS", "Kubernetes", "Grafana"],
  ["OWASP ZAP", "Metasploit"],
  ["Wireshark", "Nmap", "Jira"],
];

const pageContent = {
  profile: (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <p className="flex-1 text-[26px] font-semibold leading-tight text-slate-800">
          Hi, thanks for taking the time to check out my website!
        </p>
        <img
          src="/profile.png"
          alt="Profile"
          className="h-24 w-24 flex-shrink-0 rounded-full object-cover shadow-md"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="space-y-2 text-slate-600">
          <p>
            My name is <span className="font-medium text-slate-800">Vivian Tran</span>.
            I&apos;m a senior at the University of Texas at San Antonio (UTSA),
            majoring in Computer Science. I&apos;m interested in roles relating to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Software Engineering</li>
            <li>Network Engineering</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
        <p className="text-slate-600">
          Besides my career aspirations, I love to play guitar, skateboard, and
          make art! I&apos;m most passionate about meeting people, and I hope to
          shape the world in a positive way.
        </p>
      </div>
    </div>
  ),
  links: <LinksPage />,
  work: (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] sm:gap-6">
        <section>
          <h2 className="mb-3 text-sm font-bold tracking-[0.2em] text-slate-500">
            TOOLS
          </h2>
          <div className="flex flex-col gap-3">
            {toolRows.map((row) => (
              <div key={row.join("-")} className="flex flex-wrap gap-x-1 gap-y-3">
                {row.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex min-h-10 items-center rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_4px_0_#8ab9d8] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_1px_0_#8ab9d8]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
        <div aria-hidden="true" className="h-px w-full bg-slate-200 sm:h-auto sm:w-px" />
        <section className="sm:-translate-x-3">
          <h2 className="mb-3 text-sm font-bold tracking-[0.2em] text-slate-500">
            DEVELOPMENT
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {["Go (Golang)", "C", "Java", "Python", "JavaScript/TypeScript", "SQL", "Bash", "Perl", "HTML/CSS"].map((language) => (
              <span
                key={language}
                className="inline-flex min-h-10 items-center rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_4px_0_#8ab9d8] transition-all duration-150 hover:translate-y-[3px] hover:shadow-[0_1px_0_#8ab9d8]"
              >
                {language}
              </span>
            ))}
          </div>
        </section>
      </div>
      <section className="border-t border-slate-200 pt-5">
        <h2 className="mb-5 text-sm font-bold tracking-[0.2em] text-slate-500">
          WORK EXPERIENCE
        </h2>
        <div className="space-y-7">
          <article className="space-y-3 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <img
                src="/uber-logo.png"
                alt="Uber logo"
                className="h-12 w-12 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-slate-800">
                  Network Engineering Intern <span className="font-normal text-slate-500">| Uber Technologies Inc.</span>
                </h3>
                <p className="text-sm italic text-slate-500">
                  May 2026 – August 2026 | Seattle, Washington
                </p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              <li>
                Extended a Golang-based framework performing end-to-end functional network testing across 200K+ hosts, measuring reachability, latency, and packet loss to improve visibility into network path degradation.
              </li>
              <li>
                Built and centralized inter-zone probing across 24 zones, sending 1M+ probes per second to detect network degradation and availability issues in near real-time within the open-source Arachne project.
              </li>
              <li>
                Established inter-zone network probing at parity with the legacy system (99.998%+ success rate, comparable latency), laying the groundwork to consolidate two services into one and retire a dedicated probing host fleet.
              </li>
              <li>
                Developed a dashboard visualizing latency, packet loss, and reachability metrics from inter-zone probing, giving engineers real-time insight into network health across 24 zones and 200K+ hosts.
              </li>
            </ul>
          </article>
          <article className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/uber-logo.png"
                alt="Uber logo"
                className="h-12 w-12 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-slate-800">
                  Software Engineering Intern <span className="font-normal text-slate-500">| Uber Technologies Inc.</span>
                </h3>
                <p className="text-sm italic text-slate-500">
                  May 2025 – August 2025 | San Francisco, California
                </p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              <li>
                Built and optimized service mesh software rate-limiting systems using gRPC to ensure TLS-based security, cryptographic assurance, and high system performance in internal and external customer-facing services.
              </li>
              <li>
                Designed and implemented authentication systems for 200K+ host services in production, verifying 50M+ requests per second to enhance reliability and trust in service communications.
              </li>
              <li>
                Mitigated risk of DoS attacks by enforcing safeguards against malicious routing or service impersonation.
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className="border-t border-slate-200 pt-5">
        <h2 className="mb-5 text-sm font-bold tracking-[0.2em] text-slate-500">
          VOLUNTEERING
        </h2>
        <div className="space-y-7">
          <article className="space-y-3 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-shrink-0 items-center gap-2">
                <img
                  src="/acm-logo.svg"
                  alt="ACM UTSA logo"
                  className="h-11 w-11 rounded-full object-contain"
                />
                <img
                  src="/acm-w_logo.svg"
                  alt="ACM-W logo"
                  className="h-11 w-11 rounded-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-slate-800">
                  President <span className="font-normal text-slate-500">| Association for Computing Machinery (ACM UTSA)</span>
                </h3>
                <p className="text-sm italic text-slate-500">
                  (Promoted from ACM-W President and ACM-W Presidential Junior Officer)
                </p>
                <p className="text-sm italic text-slate-500">
                  August 2023 - May 2026
                </p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              <li>
                Directed operations for UTSA&apos;s largest tech org with 2,000+ members, leading an 80+ person leadership team to plan and execute 4 major events including RowdyHacks, CodeQuantum, Rowdy Datathon, and Rowdy CyberCon.
              </li>
              <li>
                Drove a 22% membership increase in ACM-W through targeted tabling and outreach campaigns.
              </li>
            </ul>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <figure>
                <img
                  src="/acm-leadership.png"
                  alt="ACM UTSA leadership team group photo"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
              <figure>
                <img
                  src="/acm-event.png"
                  alt="ACM UTSA members presenting at an event"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
              <figure>
                <img
                  src="/acm-women.png"
                  alt="UTSA student organization group photo"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
            </div>
          </article>
          <article className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-shrink-0 items-center gap-2">
                <img
                  src="/rowdyhacks-logo.png"
                  alt="RowdyHacks logo"
                  className="h-10 w-10 object-contain"
                />
                <img
                  src="/codequantum-logo.png"
                  alt="CodeQuantum logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-slate-800">
                  Tech Lead, Public Relations Lead <span className="font-normal text-slate-500">| RowdyHacks, CodeQuantum Hackathon</span>
                </h3>
                <p className="text-sm italic text-slate-500">
                  (Promoted from Public Relations Team and Logistics Team)
                </p>
                <p className="text-sm italic text-slate-500">
                  December 2023 - Present
                </p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              <li>
                Led a technical team in building and deploying a full-stack event platform handling authentication, data validation, and check-in logic under live-event load for 700+ total attendees.
              </li>
              <li>
                Secured $30,000+ in sponsor funding for RowdyHacks XI and managed event logistics end-to-end.
              </li>
            </ul>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <figure>
                <img
                  src="/rowdyhacks-team.png"
                  alt="RowdyHacks team group photo"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
              <figure>
                <img
                  src="/rowdyhacks-event.png"
                  alt="Attendees at a RowdyHacks event"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
              <figure>
                <img
                  src="/rowdyhacks-vivian.jpg"
                  alt="Vivian at a RowdyHacks event"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </figure>
            </div>
          </article>
        </div>
      </section>
    </div>
  ),
  mail: (
    <div className="py-6 text-center text-slate-700">
      <p>
        Temporarily Disabled, Sorry! Please message me on{" "}
        <a
          href="https://www.linkedin.com/in/vivtratx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-2 transition-colors hover:text-sky-900"
        >
          LinkedIn
        </a>{" "}
        instead :)
      </p>
    </div>
  ),
};

export default function Home() {
  const [activePage, setActivePage] = useState<keyof typeof pageContent | null>(
    null,
  );
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [visible, setVisible] = useState(false);

  const togglePage = (page: keyof typeof pageContent, e: React.MouseEvent) => {
    if (activePage === page) {
      setVisible(false);
      setTimeout(() => setActivePage(null), 300);
      return;
    }

    // Get the button's center position relative to the viewport
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    // The modal is centered in the viewport (fixed inset-0 flex items-center justify-center)
    // So we need the origin relative to where the modal will be rendered
    const modalWidth = Math.min(window.innerWidth - 32, 576); // max-w-xl = 576px, minus p-4*2
    const modalHeight = 200; // approximate, adjust if needed
    const modalLeft = (window.innerWidth - modalWidth) / 2;
    const modalTop = (window.innerHeight - modalHeight) / 2;

    const originX = buttonCenterX - modalLeft;
    const originY = buttonCenterY - modalTop;

    setOrigin({ x: `${originX}px`, y: `${originY}px` });
    setActivePage(page);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-white">
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-white">
        <div className="absolute inset-0 top-[50px] z-0">
          <App />
        </div>

        <div className="relative z-10 flex flex-col items-start">
          <MainCard />

          {activePage && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div
                style={{
                  transformOrigin: `${origin.x} ${origin.y}`,
                  transform: visible ? "scale(1)" : "scale(0.01)",
                  opacity: visible ? 1 : 0,
                  transition:
                    "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease",
                }}
                className={`w-full ${activePage === "work" ? "flex max-h-[80vh] max-w-3xl flex-col overflow-hidden" : "max-w-xl"} rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setVisible(false);
                      setTimeout(() => setActivePage(null), 300);
                    }}
                    className="h-3.5 w-3.5 rounded-full bg-red-500 transition hover:bg-red-600"
                  />
                  <span className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                  <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
                  <div className="ml-4 text-sm font-medium">{activePage}</div>
                </div>
                <div className={`${activePage === "work" ? "min-h-0 flex-1 overflow-y-auto" : ""} text-slate-700`}>
                  {pageContent[activePage]}
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex space-x-4">
            <CircleUserButton onClick={(e) => togglePage("profile", e)} />
            <LinkButton onClick={(e) => togglePage("links", e)} />
            <BriefcaseButton onClick={(e) => togglePage("work", e)} />
            <MailButton onClick={(e) => togglePage("mail", e)} />
          </div>
        </div>
      </main>
    </div>
  );
}
