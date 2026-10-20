import { Link, useParams } from "react-router-dom";
import { learningData } from "../data/learning";
import LearningLabNavbar from "../components/LearningLabNavbar";

export default function Lesson() {
  const { lessonId } = useParams();
  const lesson = learningData.find((item) => item.id === lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <LearningLabNavbar />
        <main className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h1 className="text-xl font-bold">Lesson Not Found</h1>
          <Link to="/learning" className="mt-4 inline-block text-sm text-emerald-700 hover:underline">
            ← Back to Learning Lab
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <LearningLabNavbar />

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link to="/learning" className="text-xs text-slate-500 hover:text-emerald-700 font-medium">
          ← All Lessons
        </Link>

        <header className="mt-4 border-b border-slate-200 pb-6">
          <span className="text-xs font-semibold text-emerald-700 uppercase">{lesson.category}</span>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">{lesson.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 bg-emerald-50 border-l-2 border-emerald-600 p-3 rounded-r">
            {lesson.introduction}
          </p>
        </header>

        <article className="mt-6 space-y-8 bg-white p-6 rounded-xl border border-slate-200">
          {lesson.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">{sec.heading}</h2>

              {sec.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="text-sm text-slate-700 leading-relaxed">{p}</p>
              ))}

              {sec.equation && (
                <div className="my-3 rounded-lg border border-emerald-200 bg-emerald-50/50 p-4 text-center font-mono text-emerald-900 text-sm font-semibold">
                  {sec.equation}
                </div>
              )}

              {sec.paragraphs2?.map((p, pIdx) => (
                <p key={pIdx} className="text-sm text-slate-700 leading-relaxed">{p}</p>
              ))}

              {sec.bullets && (
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}

              {sec.code && (
                <pre className="my-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs font-mono text-emerald-300">
                  <code>{sec.code}</code>
                </pre>
              )}
            </section>
          ))}
        </article>
      </main>
    </div>
  );
}