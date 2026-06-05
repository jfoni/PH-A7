"use client";
import Link from "next/link";
import { useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {

  const [active, setActive] = useState("home");

  const btnColor = (name) => 
    `btn ${active === name ? "bg-green-900 text-white" : ""}`;


  const links = <>
    <Link href="/"  onClick={() => setActive("home")}>
              <button className={btnColor("home")}>
                <RiHome2Line />
                Home
              </button>
            </Link>
            <Link href="/timeline" onClick={() => setActive("timeline")}>
              <button className={btnColor("timeline")}>
                <IoMdTime />
                Timeline
              </button>
            </Link>
            <Link href="/stats" onClick={() => setActive("stats")}>
              <button className={btnColor("stats")}>
                <BsGraphUp />
                Stats
              </button>
            </Link>
  </>

  return (
    <div className="md:container md:mx-auto">
      <div className="navbar shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <span>Keen</span>
            <span className="text-green-900 font-light">Keeper</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end hidden lg:flex gap-6">
          <div className="navbar-end hidden lg:flex gap-6">
            {links}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
