import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const scrollRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar percentage on scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const totalScroll = el.scrollWidth - el.clientWidth;
    if (totalScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const currentProgress = (el.scrollLeft / totalScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Optional: Only allow mouse wheel horizontal scroll if Ctrl or Shift key is pressed
    const onWheel = (e) => {
      if (e.ctrlKey || e.shiftKey) {
        e.preventDefault();
        el.scrollLeft += e.deltaY || e.deltaX;
      }
      // Otherwise, do NOT call preventDefault() so the page scrolls down normally
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

    el.addEventListener("scroll", handleScroll);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("click", onClickCapture, true);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);

    // Initial calculation
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  // Helper function to click and scroll forward by 400px
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header & Top Red Progress Bar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
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

          {/* Top Red Progress Bar & Counter */}
          <div className="hidden md:flex flex-col w-72">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                Projects
              </span>
              <span className="text-xs font-bold text-gray-900 tracking-wide">
                {Math.round(scrollProgress)}% Viewed
              </span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="absolute left-0 top-0 h-full bg-red-600 transition-all duration-150 ease-out"
                style={{ width: `${Math.max(scrollProgress, 5)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="relative group">
          {/* Floating Next Arrow Indicator */}
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg border border-gray-100 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white hover:shadow-xl opacity-90 group-hover:opacity-100 hidden md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

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
        </div>

        {/* Mobile progress bar and scroll hint */}
        <div className="mt-4 flex flex-col gap-2 md:hidden">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase">
              Projects
            </span>
            <span className="text-xs font-bold text-gray-900">
              {Math.round(scrollProgress)}% Viewed
            </span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="absolute left-0 top-0 h-full bg-red-600 transition-all duration-150 ease-out"
              style={{ width: `${Math.max(scrollProgress, 5)}%` }}
            />
          </div>
          <div className="mt-1 text-center text-xs text-gray-400">
            ← Drag or swipe to explore →
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;