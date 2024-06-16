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
        <Input handleChange={handleChange} />
      </div>

      <p className=" text-xs text-center">
        (
        <span className=" text-red-600 italic font-semibold">
          ie: 1, 2, (1,2,3)
        </span>{" "}
        , first : from where you want to replace or add element, second: how
        many element you want to remove, third: what you want to add)
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[60px] border text-center `}>{ele}</div>
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

export default SpliceComponent;
