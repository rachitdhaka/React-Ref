import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Pages/Home";
// import UseState from "./Pages/UseState";
import Sidebar from "./components/Sidebar";
import LandingPage from "./Pages/LandingPage";
import UseEffect from "./Pages/UseEffect";
import UseState from "./components/UseState";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Layout = ({ children }) => (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Page content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Layout><Home /></Layout>} />
        <Route path="/useState" element={<Layout><UseState /></Layout>} />
        <Route path="/useEffect" element={<Layout><UseEffect /></Layout>} />
        <Route path="*" element={<div className="p-4 text-center">Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
