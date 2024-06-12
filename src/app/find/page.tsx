"use client";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import { getRandomLightColor } from "@/lib/Global";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [Arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [findValue, setfindValue] = useState({ type: "", value: "" });
  const [Background, setBackground] = useState("");
  const [foundIndex, setFoundIndex] = useState(null);

  const evaluateCondition = (ele) => {
    const value = Number(findValue.value);
    switch (findValue.type) {
      case ">":
        return ele > value;
      case "<":
        return ele < value;
      case ">=":
        return ele >= value;
      case "<=":
        return ele <= value;
      default:
        return false;
    }
  };

  const handleFind = () => {
    if (!findValue.type || !findValue.value) {
      toast.error("Select both value and condition");
      return;
    }

    const index = Arr.findIndex(evaluateCondition);
    if (index !== -1) {
      setFoundIndex(index);
      setBackground("#000");
    } else {
      toast.info("No element satisfies the condition");
    }
  };

  return (
    <div className="p-10">
      <Button name="Fill With" handleClick={handleFind} />
      <p>
        (find and findIndex work similarly, one return value while other return
        index)
      </p>
      <select
        name=""
        id=""
        onChange={(e) => setfindValue({ ...findValue, type: e.target.value })}
      >
        <option value=">">&#62;</option>
        <option value="<">&#60;</option>
        <option value=">=">&#62;=</option>
        <option value="<=">&#60;=</option>
      </select>
      <Input
        onChange={(e) => {
          setfindValue({ ...findValue, value: e.target.value });
        }}
      />
      <div className="flex justify-start items-center flex-wrap">
        {Arr.map((ele, index) => (
          <div
            className="size-[100px] border flex justify-center items-center"
            style={{
              background:
                index === foundIndex ? Background : getRandomLightColor(),
            }}
            key={ele}
          >
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
