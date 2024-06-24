import React from "react";

const ReduceComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Reduce Method</h1>

      <p className=" text-xs text-center">
        (ReduceRight works similar to this method)
      </p>
      <div className="flex flex-wrap justify-center mt-5">
        {Arr.length > 0 ? (
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[80px] border text-center `}>{ele}</div>
            </div>
          ))
        ) : (
          <div className={`size-[80px] border text-center `}>55</div>
        )}
      </div>
    </div>
  );
};

export default ReduceComponent;
