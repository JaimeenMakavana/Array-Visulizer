import React from "react";

const ReduceComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Reduce Method</h1>

      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 ? (
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[60px] border text-center `}>{ele}</div>
              {/* <div className={`size-[60px] border text-center `}>10</div> */}
              <div className="text-center text-xs relative">
                {index === 0 && (
                  <p className="absolute bottom-0 -left-8 text-xs -top-[1px]">
                    index
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className={`size-[60px] border text-center `}>55</div>
        )}
      </div>
    </div>
  );
};

export default ReduceComponent;
