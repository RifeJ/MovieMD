import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/converted.svg";
import { SunMedium, Search, Bell, UserRound } from "lucide-react";

function NavBar() {
  return (
    <div className="pt-10 fixed left-0 right-0 max-w-350 mx-auto z-10 ">
      <div className="flex items-center justify-between px-8 py-2 transition-all duration-500 rounded-full border shadow-2xl backdrop-blur-md bg-info-content/60 border-neutral-content/10">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="w-12 h-12" />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-6" role="tablist ">
            <li>
              <NavLink
                to={"/"}
                role="tab"
                className="tab text-[15px] font-bold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pricing"}
                role="tab"
                className="tab text-[15px] font-bold">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/movies"}
                role="tab"
                className="tab text-[15px] font-bold">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/series"}
                role="tab"
                className="tab text-[15px] font-bold">
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/collection"}
                role="tab"
                className="tab text-[15px] font-bold">
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/faq"}
                role="tab"
                className="tab text-[15px] font-bold">
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-4">
            <li className="flex items-center opacity-60 hover:opacity-100 transition-all duration-300">
              <button>
                <Search />
              </button>
            </li>
            <li className="flex items-center opacity-60 hover:opacity-100 transition-all duration-300">
              <Link>
                <Bell />
              </Link>
            </li>
            <li className="flex items-center opacity-60 hover:opacity-100 transition-all duration-300">
              <Link>
                <UserRound />
              </Link>
            </li>
            <li className="flex items-center opacity-60 hover:opacity-100 transition-all duration-300">
              <button>
                <SunMedium />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
