"use client";
import Button from "@/UI/Button";
import { getRandomLightColor } from "@/lib/Global";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [Arr, setArray]: any = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [MoreThenOne, setMoreThenOne] = useState(0);
  const [SelectedAt, setSelectedAt] = useState(0);

  // Function to generate a random color

  const handlePush = () => setArray([...Arr, Arr[Arr.length - 1] + 1]);
  const handlePushMoreThenOne = () => {
    let newArr: any = [];
    for (let i = 0; i < MoreThenOne; i++) {
      newArr.push(Arr[Arr.length - 1] + i);
    }
    setArray([...Arr, ...newArr]);
  };

  const handlePop = () => {
    const newArr = [...Arr];
    newArr.pop();
    setArray(newArr);
  };

  const handleAt = () => setSelectedAt(MoreThenOne);

  const handleUnshift = () => {
    const newArr = [...Arr];
    newArr.unshift(1);
    setArray(newArr);
  };

  const handleShift = () => {
    const newArr = [...Arr];
    newArr.shift();
    setArray(newArr);
  };
  return (
    <main>
      <div className="my-5">
        <Button name="Push" handleClick={handlePush} />
        <Button name="Unshift" handleClick={handleUnshift} />
        <input
          type="text"
          className=" focus:outline-none border border-black px-2 w-[50px]"
          max={11}
          onChange={(e: any) => {
            setMoreThenOne(Number(e.target.value));
          }}
        />
        <Button name="Push More then One" handleClick={handlePushMoreThenOne} />
        <Button name="Pop" handleClick={handlePop} />
        <Button name="Shift" handleClick={handleShift} />
        <Button name="At" handleClick={handleAt} />
        <Button
          name="With"
          handleClick={() => toast.info("select an element")}
        />
      </div>

      {/* container */}
      <div className="flex justify-end items-center flex-col gap-[1px] flex-wrap">
        <p>
          &#91;
          {Arr.map((ele: any) => (
            <span key={ele}>{ele},</span>
          ))}
          &#93;
        </p>

        <p>{Arr.length}</p>
        {Arr?.map((ele: any, index: any) => {
          console.log("index::: ", index, SelectedAt);
          return (
            <div
              key={ele}
              style={{ background: getRandomLightColor() }}
              className={`w-[100px] h-[10px] text-white text-xs shadow-[2px_2px_1px_black] shrink-0 flex justify-center items-center ${
                SelectedAt === index ? "scale-125 my-1" : ""
              }`}
            >
              {ele}
            </div>
          );
        })}
      </div>
    </main>
  );
}
