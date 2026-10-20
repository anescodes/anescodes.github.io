import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Main portfolio
import Portfolio from "./pages/Portfolio";

// Learning Lab
import LearningLab from "./pages/LearningLab";
import Lesson from "./pages/Lesson";

// Research Lab
import ResearchLab from "./pages/ResearchLab";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Existing portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Green Learning Lab */}
        <Route path="/learning" element={<LearningLab />} />
        
        {/* Fixed: Added /lesson/ so it matches /learning/lesson/:lessonId */}
        <Route
          path="/learning/lesson/:lessonId"
          element={<Lesson />}
        />

        {/* Academic Research Lab */}
        <Route
          path="/research-lab"
          element={<ResearchLab />}
        />

        {/* Redirect unknown URLs to the portfolio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;