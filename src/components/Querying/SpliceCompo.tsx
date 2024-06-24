import Input from "@/UI/Input";
import React from "react";

const SpliceComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Splice Method</h1>

      <div className="flex justify-center my-5">
        <Input handleChange={handleChange} placeHolder="1,2,(3,4,5)" />
      </div>

      <p className=" text-xs text-center">
        (
        <span className=" text-violet-600 italic font-semibold">
          ie: 1, 2, (1,2,3)
        </span>{" "}
        , <span className=" text-orange-300">first</span> : from where you want
        to replace or add element,{" "}
        <span className=" text-pink-500">Second</span>: how many element you
        want to remove, <span className=" text-teal-500">Third</span>: what you
        want to add)
      </p>
      <div className="flex flex-wrap justify-center mt-5">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[80px] border text-center `}>{ele}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpliceComponent;
