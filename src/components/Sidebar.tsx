"use client";
import { useRouter } from "next/navigation";
import React from "react";

const List = ({ name, URL }: { name: string; URL: string }) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(URL)}
      className=" m-2 play2 cursor-pointer relative group"
    >
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-[70%] group-hover:transition-all duration-500 "></span>
      {name}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[100px] bg-gray-100">
      <ol className=" text-[12px]">
        <List name="Inserting" URL="/" />
        <List name="Deleting" URL="/delete" />
        <List name="Querying" URL="/query" />
        <List name="Transforming" URL="/transform" />
      </ol>
    </div>
  );
};

export default Sidebar;
