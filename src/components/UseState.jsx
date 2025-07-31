import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-ocr mb-4">useState Hook</h1>
            <p className="text-sm md:text-base text-[#666666] leading-relaxed">
              Manages all the states and Functionality. Lets you create a state
              variable in your component to store and update values (like a counter or
              input text)
            </p>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-6" />

          {/* Code Example Header */}
          <h2 className="text-lg md:text-xl font-semibold mb-4">Code Example</h2>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Code Block */}
            <div className="flex-1">
              <div className="bg-[#1E1E1E] text-white rounded-2xl p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
                <pre className="whitespace-pre-wrap">{`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;`}</pre>
              </div>
            </div>

            {/* Working Component */}
            <div className="flex-1 lg:max-w-md">
              <div className="bg-white border border-gray-300 p-4 md:p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4">useState Hook Example</h3>
                <p className="text-base md:text-lg mb-4">Count: {count}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setCount(count + 1)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 cursor-pointer transition-colors"
                  >
                    Increment
                  </button>
                  <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 cursor-pointer transition-colors"
                  >
                    Decrement
                  </button>
                  <button
                    onClick={() => setCount(0)}
                    className="bg-gray-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-600 cursor-pointer transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
