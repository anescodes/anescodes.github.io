
import { useMemo, useState } from 'react';
import ResearchLabNavbar from '../components/ResearchLabNavbar';
import NodeNetwork from '../components/NodeNetwork';
import { researchAreas, researchDocuments } from '../data/research';

/* Pick the quote you like best and replace this object. Options:
   - "An investment in knowledge pays the best interest." (Benjamin Franklin)
   - "If I have seen further, it is by standing on the shoulders of giants." (Isaac Newton)
   - "The more that you read, the more things you will know." (Dr. Seuss)
   - "Whoever treads a path seeking knowledge, God makes easy for him a path to Paradise." (Prophet Muhammad, Sahih Muslim)
*/
const quote = {
  text: 'If I have seen further, it is by standing on the shoulders of giants.',
  author: 'Isaac Newton',
};

function DocCard({ doc, areaTitle }) {
  const [imgFailed, setImgFailed] = useState(false);

  // Support either "thumbnail" or "image" in research.js
  const thumbnail = doc.thumbnail || doc.image;

  return (
    <a
      href={doc.file}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-xl border border-white/10 bg-neutral-950 transition hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
    >
      {/* Card image */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-neutral-900">
        {thumbnail && !imgFailed ? (
          <img
            src={thumbnail}
            alt={`Cover of ${doc.title}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-500">
            <span className="text-4xl">📄</span>
            <span className="text-sm">{doc.type || 'Document'}</span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-md bg-black/80 px-2.5 py-1 text-xs text-neutral-200 backdrop-blur">
          {doc.type}
        </span>

        <span className="absolute bottom-3 right-3 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-black opacity-0 transition group-hover:opacity-100">
          Open PDF ↗
        </span>
      </div>

      {/* Card information */}
      <div className="p-5">
        <div className="flex justify-between gap-4 text-xs text-neutral-500">
          <span>{areaTitle}</span>
          <span>{doc.date}</span>
        </div>

        <h3 className="mt-3 text-lg font-medium">{doc.title}</h3>

        <p className="mt-2 text-sm leading-7 text-neutral-400">
          {doc.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {doc.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function ResearchLab() {
  const areaTitles = useMemo(
    () => Object.fromEntries(researchAreas.map((area) => [area.id, area.title])),
    []
  );

  const docs = useMemo(
    () =>
      [...researchDocuments].sort((a, b) =>
        (b.date || '').localeCompare(a.date || '')
      ),
    []
  );

  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <ResearchLabNavbar />

      {/* Hero section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, #000 50%, transparent)',
            maskImage: 'linear-gradient(to bottom, #000 50%, transparent)',
          }}
        >
          <NodeNetwork />
        </div>

        <div className="pointer-events-none relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:pb-28 sm:pt-20">
          <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-white" />
            Anes Touati / Academic Work
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Research
            <br />
            <span className="text-neutral-500">Lab.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            A personal archive of scientific exploration, research papers,
            technical experiments, and ideas across computer science.
          </p>

          <blockquote className="mt-8 max-w-xl border-l border-white/20 pl-4">
            <p className="text-sm italic leading-7 text-neutral-300">
              “{quote.text}”
            </p>
            <footer className="mt-1 text-xs text-neutral-500">
              {quote.author}
            </footer>
          </blockquote>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20">
        {/* Research interests */}
        <section className="border-t border-white/10 py-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Research Interests
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400">
            Fields I explore through coursework, independent learning, paper
            reviews, and practical experiments.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {researchAreas.map((area) => (
              <article
                key={area.id}
                className="rounded-2xl border border-white/10 bg-neutral-950 p-6 transition hover:border-white/30"
              >
                <p className="text-xs tracking-widest text-neutral-600">
                  {area.number}
                </p>

                <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-400">
                  {area.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-neutral-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Document cards */}
        {docs.length > 0 && (
          <section className="border-t border-white/10 py-12">
            <div className="mb-7">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Research Documents
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Theses, research papers, presentations, and technical work.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => (
                <DocCard
                  key={doc.id}
                  doc={doc}
                  areaTitle={areaTitles[doc.area] || 'Research'}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs tracking-wider text-neutral-600 sm:flex-row sm:justify-between">
          <span>ANES TOUATI</span>
          <span>LEARN · INVESTIGATE · DOCUMENT</span>
        </div>
      </footer>
    </div>
  );
}
