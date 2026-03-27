import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AIPlatformPage from "./pages/AIPlatformPage.jsx";
import AutomationPage from "./pages/AutomationPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<AIPlatformPage />} />
        <Route path="/automation" element={<AutomationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
