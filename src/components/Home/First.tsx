import React from "react";

const First = ({ Arr }: { Arr: any }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center px-5 mt-10">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele.id} className="flex flex-col">
              <div className="size-[80px] border text-center flex justify-center items-center">
                {ele.value}
              </div>
            </div>
          ))}
      </div>
      <p className="flex justify-center mt-5">
        [
        {Arr.map((ele: any, index: any) => (
          <span key={ele.id} className="">
            {" "}
            {ele.value}{" "}
            <span className={`${Arr.length - 1 === index && "hidden"} `}>
              ,
            </span>
          </span>
        ))}
        ]
      </p>
    </>
  );
};

export default First;
