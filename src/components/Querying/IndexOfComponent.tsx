import React, { useState } from "react";

const IndexOfComponent = ({ Arr }: { Arr: any }) => {
  const [selectedDiv, setselectedDiv] = useState(0);
  return (
    <div>
      <h1 className="text-center font-semibold">IndexOF Method</h1>

      <p className=" text-sm text-center my-5">
        Clicks on one of the square from below to find out index of it.
        (lastIndexOf works similar but in reverse order)
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div
                className={`size-[80px] border text-center ${
                  ele === selectedDiv ? "bg-black text-white" : ""
                }`}
                onClick={() => setselectedDiv(ele)}
              >
                {ele}
                <br />
                <span className="text-xs">
                  {ele === selectedDiv && `index is : ${index}`}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndexOfComponent;
