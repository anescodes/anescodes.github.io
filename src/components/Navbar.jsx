import { useState } from "react";

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
        
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActive("home")}
          className="text-lg font-bold tracking-tight text-gray-900"
        >
          Anes.
        </a>

        {/* Navigation */}
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