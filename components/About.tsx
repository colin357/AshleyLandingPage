export default function About() {
  const credentials = [
    { title: "Top 1% Mortgage Originator", subtitle: "2021" },
    { title: "Top Originator", subtitle: "2022" },
    { title: "Top Women Originator", subtitle: "2022" },
    { title: "Fairway Club Diamond", subtitle: "Member" },
    { title: "Military Mortgage Specialist", subtitle: "VA loans" },
    { title: "Reverse Mortgage Planner", subtitle: "Certified" },
    { title: "Renovation Loan Certified", subtitle: "203(k) & more" },
    { title: "Licensed in all 50 states", subtitle: "NMLS #250615" },
  ];

  const loanTypes = [
    "Conventional",
    "FHA",
    "VA",
    "USDA",
    "Jumbo",
    "Construction",
    "Renovation",
    "Refinance",
    "Reverse",
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              About Ashley
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              A mortgage partner who actually picks up the phone.
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                With offices in both Colorado and Florida and licensing across
                all 50 states, Ashley has built her career around one simple
                idea: a home loan should feel like a partnership, not a
                transaction.
              </p>
              <p>
                Whether you&apos;re buying your first home, building from the
                ground up, refinancing, or tapping equity, Ashley walks you
                through every loan option — then guides you from application
                to closing and beyond.
              </p>
              <p>
                She leads Fairway&apos;s Sales Development &amp; Growth team as
                SVP and has been recognized as a Top 1% Mortgage Originator,
                Top Women Originator, and a Fairway Club Diamond member.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                Contact Ashley directly
              </div>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <div>
                  Phone:{" "}
                  <a
                    href="tel:+13036698454"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    (303) 669-8454
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a
                    href="mailto:ashley.hickmon@fairwaymc.com"
                    className="font-medium text-brand-700 hover:underline"
                  >
                    ashley.hickmon@fairwaymc.com
                  </a>
                </div>
                <div>Naples, FL &amp; Colorado offices · NMLS #250615</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white p-6 ring-1 ring-brand-100">
              <h3 className="text-lg font-semibold text-slate-900">
                Credentials &amp; recognition
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <li
                    key={c.title}
                    className="rounded-xl bg-white p-3 ring-1 ring-slate-100"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {c.title}
                    </div>
                    <div className="text-xs text-slate-500">{c.subtitle}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">
                Loan types Ashley handles
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {loanTypes.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
