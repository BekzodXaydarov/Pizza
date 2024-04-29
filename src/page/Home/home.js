import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../redux/selector";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useUser();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setUser(value));
    navigate("/order");
  };
  return (
    <form
      className="bg-[#F1F3F0] w-full h-[90vh] text-center"
      onSubmit={handleChange}
    >
      <h1 className="pt-[50px] text-[30px] font-sans text-[#44403C] font-[500]">
        The best pizza. <br />{" "}
        <p className="text-[#706A65]">
          Straight out of the oven, straight to you.
        </p>
      </h1>
      {user?.username ? (
        <button
          className="bg-[#FACC15] px-[25px] py-[11px] rounded-[20px] font-[400] mt-[30px]"
          onClick={() => navigate("/order")}
        >
          CONTINUE ORDERING,{user?.username}
        </button>
      ) : (
        <div>
          <p className="pt-[25px]">
            👋 Welcome! Please start by telling us your name:
          </p>
          <input
            type="text"
            placeholder="Your full name"
            className="px-5 py-3 w-[288px] h-[45px]  outline-[#F2C00E] outline-1 rounded-[20px] mt-[15px]"
            onChange={(event) => {
              setValue(event.target.value);
              if (event.target.value.length > 0) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
          <br />
          {open && (
            <button className="bg-[#FACC15] px-[15px] py-[15px] rounded-[20px] font-[500] mt-[30px]">
              START ORDERING
            </button>
          )}
        </div>
      )}
    </form>
  );
}
