import { skills } from "../data/portfolioData";

const SkillCard = ({ skill }) => (
  <div className="mr-5 flex w-44 shrink-0 flex-col items-center rounded-2xl border border-white/50 bg-white/70 p-5 text-center shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl">
    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/80 bg-white shadow-sm">
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        loading="lazy"
        draggable={false}
        className="h-9 w-9 object-contain"
      />
    </div>

    <h3 className="mt-4 text-base font-bold text-gray-900">{skill.name}</h3>

    <span className="mt-2 rounded-full bg-orange-50/90 px-3 py-1 text-xs font-semibold text-orange-600">
      {skill.level}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <style>{`
        @keyframes skills-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .skills-track {
          animation: skills-marquee 30s linear infinite;
        }
        .skills-marquee:hover .skills-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .skills-track { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-orange-500">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Skills
          </h2>

          <p className="mt-2 max-w-2xl text-base text-gray-600">
            The languages I use the most to build software and work with data.
          </p>
        </div>
      </div>

      {/* Rotating Skills Banner */}
      <div
        className="skills-marquee overflow-hidden py-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="skills-track flex w-max">
          {/* Original set */}
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}

          {/* Duplicate set for a seamless loop */}
          {skills.map((skill) => (
            <div key={`dup-${skill.name}`} aria-hidden="true">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;