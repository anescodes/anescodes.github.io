import { useEffect, useRef } from "react";
import { academicPath } from "../data/portfolioData";

const AcademicPath = () => {
  const scrollRef = useRef(null);

  // Arrow button: scroll right
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // Mouse wheel (vertical) -> horizontal scroll, anywhere over the container
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // Let real horizontal gestures (trackpads) work natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // At the edges, let the page scroll normally
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    // passive: false is required to be able to call preventDefault()
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section id="academic" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-orange-500">
              Education & Growth
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Academic Path
            </h2>

            <p className="mt-2 max-w-2xl text-base text-gray-600">
              My educational background and milestones in computer science,
              systems, and AI.
            </p>
          </div>

          {/* Scroll Arrow */}
          <button
            onClick={scrollRight}
            className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-gray-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-500 hover:text-white md:flex"
            aria-label="Scroll academic path"
          >
            →
          </button>
        </div>

        {/* Horizontal Scroll Container (scrollbar hidden) */}
        <div
          ref={scrollRef}
          className="-mx-6 flex overflow-x-auto px-6 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6">
            {academicPath.map((item) => (
              <div
                key={item.id}
                className="flex w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between rounded-3xl border border-white/50 bg-white/70 p-6 shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl md:w-[400px]"
              >
                <div>
                  {/* Period & Status */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-orange-50/90 px-4 py-1.5 text-xs font-semibold text-orange-600">
                      {item.period}
                    </span>

                    <span className="text-xs font-medium text-gray-500">
                      {item.status}
                    </span>
                  </div>

                 {/* University Image (only if exists) */}
{item.image && (
  <div className="mt-6 h-40 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
    <img
      src={item.image}
      alt={item.school}
      loading="lazy"
      draggable={false}
      className="h-full w-full object-cover"
    />
  </div>
)}

                  {/* Degree */}
                  <h3 className="mt-6 text-xl font-bold leading-tight text-gray-900">
                    {item.degree}
                  </h3>

                  {/* University */}
                  <p className="mt-2 text-base font-semibold text-orange-500">
                    {item.school}
                  </p>

                  <p className="mt-1 text-sm text-gray-400">{item.location}</p>

                  {/* Full University Name */}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {item.fullName}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile scroll hint */}
        <div className="mt-2 text-center text-xs text-gray-400 md:hidden">
          ← Swipe to explore →
        </div>
      </div>
    </section>
  );
};

export default AcademicPath;