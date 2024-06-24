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
        <Input handleChange={handleChange} placeHolder="3, 7" />
      </div>

      <div className="my-3">
        <p className=" text-sm text-center">
          there are 3 ways, fill method can be used: <br />
          <span className=" text-orange-500">
            1.ie: 3(index), 7(replaced value) in input,that does mean that 7
            value will be replaced at index 3.
          </span>{" "}
        </p>
      </div>
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

export default WithComponent;
