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
    <div className="w-full  flex p-2 justify-center ">
      <div className="">
        <div className="w-full grid grid-cols-3 p-3 gap-2">
          {Info.map((item, index) => (
            <Card key={index} title={item.title} Def={item.Def} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
