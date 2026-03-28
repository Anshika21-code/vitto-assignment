import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AIPlatformPage from "./pages/AIPlatformPage";
import AutomationPage from "./pages/AutomationPage";
import SignupPage from "./pages/SignupPage";
import CollectionsPage from "./pages/CollectionsPage";
import AgenticAIPage   from "./pages/AgenticAIPage";
import APIInfraPage    from "./pages/APIInfraPage";
import AboutPage       from "./pages/AboutPage";
import ContactPage     from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<AIPlatformPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/agentic-ai"  element={<AgenticAIPage />} />
           <Route path="/api-infra"   element={<APIInfraPage />} />
          <Route path="/about"       element={<AboutPage />} /> 
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;