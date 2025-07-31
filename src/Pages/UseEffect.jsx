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
    <div className="p-4 bg-gray-50 h-screen w-full pl-5">
      {/* Introduction and Content */}
      <h1 className="text-2xl font-semibold font-ocr mb-4">useEffect Hook </h1>
      <h1 className="text-md text-[#666666] pl-2 ">
        {" "}
        Performs side effects in functional components. It runs after every
        render and can be used for data fetching, subscriptions, or manually
        changing the DOM.{" "}
      </h1>

      {/* Divider Line */}
      <hr className="border-t border-gray-300 my-6" />

      {/* code example  */}

      <h1 className="text-lg font-semibold mb-4">Code Example</h1>

      <div className="flex gap-10">
        <div className="bg-[#1E1E1E] text-white h-fit w-150 rounded-2xl p-4 font-mono text-sm">
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
        {/* Working Component */}
        <div className="bg-white border border-gray-300 p-4 rounded shadow  h-fit w-fit">
          <h1 className="text-xl font-bold   mb-4">useEffect Hook Example</h1>
          <p className="text-lg mb-2">Timer: {timer}s</p>
          <p className="text-lg mb-2">
            Status: {isRunning ? "Running" : "Stopped"}
          </p>
          <p className="text-lg mb-2">Page Title: Updated with timer value</p>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600">
              • Timer updates every second when running (useEffect with
              dependency)
            </p>
            <p className="text-sm text-gray-600">
              • Page title changes automatically (useEffect without
              dependencies)
            </p>
            <p className="text-sm text-gray-600">
              • Check your browser tab title and console logs!
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={toggleTimer}
              className={`${
                isRunning
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } text-white px-4 py-2 rounded`}
            >
              {isRunning ? "Stop Timer" : "Start Timer"}
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Reset Timer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
