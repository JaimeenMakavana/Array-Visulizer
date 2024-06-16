"use client";
import Button from "@/UI/Button";
import FilterComponent from "@/components/Querying/FilterCompo";
import FindComponent from "@/components/Querying/FindComponent";
import FlatComponent from "@/components/Querying/FlatComponent";
import IncludeComponent from "@/components/Querying/IncludeCompo";
import IndexOfComponent from "@/components/Querying/IndexOfComponent";
import MapComponent from "@/components/Querying/MapComponent";
import ReduceComponent from "@/components/Querying/ReduceComp";
import ReverseComponent from "@/components/Querying/ReverseComponent";
import SliceComponent from "@/components/Querying/SliceCompo";
import SpliceComponent from "@/components/Querying/SpliceCompo";
import SpliceCompo from "@/components/Querying/SpliceCompo";
import React, { useState } from "react";

const Page = () => {
  const [QueryMethod, setQueryMethod] = useState("filter");

  const [filterArray, setfilterArray] = useState([
    { label: 1, isFilter: false },
    { label: 2, isFilter: false },
    { label: 3, isFilter: false },
    { label: 4, isFilter: false },
    { label: 5, isFilter: false },
    { label: 6, isFilter: false },
    { label: 7, isFilter: false },
    { label: 8, isFilter: false },
    { label: 9, isFilter: false },
    { label: 10, isFilter: false },
  ]);
  const [filterInput, setfilterInput] = useState("");

  const [findArray, setfindArray] = useState([
    { label: 1, isFind: false },
    { label: 2, isFind: false },
    { label: 3, isFind: false },
    { label: 4, isFind: false },
    { label: 5, isFind: false },
    { label: 6, isFind: false },
    { label: 7, isFind: false },
    { label: 8, isFind: false },
    { label: 9, isFind: false },
    { label: 10, isFind: false },
  ]);
  const [findInput, setFindInput] = useState("");

  const [flatArray, setflatArray] = useState([
    1,
    2,
    [3, 4],
    [5, 6, 7, [8, 9, 10]],
  ]);

  const [includeArray, setIncludeArray] = useState([
    { label: 1, isInclude: false },
    { label: 2, isInclude: false },
    { label: 3, isInclude: false },
    { label: 4, isInclude: false },
    { label: 5, isInclude: false },
    { label: 6, isInclude: false },
    { label: 7, isInclude: false },
    { label: 8, isInclude: false },
    { label: 9, isInclude: false },
    { label: 10, isInclude: false },
  ]);
  const [includeInput, setIncludeInput] = useState("");

  const [IndexArr, setIndexArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [mapArray, setMapArray] = useState([
    { label: 1, isMapped: false },
    { label: 2, isMapped: false },
    { label: 3, isMapped: false },
    { label: 4, isMapped: false },
    { label: 5, isMapped: false },
    { label: 6, isMapped: false },
    { label: 7, isMapped: false },
    { label: 8, isMapped: false },
    { label: 9, isMapped: false },
    { label: 10, isMapped: false },
  ]);

  const [ReduceArr, setReduceArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [ReverseArr, setReverseArr] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  const [SliceArr, setSliceArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [SelectedSlice, setSelectedSlice] = useState([]);

  const [SpliceArr, setSpliceArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [SpliceInput, setSpliceInput] = useState("");

  // ---handle filter------//
  const handleFilter = () => {
    setQueryMethod("filter");

    const inputValue = Number(filterInput);
    if (inputValue < 0 || inputValue > 10) {
      return;
    } else {
      const newArr = filterArray.map((ele) => ({
        ...ele,
        isFilter: ele.label > inputValue,
      }));
      setfilterArray(newArr);
    }
  };

  // --- handle find --- //
  const handleFind = () => {
    setQueryMethod("find");

    if (findInput) {
      const inputValue = Number(findInput);
      let found = false;

      const newArr = findArray.map((ele) => {
        if (!found && ele.label > inputValue) {
          found = true;
          return { ...ele, isFind: true };
        } else {
          return { ...ele, isFind: false };
        }
      });

      setfindArray(newArr);
    }
  };

  // --- handle flat --- //
  const handleFlat = () => {
    if (QueryMethod === "flat" && flatArray.length !== 10) {
      const newArr = flatArray.flat(Infinity);
      setflatArray(newArr);
    } else if (flatArray.length === 10 && QueryMethod === "flat") {
      setflatArray([1, 2, [3, 4], [5, 6, 7, [8, 9, 10]]]);
    } else {
      setQueryMethod("flat");
    }
  };

  //  --- handle include --- //
  const handleInclude = () => {
    setQueryMethod("include");

    if (includeInput) {
      const inputValue = Number(includeInput);
      let found = false;

      const newArr = includeArray.map((ele) => {
        if (!found && ele.label >= inputValue) {
          found = true;
          return { ...ele, isInclude: true };
        } else {
          return { ...ele, isInclude: false };
        }
      });

      setIncludeArray(newArr);
    }
  };

  //  --- handleIndex --- //
  const handleIndexOf = () => {
    setQueryMethod("indexOf");
  };

  //  --- handleMap --- //
  const handleMap = () => {
    setQueryMethod("map");

    if (QueryMethod === "map") {
      const newArr = mapArray.map((ele) => {
        return { ...ele, isMapped: true };
      });
      setMapArray(newArr);
    }
  };

  // --- handleReduce --- //
  const handleReduce = () => {
    setQueryMethod("reduce");
    if (QueryMethod === "reduce" && ReduceArr.length > 1) {
      const newArr: any = ReduceArr.reduce((acc: any, ini: any) => {
        return acc + ini;
      }, 0);
      setReduceArr(newArr);
    } else if (QueryMethod === "reduce" && ReduceArr.length === 0) {
      setReduceArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  };

  //  --- handleReverse --- //
  const handleReverse = () => {
    setQueryMethod("reverse");

    if (QueryMethod === "reverse") {
      const newArr = [...ReverseArr];
      newArr.reverse();
      setReverseArr(newArr);
    }
  };

  // --- handleSlice --- //
  const handleSlice = () => {
    setQueryMethod("slice");
    if (SelectedSlice.length > 0) {
      setSliceArr((prevArr: any) => {
        return prevArr.filter((ele: never) => !SelectedSlice.includes(ele));
      });
    } else {
      setSliceArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  };

  // --- handleSplice --- //
  const handleSplice = () => {
    setQueryMethod("splice");

    if (SpliceInput) {
      const inputArray = SpliceInput.split(",");
      const start = parseInt(inputArray[0], 10);
      const deleteCount = parseInt(inputArray[1], 10);
      const items = inputArray.slice(2).join(",").slice(1, -1).split(",");

      const newArr = [...SpliceArr];

      if (items.length > 0) {
        newArr.splice(
          start,
          deleteCount,
          ...items.map((item) => parseInt(item, 10))
        );
      } else {
        newArr.splice(start, deleteCount);
      }

      setSpliceArr(newArr);
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className=" flex flex-wrap py-2 gap-1 justify-center px-5">
        <Button name="Filter" handleClick={handleFilter} />
        <Button name="Find/FindIndex" handleClick={handleFind} />
        <Button name="Flat" handleClick={handleFlat} />
        <Button name="Includes" handleClick={handleInclude} />
        <Button name="IndexOf" handleClick={handleIndexOf} />
        <Button name="Map" handleClick={handleMap} />
        <Button name="Reduce" handleClick={handleReduce} />
        <Button name="Reverse" handleClick={handleReverse} />
        {/* <Button name="Some" handleClick={handleReverse} /> */}
        <Button name="Slice" handleClick={handleSlice} />
        <Button name="Splice" handleClick={handleSplice} />
      </div>

      {/* --methods-- */}
      {QueryMethod === "filter" && (
        <FilterComponent Arr={filterArray} handleChange={setfilterInput} />
      )}

      {QueryMethod === "find" && (
        <FindComponent Arr={findArray} handleChange={setFindInput} />
      )}

      {QueryMethod === "flat" && <FlatComponent Arr={flatArray} />}
      {QueryMethod === "include" && (
        <IncludeComponent handleChange={setIncludeInput} Arr={includeArray} />
      )}

      {QueryMethod === "indexOf" && <IndexOfComponent Arr={IndexArr} />}
      {QueryMethod === "map" && <MapComponent Arr={mapArray} />}
      {QueryMethod === "reduce" && <ReduceComponent Arr={ReduceArr} />}
      {QueryMethod === "reverse" && <ReverseComponent Arr={ReverseArr} />}

      {QueryMethod === "splice" && (
        <SpliceComponent Arr={SpliceArr} handleChange={setSpliceInput} />
      )}

      {QueryMethod === "slice" && (
        <SliceComponent
          SelectedSlice={SelectedSlice}
          setSelectedSlice={setSelectedSlice}
          Arr={SliceArr}
        />
      )}
    </div>
  );
};

export default Page;
