import React from "react";

const SliceComponent = ({
  Arr,
  setSelectedSlice,
  SelectedSlice,
}: {
  Arr: any;
  setSelectedSlice: any;
  SelectedSlice: any;
}) => {
  return (
    <div>
      <h1 className="text-center font-semibold">Slice Method</h1>

      <p className=" text-xs text-center my-3">
        (Select more then 1 element and then click slice button)
      </p>
      <div className="flex flex-wrap justify-center">
        {Arr.length > 0 &&
          Arr?.map((ele: any, index: number) => (
            <div key={ele} className="flex flex-col">
              <div
                className={`size-[80px] border text-center ${
                  SelectedSlice.includes(ele) ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedSlice([...SelectedSlice, ele])}
              >
                {ele}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SliceComponent;
