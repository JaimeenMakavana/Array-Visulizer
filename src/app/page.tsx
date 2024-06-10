"use client";
import Button from "@/UI/Button";
import Input from "@/UI/Input";
import Modal from "@/UI/Modal";
import { getRandomLightColor } from "@/lib/Global";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [Arr, setArray]: any = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [MoreThenOne, setMoreThenOne] = useState(0);
  const [SelectedAt, setSelectedAt] = useState(0);
  const [ConcatModal, setConcatModal] = useState(false);
  const [ConcateArr, setConcateArr] = useState([]);
  const [FilterModal, setFilterModal] = useState(false);
  const [FilterValue, setFilterValue] = useState({
    value: 0,
    method: "",
    id: 0,
  });
  // Function to generate a random color

  const handlePush = () => setArray([...Arr, Arr[Arr.length - 1] + 1]);
  const handlePushMoreThenOne = () => {
    let newArr: any = [];
    for (let i = 0; i < MoreThenOne; i++) {
      newArr.push(Arr[Arr.length - 1] + i);
    }
    setArray([...Arr, ...newArr]);
  };

  const handlePop = () => {
    const newArr = [...Arr];
    newArr.pop();
    setArray(newArr);
  };

  const handleAt = () => setSelectedAt(MoreThenOne);

  const handleUnshift = () => {
    const newArr = [...Arr];
    newArr.unshift(1);
    setArray(newArr);
  };

  const handleShift = () => {
    const newArr = [...Arr];
    newArr.shift();
    setArray(newArr);
  };
  return (
    <main>
      <div className="my-5">
        <Button name="Push" handleClick={handlePush} />
        <Button name="Unshift" handleClick={handleUnshift} />

        <Input
          onChange={(e: any) => {
            setMoreThenOne(Number(e.target.value));
          }}
          className="w-[50px]"
        />
        <Button name="Push More then One" handleClick={handlePushMoreThenOne} />
        <Button name="Pop" handleClick={handlePop} />
        <Button name="Shift" handleClick={handleShift} />
        <Button name="At" handleClick={handleAt} />
        <Button
          name="With"
          handleClick={() => toast.info("select an element")}
        />
        <Button
          name="Concat"
          handleClick={() => setConcatModal(!ConcatModal)}
        />
        <Button
          name="Filter"
          handleClick={() => setFilterModal(!FilterModal)}
        />
        <Button
          name="Reverse"
          handleClick={() => {
            const newArr = Arr.reverse();
            setArray(newArr);
          }}
        />
        <Button
          name="Sort"
          handleClick={() => {
            const newArr = Arr.sort();
            console.log("newArr:::-- ", newArr);
            setArray(newArr);
          }}
        />
        {/* <Button
          name="Filter"
          // handleClick={() => {
          //   const newArr = Arr.find((ele:any) =>)
          // }}
        /> */}
        {/* will open one modal , there will be 4 option >,<,>=,<= , when type one of then then other will be disable, submit , will show result */}
      </div>

      {/* container */}
      <div className="flex justify-end items-center flex-col gap-[1px] flex-wrap">
        <p>
          &#91;
          {Arr.map((ele: any) => (
            <span key={ele}>{ele},</span>
          ))}
          &#93;
        </p>

        <p>{Arr.length}</p>
        {Arr?.map((ele: any, index: any) => {
          return (
            <div
              key={ele}
              style={{ background: getRandomLightColor() }}
              className={`w-[100px] h-[10px] text-white text-xs shadow-[2px_2px_1px_black] shrink-0 flex justify-center items-center ${
                SelectedAt === index ? "scale-125 my-1" : ""
              }`}
            >
              {ele}
            </div>
          );
        })}
      </div>

      {/* concat model */}
      <Modal toggle={ConcatModal}>
        <Input
          onChange={(e: any) => {
            const newArr = e.target.value.split(",");
            newArr.map((ele: any) => Number(ele));
            setConcateArr(newArr);
          }}
          className="w-[100px]"
          placeholder="ie: 1,2,3,4"
        />
        <button
          onClick={() => {
            setConcatModal(!ConcatModal);
            const newArr = Arr.concat(ConcateArr);
            setArray(newArr);
            setConcateArr([]);
          }}
        >
          Submit
        </button>
      </Modal>

      {/* filter model */}
      <Modal toggle={FilterModal}>
        <label htmlFor="forGreaterThen">
          Greater Then
          <Input
            onChange={(e: any) => {
              setFilterValue({
                value: Number(e.target.value),
                method: "greaterThen",
                id: 1,
              });
            }}
            className="w-[100px]"
            placeholder="ie: 11"
          />
        </label>
        <br />
        <label htmlFor="forGreaterThen">
          Less Then
          <Input
            onChange={(e: any) => {
              setFilterValue({
                value: Number(e.target.value),
                method: "lessThen",
                id: 2,
              });
            }}
            className="w-[100px]"
            placeholder="ie: 11"
          />
        </label>{" "}
        <br />
        <label htmlFor="forGreaterThen">
          Greater Then Equal to
          <Input
            onChange={(e: any) => {
              setFilterValue({
                value: Number(e.target.value),
                method: "greaterThenEqual",
                id: 3,
              });
            }}
            className="w-[100px]"
            placeholder="ie: 11"
          />
        </label>{" "}
        <br />
        <label htmlFor="forGreaterThen">
          Less Then Equal to
          <Input
            onChange={(e: any) => {
              setFilterValue({
                value: Number(e.target.value),
                method: "lessThenEqual",
                id: 4,
              });
            }}
            className="w-[100px]"
            placeholder="ie: 11"
          />
        </label>{" "}
        <br />
        <button
          onClick={() => {
            setFilterModal(!FilterModal);
            const newArr = Arr.filter((ele: any) => {
              switch (FilterValue.method) {
                case "greaterThen":
                  return ele > FilterValue.value;
                case "lessThen":
                  return ele < FilterValue.value;
                case "greaterThenEqual":
                  return ele >= FilterValue.value;
                case "lessThenEqual":
                  return ele <= FilterValue.value;
                default:
                  return false;
              }
            });
            setArray(newArr);
            setFilterValue({ ...FilterValue, id: 0 });
          }}
        >
          Filter
        </button>
      </Modal>
    </main>
  );
}
