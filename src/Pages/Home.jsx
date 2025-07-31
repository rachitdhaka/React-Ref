import React from "react";
import Card from "../components/Card";

const Info = [
  { title: "useState", Def: "Manages  all the states and Functionality. Lets you create a state variable in your component to store and update values (like a counter or input text)." },
  { title: "useEffect", Def: "Handles side effects in functional components" },
  { title: "useRef", Def: "Handles side effects in functional components" },
  { title: "useMemo", Def: "Optimizes performance by memoizing values" },
  { title: "useCallback", Def: "Memoizes callback functions" },
  { title: "useContext", Def: "Optimizes performance by memoizing values" },
];
  
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">React Hooks Reference</h1>
            <p className="text-gray-600">Interactive examples and explanations for React hooks</p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Info.map((item, index) => (
              <Card key={index} title={item.title} Def={item.Def} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
