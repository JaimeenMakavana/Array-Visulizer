"use client";

import Button from "@/UI/Button";
import { useState } from "react";

const App = () => {
  const [Arr, setArr] = useState([
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
    { id: 6, value: "6" },
    { id: 7, value: "7" },
    { id: 8, value: "8" },
    { id: 9, value: "9" },
    { id: 10, value: "10" },
  ]);
  return (
    <div className="h-full overflow-y-auto">
      <div className=" flex flex-wrap py-2 gap-1 justify-center">
        <Button name="Push" handleClick={() => console.log("hello")} />
        <Button name="Unshift" handleClick={() => console.log("hello")} />
        <Button name="Pop" handleClick={() => console.log("hello")} />
        <Button name="Shift" handleClick={() => console.log("hello")} />
      </div>

      <div className="flex flex-wrap justify-center">
        {Arr.map((ele, index) => (
          <div key={ele.id} className="flex flex-col">
            <div className="size-[60px] border text-center"></div>
            <p className=" text-center text-xs">{index}</p>
          </div>
        ))}
      </div>

      <p></p>
    </div>
  );
};

export default App;
