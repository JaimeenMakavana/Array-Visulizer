"use client";
import Button from "@/UI/Button";
import FilterComponent from "@/components/Querying/FilterCompo";
import FindComponent from "@/components/Querying/FindComponent";
import FlatComponent from "@/components/Querying/FlatComponent";
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
  console.log("flatArray.length::: ", flatArray.length);
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

  return (
    <div className="h-full overflow-y-auto">
      <div className=" flex flex-wrap py-2 gap-1 justify-center px-5">
        <Button name="Filter" handleClick={handleFilter} />
        <Button name="Find/FindIndex" handleClick={handleFind} />
        <Button name="Flat" handleClick={handleFlat} />
      </div>

      {/* --methods-- */}
      {QueryMethod === "filter" && (
        <FilterComponent Arr={filterArray} handleChange={setfilterInput} />
      )}

      {QueryMethod === "find" && (
        <FindComponent Arr={findArray} handleChange={setFindInput} />
      )}

      {QueryMethod === "flat" && <FlatComponent Arr={flatArray} />}
    </div>
  );
};

export default Page;
