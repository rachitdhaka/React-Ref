import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
// import UseState from "./Pages/UseState";
import Sidebar from "./components/Sidebar";
import LandingPage from "./Pages/LandingPage";
import UseEffect from "./Pages/UseEffect";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<><Sidebar /> <Home /></>} />
        <Route path="/useState" element={<><Sidebar /> <UseState /></>} />
        <Route path="/useEffect" element={<><Sidebar /> <UseEffect /></>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
