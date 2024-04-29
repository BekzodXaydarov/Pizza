import React, { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home/home";
import Order from "./page/Order/order";
import { useCart, useUser } from "./redux/selector";

const routes = [
  { id: 1, to: "/", element: Home },
  { id: 2, to: "/order", element: Order },
];

export default function App() {
  const user = useUser();
  const cart = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.username) {
      navigate("/");
    }
  }, [user?.username, navigate]);
  const price = cart.reduce(
    (price, item) => +price + +item.price * item.count,
    0
  );
  const length = cart.reduce(
    (price, item) => cart.length * item.count,
    0
  );
  console.log(length);
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
        {user.username ? (
          <h1 className={`font-[600] text-xl  md:block hidden`}>
            {user?.username}
          </h1>
        ) : null}
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
      {cart.length > 0 ? (
        <div
          className={`flex items-center justify-between w-full h-[56px] absolute bottom-0 bg-[#292524]`}
        >
          <div className="flex items-center ml-2">
            <p className="text-[#CBC8C6] ">{cart.length} PIZZAS</p>
            <p className="text-[#CBC8C6]  ml-[15px]">€{price}.00</p>
          </div>
          <button className="text-white">OPEN CART &#8594;</button>
        </div>
      ) : null}
    </div>
  );
}
