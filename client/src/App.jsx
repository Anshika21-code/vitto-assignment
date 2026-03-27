import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AIPlatformPage from "./pages/AIPlatformPage";
import AutomationPage from "./pages/AutomationPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<AIPlatformPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;