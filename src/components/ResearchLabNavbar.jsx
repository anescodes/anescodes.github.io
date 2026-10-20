import { Link, NavLink } from 'react-router-dom';

export default function ResearchLabNavbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Link
          to="/research-lab"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Anes<span className="text-neutral-500">.</span>
          <span className="ml-2 text-neutral-400">Research Lab</span>
        </Link>

        <div className="flex items-center gap-2">
          <NavLink
            to="/research-lab"
            end
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm transition ${
                isActive
                  ? 'bg-white text-black'
                  : 'text-neutral-400 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            Overview
          </NavLink>

          <Link
            to="/"
            className="rounded-lg border border-white/15 px-3 py-2 text-sm text-neutral-300 transition hover:border-white/40 hover:text-white"
          >
            Portfolio ↗
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-2.5 text-xs leading-5 text-neutral-500">
          Here I publish my research, simple notes, and simple slides, for my
          own growth and for the benefit of the world. Happy reading.
        </p>
      </div>
    </nav>
  );
}