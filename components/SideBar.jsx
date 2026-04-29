import React from "react";

const SideBar = ({ children, isOpen, setSideBar }) => {
  return (
    <div>
      <div
        className={`p-5 fixed z-50 top-0 right-0 w-full h-full md:w-1/2 lg:w-[35%] bg-white transition transform duration-700 overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"} dark:bg-night`}
      >
        <button
          className="absolute right-4 top-4 p-2 font-bold text-black dark:text-white"
          onClick={() => setSideBar(false)}
        >
          X
        </button>
        {children}
      </div>
      { isOpen && <div className="fixed left-0 top-0 z-30 w-full h-full bg-black opacity-50" />}
    </div>
  );
};

export default SideBar;
