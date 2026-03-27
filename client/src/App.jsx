import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AIPlatformPage from "./pages/AIPlatformPage";
import AutomationPage from "./pages/AutomationPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<AIPlatformPage />} />
          <Route path="/automation" element={<AutomationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;