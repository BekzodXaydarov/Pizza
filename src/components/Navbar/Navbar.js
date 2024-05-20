import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../redux/selector";

export default function Navbar() {
  const user = useUser();
  return (
    <nav className=" w-full flex items-center justify-between bg-[#FACC15] w-100 p-4">
      <Link to={"/"} className="font-mono font-normal text-[19px]">
        REACT PIZZA CO.
      </Link>
      <input
        type="text"
        placeholder="Search Order #"
        className="rounded-2xl md:w-[250px] px-[16px] py-[5px] w-[112px] h-[36px] outline outline-[#F2C00E] bg-[#FEF9C3]"
      />
      {user.username ? (
        <h1 className={`font-[600] text-xl  md:block hidden`}>
          {user?.username}
        </h1>
      ) : null}
    </nav>
  );
}
