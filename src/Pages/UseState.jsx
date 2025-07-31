import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-50 h-screen w-full pl-5">
      {/* Introduction and Content */}
      <h1 className="text-2xl font-ocr-large mb-4">useState Hook</h1>
      <h1 className="text-md text-[#666666] pl-2 ">
        {" "}
        Manages all the states and Functionality. Lets you create a state
        variable in your component to store and update values (like a counter or
        input text){" "}
      </h1>

      {/* Divider Line */}
      <hr className="border-t border-gray-300 my-6" />

      {/* code example  */}

      <h1 className="text-lg font-semibold mb-4">Code Example</h1>

      <div className="flex gap-10">
        <div className="bg-[#1E1E1E] text-white h-fit w-150 rounded-2xl p-4 font-mono text-sm">
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
        {/* Working Component */}
        <div className=" p-4   w-fit">
          <div className="bg-white border border-gray-300 p-4 rounded-2xl shadow w-fit">
            <h1 className="text-xl font-bold mb-4">useState Hook Example</h1>
            <p className="text-lg mb-4">Count: {count}</p>
            <div className="space-x-2">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-[14px] hover:bg-blue-600 cursor-pointer"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="bg-red-500 text-white px-2 py-1 rounded-full text-[14px] hover:bg-red-600 cursor-pointer"
              >
                Decrement
              </button>
              <button

                onClick={() => setCount(0)}
                className="bg-gray-500 text-white px-2 py-1 rounded-full text-[14px] hover:bg-gray-600 cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
