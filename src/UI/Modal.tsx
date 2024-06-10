import React from "react";

const Modal = ({ toggle, children }: { toggle: any; children: any }) => {
  return (
    <div
      className={` fixed inset-0 bg-black/60 ${
        toggle ? "" : "hidden"
      } flex justify-center items-center`}
    >
      <div className=" max-w-[400px] bg-white shadow-md p-5">{children}</div>
    </div>
  );
};

export default Modal;
