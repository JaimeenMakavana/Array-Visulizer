import React from "react";

const First = ({ Arr }: { Arr: any }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.id} className="flex flex-col">
              <div className="size-[60px] border text-center">{index}</div>
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
      <p className="flex justify-center mt-5">
        [
        {Arr.map((ele: any) => (
          <span key={ele.id} className="">
            {ele.value},
          </span>
        ))}
        ]
      </p>
    </>
  );
};

export default First;
