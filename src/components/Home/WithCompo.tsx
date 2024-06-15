import Input from "@/UI/Input";
import React from "react";

const WithComponent = ({
  Arr,
  handleChange,
}: {
  Arr: any;
  handleChange: any;
}) => {
  return (
    <div>
      <div className="flex justify-center my-5">
        <Input handleChange={handleChange} />
      </div>
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

export default WithComponent;
