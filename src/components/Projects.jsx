import { useEffect, useRef } from "react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const scrollRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Mouse wheel (vertical) -> horizontal scroll
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // At the edges, let the page scroll normally
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    // Drag with mouse
    const onMouseDown = (e) => {
      drag.current = {
        active: true,
        startX: e.pageX,
        startScroll: el.scrollLeft,
        moved: 0,
      };
      el.classList.add("cursor-grabbing", "select-none");
    };

    const onMouseMove = (e) => {
      if (!drag.current.active) return;
      const dx = e.pageX - drag.current.startX;
      drag.current.moved = Math.abs(dx);
      el.scrollLeft = drag.current.startScroll - dx;
    };

    const stopDrag = () => {
      drag.current.active = false;
      el.classList.remove("cursor-grabbing", "select-none");
    };

    // Don't trigger links if the user was dragging
    const onClickCapture = (e) => {
      if (drag.current.moved > 5) {
        e.preventDefault();
        e.stopPropagation();
        drag.current.moved = 0;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("click", onClickCapture, true);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-orange-500">
            Work & Experiments
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Projects
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-600">
            A selection of projects I've built across software, data, and
            research.
          </p>
        </div>

        {/* Horizontal Scroll Container (scrollbar hidden) */}
        <div
          ref={scrollRef}
          className="-mx-6 flex cursor-grab overflow-x-auto px-6 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl md:w-[400px]"
              >
                <div>
                  {/* Project Image */}
                  {project.images?.[0] && (
                    <div className="h-40 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold leading-tight text-gray-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      draggable={false}
                      className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      draggable={false}
                      className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-orange-400 hover:text-orange-600"
                    >
                      Live Demo
                    </a>
                  )}
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

export default Projects;