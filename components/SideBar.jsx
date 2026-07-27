import React from "react";

const SideBar = ({ children, isOpen, setSideBar }) => {
  return (
    <div>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-surface p-5 text-foreground transition duration-700 md:w-1/2 lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute right-4 top-4 p-2 font-mono text-lg font-medium text-foreground transition-colors hover:text-univ"
          onClick={() => setSideBar(false)}
          aria-label="Close menu"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && <div className="fixed left-0 top-0 z-30 h-full w-full bg-overlay" />}
    </div>
  );
};

export default SideBar;
