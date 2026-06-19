import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import Image from "next/image";


const Nav = ({ setSideBar }) => {
  return (
    <nav>
      <a href="#" className="fixed top-8 left-5 font-bold">
        <Image src={`/rx-logo.png`} width={60} height={60} alt="Logo"/>
      </a>

      <button
        className="fixed top-10 right-10 cursor-pointer z-50 "
        onClick={() => setSideBar((prev) => !prev)}
      >
        <RxHamburgerMenu size={25} color="#000000" />
      </button>
    </nav>
  );
};

export default Nav;