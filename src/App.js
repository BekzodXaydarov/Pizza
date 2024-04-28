import React, { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home/home";
import Order from "./page/Order/order";
import { useUser } from "./redux/selector";

const routes = [
  { id: 1, to: "/", element: Home },
  { id: 2, to: "/order", element: Order },
];

export default function App() {
  const user = useUser();
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user?.username){
       navigate('/')
    }
  },[user?.username,navigate])
  return (
    <div className="w-full flex items-center justify-between flex-col">
      <nav className=" w-full flex items-center justify-between bg-[#FACC15] w-100 p-4">
        <Link to={"/"} className="font-mono font-normal text-[19px]">
          REACT PIZZA CO.
        </Link>
        <input
          type="text"
          placeholder="Search Order #"
          className="rounded-2xl px-[25px] py-[5px] hover:px-[35px] outline outline-[#F2C00E] bg-[#FEF9C3]"
        />
        <h1 className={`font-[600] text-xl ${user.username ? "" : "hidden"}`}>{user?.username}</h1>
      </nav>
      <div className="w-full h-full">
        <Routes>
          {routes.map((rout) => {
            return (
              <Route key={rout.id} path={rout.to} element={<rout.element />} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}
