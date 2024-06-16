import Input from "@/UI/Input";
import React, { useState } from "react";

const IndexOfComponent = ({ Arr }: { Arr: any }) => {
  const [selectedDiv, setselectedDiv] = useState(0);
  return (
    <div>
      <h1 className="text-center font-semibold">IndexOF Method</h1>

      <p className=" text-sm text-center my-5">
        Clicks on one of the square below to find out index of it.
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div
                className={`size-[60px] border text-center ${
                  ele === selectedDiv ? "bg-black text-white" : ""
                }`}
                onClick={() => setselectedDiv(ele)}
              >
                {ele}
                <br />
                <span className="text-xs">
                  {ele === selectedDiv && `i is :${index}`}
                </span>
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

export default IndexOfComponent;
