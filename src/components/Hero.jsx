import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-56px)] bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-56px)] max-w-7xl items-center px-6 py-16">
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