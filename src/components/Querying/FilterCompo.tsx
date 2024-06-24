import Input from "@/UI/Input";
import React from "react";

const FilterComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <div className="flex justify-center my-5">
        <label htmlFor="">Greater than:</label>
        <Input handleChange={handleChange} placeHolder="4" />
      </div>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[80px] border text-center ${
                  ele.isFilter && "bg-black text-white"
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

export default FilterComponent;
