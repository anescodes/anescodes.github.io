import thesisPdf from "../assets/master2.pdf"
const Research = () => {

  return (
    <section id="research" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-orange-500">
            Academic Research
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Research
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-600">
            My academic research and thesis work.
          </p>
        </div>

        {/* Thesis Preview Card */}
        <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* PDF First Page Preview */}
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            <iframe
              src={`${thesisPdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
              title="Master's Thesis First Page"
              className="h-full w-full"
            />
          </div>

          {/* Thesis Info */}
          <div className="px-2 pb-2 pt-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Master's Thesis
            </p>

            <h3 className="mt-2 text-lg font-bold text-gray-900">
              My Master's Thesis
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Networks & Distributed Systems
            </p>

            <a
              href={thesisPdf}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              View PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
