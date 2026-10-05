import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      label: personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        personalInfo.email
      )}`,
    },
    {
      name: "LinkedIn",
      label: "Anes Abdelmounaim Touati",
      href: personalInfo.linkedin,
    },
    {
      name: "GitHub",
      label: "@anescodes",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            Contact
          </h2>

          <p className="text-sm text-gray-500">
            Open to opportunities, collaborations, or just to say hello.
          </p>
        </div>

        {/* Horizontal Contact Row */}
        <ul className="grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-3">
          {contacts.map((item) => (
            <li key={item.name} className="bg-black">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-5 py-4 transition-colors duration-300 hover:bg-white"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-white transition-colors group-hover:text-black">
                    {item.name}
                  </h3>
                  <p className="truncate text-xs text-gray-500 transition-colors group-hover:text-black">
                    {item.label}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-base text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;