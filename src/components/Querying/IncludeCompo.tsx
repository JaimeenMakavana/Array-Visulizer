import Input from "@/UI/Input";
import React from "react";

const IncludeComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Include Method</h1>
      <div className=" flex justify-center items-center flex-col my-5">
        <p className=" text-sm">Check if provided value is in array?:</p> <br />
        <Input handleChange={handleChange} placeHolder="choose b/w 1 to 10" />
      </div>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[80px] border text-center ${
                  ele.isInclude ? "bg-black text-white" : ""
                }`}
              >
                {ele.label}
                <br />
                <span className=" text-xs text-white">
                  ({ele.isInclude && "True"})
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IncludeComponent;
