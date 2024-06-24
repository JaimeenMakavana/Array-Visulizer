import React from "react";

const ReverseComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold my-3">Reverse Method</h1>

      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[80px] border text-center `}>{ele}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReverseComponent;
