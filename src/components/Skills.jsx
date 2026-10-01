import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
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

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center rounded-3xl border border-white/50 bg-white/70 p-8 text-center shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/80 bg-white shadow-sm">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                  draggable={false}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {skill.name}
              </h3>

              <span className="mt-3 rounded-full bg-orange-50/90 px-4 py-1.5 text-xs font-semibold text-orange-600">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;