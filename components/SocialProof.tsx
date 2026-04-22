export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "Ashley made our first home purchase feel easy. She answered every question, every time — even on weekends. We closed on time and under our budget.",
      author: "The Ramirez Family",
      context: "First-time buyers · Colorado",
    },
    {
      quote:
        "After three lenders told us a jumbo loan wasn't possible, Ashley put together a plan in 24 hours. She genuinely advocates for her clients.",
      author: "David & Megan K.",
      context: "Jumbo refinance · Florida",
    },
    {
      quote:
        "As a veteran, I appreciated how well she knew VA loans. No guesswork, no surprises — just a smooth close on our forever home.",
      author: "Sergeant M. Johnson (Ret.)",
      context: "VA purchase loan",
    },
  ];

  const stats = [
    { value: "50", label: "States licensed" },
    { value: "Top 1%", label: "Mortgage originator" },
    { value: "$1B+", label: "Funded for families" },
    { value: "15+ yrs", label: "Mortgage experience" },
  ];

  return (
    <section className="bg-slate-900 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Social proof
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Families across the country trust Ashley.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10"
            >
              <div className="text-3xl font-extrabold text-accent-500">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="flex gap-1 text-accent-500" aria-hidden="true">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <blockquote className="mt-3 text-slate-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-slate-400">{t.context}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#form"
            className="inline-block rounded-lg bg-accent-500 px-8 py-3 font-semibold text-slate-900 shadow-lg hover:bg-accent-600 transition"
          >
            Start my loan plan →
          </a>
        </div>
      </div>
    </section>
  );
}
