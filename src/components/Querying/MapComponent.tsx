import Input from "@/UI/Input";
import React from "react";

const MapComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Map Method</h1>

      <p className="text-xs text-center my-3">Convert All square into round.</p>
      <p className="text-xs text-violet-600 italic text-center">
        that means that it iterates over every element and perform an action.
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[80px] border text-center flex justify-center items-center ${
                  ele.isMapped ? "bg-black text-white rounded-full" : ""
                }`}
              >
                {ele.label}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MapComponent;
