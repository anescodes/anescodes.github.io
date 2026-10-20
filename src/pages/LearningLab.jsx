import { Link } from "react-router-dom";
import LearningLabNavbar from "../components/LearningLabNavbar";
import { learningData } from "../data/learning";

export default function LearningLab() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <LearningLabNavbar />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">Learning Lab</h1>
          <p className="mt-1 text-sm text-slate-500">
            Notes and study modules on AI, mathematics, and data science.
          </p>
        </div>

        {/* Compact Horizontal Cards Stack */}
        <div className="space-y-4">
          {learningData.map((item) => (
            <Link
              key={item.id}
              to={`/learning/lesson/${item.id}`}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-500 hover:shadow-md"
            >
              {/* Unsplash Image (Left) */}
              <div className="sm:w-48 h-36 sm:h-auto shrink-0 bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content (Right) */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-emerald-700">{item.category}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-end text-xs font-semibold text-emerald-700">
                  Read concept →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}