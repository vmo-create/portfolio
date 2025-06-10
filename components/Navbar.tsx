import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggler from "@/components/shared/ThemeToggler";

const Navbar = () => {
  return (
    <nav className="text-base font-normal leading-normal z-30 absolute top-0 left-0 right-0 h-[72px] flex justify-between items-center ">
      <div>
        <Link href="/">Vanessa Moras</Link>
      </div>
      <div className="flex gap-[40px] items-center ">
        <Link href="/">Home</Link>

        <Link href="/">Works</Link>

        <Link href="/">Resume</Link>

        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
