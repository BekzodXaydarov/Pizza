import React from "react";
import { useDispatch } from "react-redux";
import { DecItem, IncItem, setDelete } from "../../redux/cart";

export default function CartItem({ x }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(setDelete(id));
  };
  const Inc = (id) => {
    dispatch(IncItem(id));
  };
  const Dec = (id) => {
    dispatch(DecItem(id));
  };
  return (
    <div key={x.id}>
      <div
        className="md:flex items-center justify-between mt-[15px]"
        key={x.id}
      >
        <p className="text-[16px] fo nt-sans">
          {x.count} x {x.name}
        </p>
        <div className="flex items-center justify-between">
          <p className="mr-[25px] font-bold">€{x.unitPrice * x.count}.00</p>

          <div>
            <button
              className="bg-[#FACC15] text-[14px] py-2 px-4 rounded-[50%] mr-2"
              onClick={() => Dec(x?.id)}
            >
              -
            </button>
            <span>{x.count}</span>
            <button
              className="bg-[#FACC15] text-[14px] py-2 px-4 rounded-[50%] ml-2"
              onClick={() => Inc(x?.id)}
            >
              +
            </button>
          </div>
          <button
            className="bg-[#FACC15] text-[14px] py-2 px-5 rounded-[20px] ml-2"
            onClick={() => handleDelete(x?.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <hr className="mt-[15px]" />
    </div>
  );
}
