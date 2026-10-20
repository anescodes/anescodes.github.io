import { Link, NavLink } from "react-router-dom";

export default function LearningLabNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800 bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5">
        <Link to="/learning" className="flex items-center gap-2">
          <span className="font-bold text-sm tracking-wider">
            LEARNING<span className="text-emerald-300">LAB</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 text-xs">
          <NavLink
            to="/learning"
            end
            className={({ isActive }) =>
              `rounded-md px-3 py-1.5 font-medium transition ${
                isActive ? "bg-emerald-800 text-white" : "text-emerald-100 hover:text-white"
              }`
            }
          >
            Overview
          </NavLink>

          <Link
            to="/"
            className="rounded-md bg-emerald-800 px-3 py-1.5 text-emerald-100 transition hover:bg-emerald-900 hover:text-white"
          >
            Portfolio ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}