"use client";
import Button from "@/UI/Button";
import FillComponent from "@/components/Home/FillComponent";
import First from "@/components/Home/First";
import WithComponent from "@/components/Home/WithCompo";
import { useState } from "react";

const App = () => {
  const [Arr, setArr] = useState([{ id: 1, value: 1 }]);
  const [selectedMethod, setselectedMethod] = useState("first");

  const [ArrFill, setArrfill] = useState([
    { label: 1, isFill: false },
    { label: 2, isFill: false },
    { label: 3, isFill: false },
    { label: 4, isFill: false },
    { label: 5, isFill: false },
    { label: 6, isFill: false },
    { label: 7, isFill: false },
    { label: 8, isFill: false },
    { label: 9, isFill: false },
    { label: 10, isFill: false },
  ]);

  const [WithArr, setWithArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [FillInput, setFillInput] = useState("");

  // handlePush
  const handlePush = () => {
    setselectedMethod("first");
    const newArr = [...Arr];
    if (Arr[Arr.length - 1].value < 10) {
      newArr.push({
        id: newArr[newArr.length - 1].id + 1,
        value: newArr[newArr.length - 1].value + 1,
      });
      setArr(newArr);
    } else if (Arr.length === 0) {
      setArr([{ id: 1, value: 1 }]);
    } else {
      setArr([{ id: 1, value: 1 }]);
    }
  };

  // handleUnshift
  const handleUnshift = () => {
    setselectedMethod("first");

    const newArr = [...Arr];
    if (newArr[0].value < 10) {
      newArr.unshift({
        id: newArr[0].id - 1,
        value: newArr[0].value + 1,
      });
      setArr(newArr);
    } else {
      setArr([{ id: 1, value: 1 }]);
    }
  };

  //  handlePop
  const handlePop = () => {
    setselectedMethod("first");

    const newArr = [...Arr];
    if (newArr.length > 1) {
      newArr.pop();
    }
    setArr(newArr);
  };

  //  handleShift
  const handleShift = () => {
    setselectedMethod("first");

    const newArr = [...Arr];
    if (newArr.length > 1) {
      newArr.shift();
    }
    setArr(newArr);
  };

  // handleConcat
  const handleConcat = () => {
    setselectedMethod("first");

    const newArr1 = [...Arr];
    const newArr2 = [...Arr];

    const concatenatedArr =
      newArr1.length < 5 ? newArr1.concat(newArr2) : [{ id: 1, value: 1 }];
    // Concatenate and assign to a new variable
    setArr(concatenatedArr);
  };

  // handleFill
  const handleFill = () => {
    setselectedMethod("fill");

    if (!FillInput) {
      const newArr = ArrFill.map((ele) => ({ ...ele, isFill: true }));
      setArrfill(newArr);
    } else if (FillInput.split(",").length > 1) {
      const [start, end] = FillInput.split(",").map(Number);

      if (start < 1 || end > 10 || start > end) {
        console.log("Invalid range");
        return;
      }

      const newArr = ArrFill.map((ele) => ({
        ...ele,
        isFill: ele.label >= start && ele.label <= end,
      }));

      setArrfill(newArr);
    } else {
      const inputValue = Number(FillInput);
      if (inputValue < 0 || inputValue > 10) {
        return;
      } else {
        const newArr = ArrFill.map((ele) => ({
          ...ele,
          isFill: ele.label >= inputValue,
        }));
        setArrfill(newArr);
      }
      console.log("FillInput3", FillInput);
    }
  };

  // handleWith
  const handleWith = () => {
    setselectedMethod("with");
    if (FillInput.split(",").length > 1) {
      const newArr = WithArr.with(
        Number(FillInput.split(",")[0]),
        Number(FillInput.split(",")[1])
      );
      setWithArr(newArr);
    } else {
      setWithArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className=" flex flex-wrap py-2 gap-1 justify-center">
        <Button name="Push" handleClick={handlePush} />
        <Button name="Unshift" handleClick={handleUnshift} />
        <Button name="Pop" handleClick={handlePop} />
        <Button name="Shift" handleClick={handleShift} />
        <Button name="Concat" handleClick={handleConcat} />
        <Button name="Fill" handleClick={handleFill} />
        <Button name="With" handleClick={handleWith} />
      </div>
      {selectedMethod === "first" && <First Arr={Arr} />}
      {selectedMethod === "fill" && (
        <FillComponent Arr={ArrFill} handleChange={setFillInput} />
      )}
      {selectedMethod === "with" && (
        <WithComponent Arr={WithArr} handleChange={setFillInput} />
      )}
    </div>
  );
};

export default App;
