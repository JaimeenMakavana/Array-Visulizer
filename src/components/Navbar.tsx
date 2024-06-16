"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

const List = ({ name, URL }: { name: string; URL: string }) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(URL)}
      className=" m-2 play2 cursor-pointer text-black relative group"
    >
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-[70%] group-hover:transition-all duration-500 "></span>
      {name}
    </li>
  );
};

const Navbar = () => {
  const [MobileMenuToggle, setMobileMenuToggle] = useState(false);

  useEffect(() => {
    if (MobileMenuToggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [MobileMenuToggle]);
  return (
    <div className="fixed inset-x-0 bg-black playwrite text-white h-[50px] flex justify-between items-center font-semibold px-3">
      <p>Array Visulizer</p>
      <TbMenu
        className=" text-white md:hidden"
        onClick={() => setMobileMenuToggle(!MobileMenuToggle)}
      />

      {/* mobile menu: */}
      <div
        className={`${
          MobileMenuToggle && "hidden"
        } fixed inset-0 bg-black/60 md:hidden`}
      >
        <div className={`w-[65%] bg-white h-full`}>
          <button
            className=" text-black"
            onClick={() => setMobileMenuToggle(!MobileMenuToggle)}
          >
            <IoIosClose className=" text-black" />
          </button>
          <ol className=" text-[12px]">
            <List name="Inserting" URL="/" />
            <List name="Deleting" URL="/delete" />
            <List name="Querying" URL="/query" />
            <List name="Transforming" URL="/transform" />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
