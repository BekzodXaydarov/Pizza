import React from "react";
import { Link } from "react-router-dom";
import { useCart, useUser } from "../../redux/selector";
import { useDispatch } from "react-redux";
import { ClearItem } from "../../redux/cart";
import CartItem from "../../components/cartItem/CartItem";

export default function Cart() {
  const user = useUser();
  const cart = useCart();
  const dispatch = useDispatch();
  const ClearData = () => {
    dispatch(ClearItem());
  };
  return (
    <div className="max-w-[752px] m-auto p-[5px]">
      <Link to={"/menu"} className="text-[#3B82F6] text-[14px]">
        ← Back to menu
      </Link>
      <div className="mt-[15px]">
        <h1 className="text-[20px] font-sans font-[500]">
          Your Cart,{user?.username}
        </h1>
        <div>
          {cart.map((x) => {
            return <CartItem x={x} />;
          })}
        </div>
        <div className="mt-[25px]">
          <Link
            className="px-[15px] py-[15px] bg-[#FACC15] rounded-[30px] font-[500]"
            to={"/order/new"}
          >
            ORDER PIZZAS
          </Link>
          <button
            onClick={ClearData}
            className="px-[15px] py-[15px] bg-[#F1F3F0] rounded-[30px] font-[500] ml-[15px] border-2 border-[#DAD7D5] text-[#DAD7D5] hover:bg-[#DAD7D5] hover:text-[#000] transition ease-in-out"
          >
            CLEAR CART
          </button>
        </div>
      </div>
    </div>
  );
}
