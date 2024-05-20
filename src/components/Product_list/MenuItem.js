import React from "react";
import { useDispatch } from "react-redux";
import { DecItem, IncItem, setCart, setDelete } from "../../redux/cart";
import { useCart } from "../../redux/selector";

export default function MenuItem({
  id,
  img,
  name,
  description,
  price,
  disable,
  product,
}) {
  const dispatch = useDispatch();
  const cart = useCart();
  const handleAdd = (product) => {
    dispatch(setCart(product));
  };
  const handleDelete = (id) => {
    dispatch(setDelete(id));
  };
  const Inc = (id) => {
    dispatch(IncItem(id));
  };
  const Dec = (id) => {
    dispatch(DecItem(id));
  };
  const exsite = cart.find((x) => {
    return x.id === id;
  });
  return (
    <>
      <li className="flex mt-1 w-full h-[112px] p-2">
        <img src={img} alt="" className={`${disable ? "grayscale" : " "}`} />
        <div className="flex flex-col w-full ml-2">
          <h1 className="font-[500] text-[16px] gont-sans">{name}</h1>
          <p className="text-[#78716C]">{description.join(",")}</p>
          <div className="flex items-center justify-between w-full mt-auto">
            {disable ? (
              <>
                <p className="text-[#78716C] font-[500]">SOLD OUT</p>
              </>
            ) : (
              <>
                <p>€{price}.00</p>

                {cart.map((x) => x.id).filter((x) => x === id)[0] ? (
                  <div className="flex items-center">
                    <button
                      className="bg-[#FACC15] text-[14px] py-2 px-4 rounded-[50%] mr-2"
                      onClick={() => Dec(id)}
                    >
                      -
                    </button>
                    <span>{exsite?.count}</span>
                    <button
                      className="bg-[#FACC15] text-[14px] py-2 px-4 rounded-[50%] ml-2"
                      onClick={() => Inc(id)}
                    >
                      +
                    </button>
                    <button
                      className="bg-[#FACC15] text-[14px] py-2 px-5 rounded-[20px] ml-2"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-[#FACC15] text-[14px] py-2 px-5 rounded-[20px]"
                    onClick={() => handleAdd(product)}
                  >
                    ADD TO CART
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </li>
      <hr className="h-[5px] mt-2" />
    </>
  );
}
