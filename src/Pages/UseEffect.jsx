import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // useEffect example - runs after every render to update document title
  useEffect(() => {
    document.title = `Timer: ${timer}s - useEffect Demo ${
      isRunning ? "(Running)" : "(Stopped)"
    }`;
  });

  // useEffect with dependency for timer control
  useEffect(() => {
    console.log("Component mounted - useEffect with empty dependency array");

    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function - runs when component unmounts or dependencies change
    return () => {
      console.log("Cleanup - clearing interval");
      if (interval) clearInterval(interval);
    };
  }, [isRunning]); // Dependency on isRunning

  // useEffect to log timer changes
  useEffect(() => {
    console.log(`Timer updated to: ${timer}`);
  }, [timer]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-ocr mb-4">useEffect Hook</h1>
            <p className="text-sm md:text-base text-[#666666] leading-relaxed">
              Performs side effects in functional components. It runs after every
              render and can be used for data fetching, subscriptions, or manually
              changing the DOM.
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
                <pre className="whitespace-pre-wrap">{`import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Runs after every render - updates document title
  useEffect(() => {
    document.title = \`Timer: \${timer}s \${isRunning ? '(Running)' : '(Stopped)'}\`;
  });

  // Runs when isRunning changes - controls interval
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function - clears interval
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]); // Dependency on isRunning

  // Runs when timer changes
  useEffect(() => {
    console.log(\`Timer: \${timer}\`);
  }, [timer]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => { setTimer(0); setIsRunning(true); };

  return (
    <div>
      <p>Timer: {timer}s</p>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerComponent;`}</pre>
              </div>
            </div>

            {/* Working Component */}
            <div className="flex-1 lg:max-w-md">
              <div className="bg-white border border-gray-300 p-4 md:p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4">useEffect Hook Example</h3>
                <p className="text-base md:text-lg mb-2">Timer: {timer}s</p>
                <p className="text-base md:text-lg mb-2">
                  Status: {isRunning ? "Running" : "Stopped"}
                </p>
                <p className="text-sm md:text-base mb-4 text-gray-600">
                  Page Title: Updated with timer value
                </p>
                
                <div className="space-y-2 mb-4 text-xs md:text-sm text-gray-600">
                  <p>• Timer updates every second when running (useEffect with dependency)</p>
                  <p>• Page title changes automatically (useEffect without dependencies)</p>
                  <p>• Check your browser tab title and console logs!</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={toggleTimer}
                    className={`${
                      isRunning
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white px-4 py-2 rounded-lg text-sm transition-colors`}
                  >
                    {isRunning ? "Stop Timer" : "Start Timer"}
                  </button>
                  <button
                    onClick={resetTimer}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                  >
                    Reset Timer
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

export default UseEffect;
