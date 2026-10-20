
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "academic", label: "Academic Career" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">

        {/* Left: Lab buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/learning"
            className="group inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Learning Lab
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <Link
            to="/research-lab"
            className="group inline-flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Research Lab
            <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        {/* Right: Existing portfolio navigation */}
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                active === link.id
                  ? "bg-orange-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
