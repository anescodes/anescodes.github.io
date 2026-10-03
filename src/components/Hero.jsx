import { personalInfo } from "../data/portfolioData";

// Soft orange hexagons drifting behind the introduction (left side only).
// x/y are percentages inside the left area, size is in px.
const hexagons = [
  { x: 4,  y: 8,  size: 120, fill: true,  opacity: 0.10, duration: 14, delay: 0,  move: "a" },
  { x: 58, y: 4,  size: 70,  fill: false, opacity: 0.30, duration: 11, delay: 2,  move: "b" },
  { x: 30, y: 30, size: 190, fill: false, opacity: 0.18, duration: 18, delay: 1,  move: "c" },
  { x: 72, y: 38, size: 90,  fill: true,  opacity: 0.12, duration: 13, delay: 3,  move: "a" },
  { x: 6,  y: 58, size: 80,  fill: false, opacity: 0.28, duration: 12, delay: 0,  move: "b" },
  { x: 44, y: 66, size: 140, fill: true,  opacity: 0.08, duration: 16, delay: 4,  move: "c" },
  { x: 80, y: 80, size: 60,  fill: false, opacity: 0.30, duration: 10, delay: 1,  move: "a" },
  { x: 18, y: 84, size: 100, fill: true,  opacity: 0.10, duration: 15, delay: 2,  move: "b" },
];

const HexBackground = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden md:w-1/2"
  >
    <style>{`
      @keyframes hex-a {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        50%      { transform: translate(18px, -26px) rotate(12deg); }
      }
      @keyframes hex-b {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        50%      { transform: translate(-22px, 20px) rotate(-14deg); }
      }
      @keyframes hex-c {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33%      { transform: translate(14px, 18px) rotate(8deg); }
        66%      { transform: translate(-12px, -14px) rotate(-6deg); }
      }
      @media (prefers-reduced-motion: reduce) {
        .hex-shape { animation: none !important; }
      }
    `}</style>

    {hexagons.map((h, i) => (
      <svg
        key={i}
        viewBox="0 0 100 115"
        className="hex-shape absolute"
        style={{
          left: `${h.x}%`,
          top: `${h.y}%`,
          width: h.size,
          height: h.size * 1.15,
          opacity: h.opacity,
          animation: `hex-${h.move} ${h.duration}s ease-in-out ${h.delay}s infinite`,
        }}
      >
        <polygon
          points="50,2 98,29 98,86 50,113 2,86 2,29"
          fill={h.fill ? "#f97316" : "none"}
          stroke="#f97316"
          strokeWidth={h.fill ? 0 : 2}
          strokeLinejoin="round"
        />
      </svg>
    ))}
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-white">
      <HexBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-16 md:grid-cols-2">

          {/* Left — Introduction */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-500">
              {personalInfo.tagline}
            </p>

            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl md:text-8xl">
              {personalInfo.shortName}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {personalInfo.bio}
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
              {personalInfo.bioSecondary}
            </p>
          </div>

          {/* Right — Photo Card */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.cv}
              download
              className="mt-4 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;