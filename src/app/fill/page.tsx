"use client";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import { getRandomLightColor } from "@/lib/Global";
import React, { useState } from "react";

const Page = () => {
  const [Arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [fillWith, setfillWith] = useState("");
  const [startFrom, setstartFrom] = useState("");
  const [Case, setcase] = useState("");
  const [BackgrounColor, setBackgrounColor] = useState("");
  console.log("fillWith::: ", Case, fillWith, startFrom.split(","));
  return (
    <div className="p-10">
      <Button
        name="Fill With"
        handleClick={() => {
          if (fillWith && !startFrom) {
            setcase("case1");
            setBackgrounColor(fillWith);
          } else if (startFrom && startFrom.split(",").length === 1) {
            setcase("case2");
            setBackgrounColor(fillWith);
          } else if (startFrom && startFrom.split(",").length === 2) {
            setcase("case3");
            setBackgrounColor(fillWith);
          }
        }}
      />
      <input
        type="color"
        name=""
        id=""
        onChange={(e: any) => setfillWith(e.target.value)}
      />
      <Input
        onChange={(e: any) => {
          setstartFrom(e.target.value);
        }}
      />
      <div>
        <label htmlFor="">
          Case 1: Select only Color (do not type anything in input)
        </label>
      </div>
      <div>
        <label htmlFor="">Case 2: Select a number from 1 to 9</label>
      </div>
      <div>
        <label htmlFor="">
          Case 3: Select a range between 1 to 9, like this: 1,5
        </label>
      </div>
      {/* when user clicks on Fill with */}
      {/* ---fill--- */}
      <div className="flex justify-start items-center flex-wrap">
        {Arr.map((ele) => (
          <div
            className="size-[100px] border flex justify-center items-center"
            style={{
              background:
                Case === "case1"
                  ? BackgrounColor
                  : Case === "case2" && ele > Number(startFrom)
                  ? BackgrounColor
                  : Case === "case3" &&
                    ele >= Number(startFrom.split(",")[0]) &&
                    ele <= Number(startFrom.split(",")[1])
                  ? BackgrounColor
                  : getRandomLightColor(),
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
