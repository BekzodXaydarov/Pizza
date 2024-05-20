import React from "react";
import { useCart } from "../../redux/selector";
import { Link } from "react-router-dom";

export default function Footer() {
  const cart = useCart();
  const price = cart.reduce(
    (price, item) => +price + +item.unitPrice * item.count,
    0
  );
  const length = cart.reduce((price, item) => price + item.count, 0);
  return (
    <>
      {cart.length > 0 ? (
        <div
          className={`flex items-center justify-between w-full h-[60px]   bg-[#292524]`}
        >
          <div className="flex items-center ml-2">
            <p className="text-[#CBC8C6] ">{length} PIZZAS</p>
            <p className="text-[#CBC8C6]  ml-[15px]">€{price}.00</p>
          </div>
          <Link className="text-white" to={"/cart"}>
            OPEN CART &#8594;
          </Link>
        </div>
      ) : null}
    </>
  );
}
