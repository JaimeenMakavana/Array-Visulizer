import Input from "@/UI/Input";
import React from "react";

const MapComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Map Method</h1>

      <p className="text-xs text-center">Convert All square into round.</p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[60px] border text-center ${
                  ele.isMapped ? "bg-black text-white rounded-full" : ""
                }`}
              >
                {ele.label}
              </div>
              <div className="text-center text-xs relative">
                {index === 0 && (
                  <p className="absolute bottom-0 -left-8 text-xs -top-[1px]">
                    index
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MapComponent;
