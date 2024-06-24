import React from "react";

const FlatComponent = ({ Arr }: { Arr: any }) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Flat Method</h1>

      <p className=" text-center text-xs">
        FlatMap: it works similar to flat with map as extra functionality. visul
        representation is similar.
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div className={`size-[100px] border text-center flex flex-wrap`}>
                {ele.length > 0
                  ? ele.map((ele_: any) => (
                      <div
                        className={`size-[40px] border text-center flex flex-wrap `}
                        key={ele_}
                      >
                        {ele_.length > 0
                          ? ele_.map((ele1: any) => (
                              <div
                                className={`size-[20px] border text-center `}
                                key={ele1}
                              >
                                {ele1}
                              </div>
                            ))
                          : ele_}
                      </div>
                    ))
                  : ele}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FlatComponent;
