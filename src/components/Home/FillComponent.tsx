import Input from "@/UI/Input";
import React from "react";

const FillComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <div className="flex justify-center my-5">
        <Input handleChange={handleChange} placeHolder="3, 7" />
      </div>

      <div className="my-3">
        <p className=" text-sm text-center">
          there are 3 ways, fill method can be used: <br />
          <span className=" text-orange-500">
            1.ie: 3, 7 in input, then between index 3 to 7, x value will be
            filled.
          </span>{" "}
          <br />
          <span className=" text-violet-500">
            2.ie: 3 in input, then from index 3, x value will be filled x value,{" "}
          </span>
          <br />
          <span className=" text-teal-600">
            3 .if you click fill without typing in input, then all the element
            of the array will be filled with x value, <br />
          </span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col relative">
              <div
                className={`size-[80px] border text-center ${
                  ele.isFill && "bg-black text-white"
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

export default FillComponent;
