export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-white font-bold">Ashley Hickmon</div>
            <div className="mt-1 text-sm">
              SVP of Sales Development &amp; Growth
              <br />
              Fairway Independent Mortgage Corporation
              <br />
              NMLS #250615
            </div>
          </div>
          <div className="text-sm">
            <div className="text-white font-semibold">Contact</div>
            <div className="mt-1">
              <a href="tel:+13036698454" className="hover:text-white">
                (303) 669-8454
              </a>
            </div>
            <div>
              <a
                href="mailto:ashley.hickmon@fairwaymc.com"
                className="hover:text-white"
              >
                ashley.hickmon@fairwaymc.com
              </a>
            </div>
            <div className="mt-1">
              4850 Tamiami Trail N, Suite 347
              <br />
              Naples, FL 34103
            </div>
          </div>
          <div className="text-xs leading-relaxed">
            <div className="text-white font-semibold text-sm">Disclosures</div>
            <p className="mt-1">
              Equal Housing Lender. All loans subject to credit approval.
              Rates, terms and programs subject to change without notice. Not a
              commitment to lend. Copyright © Fairway Independent Mortgage
              Corporation. NMLS Entity ID #2289.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs">
          © {new Date().getFullYear()} Ashley Hickmon, Fairway Independent
          Mortgage Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
