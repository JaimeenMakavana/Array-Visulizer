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
        <Input handleChange={handleChange} />
      </div>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.label} className="flex flex-col">
              <div
                className={`size-[60px] border text-center ${
                  ele.isFilter && "bg-black text-white"
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

export default FilterComponent;
