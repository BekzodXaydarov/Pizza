import React, { useEffect, useState } from "react";
import { useCart, useUser } from "../../redux/selector";
import { useDispatch } from "react-redux";
import { fetchAddress } from "../../services/getAdress";
// import { useDispatch } from 'react-redux';
// import { Add } from '../../redux/cart';

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const cart = useCart();
  const user = useUser();
  const disptach = useDispatch();
  const price = cart.reduce(
    (price, item) => +price + +item.unitPrice * item.count,
    0
  );
  useEffect(() => {
    setName(user.username);
  }, [setName, user.username]);
  const handleSumbit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      setError(true);
      console.log(error);
      console.log("hato");
    } else {
      console.log("tog`ri");
      setError(false);
    }
  };

  return (
    <div className="max-w-[752px] m-auto">
      <div className="px-4 py-6">
        <h1 className="mb-8 text-xl font-semibold">
          Ready to order? Let's go!
        </h1>
        <form onSubmit={handleSumbit}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:w-[650px] w-full">
            <label>First Name</label>
            <input
              type="text"
              className="focus:outline outline-[#FACC15] outline-4 px-[25px] py-[8px] rounded-[20px] md:w-[500px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-[25px] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:w-[650px] w-full">
            <label>Phone number</label>
            <div>
              <input
                type="number"
                className="focus:outline outline-[#FACC15] outline-4 px-[25px] py-[8px] rounded-[20px] md:w-[500px] w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {/* {
          
            error ? phone > 0 ?  null:<p className='text-[12px] text-[#B91C1C] mt-[5px] bg-[#FEE2E2] px-[15px] py-[5px] rounded-[5px]'>Please give us correct phone number. We might need it to contact you</p>:null
                   } */}
            </div>
          </div>
          <div className="mt-[25px] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:w-[650px] w-full">
            <label>Address</label>
            <input
              type="text"
              className="focus:outline outline-[#FACC15] outline-4 px-[25px] py-[8px] rounded-[20px] md:w-[500px]"
            />
            <button
              type="button"
              onClick={() => {
                console.log(disptach(fetchAddress()));
              }}
            >
              Get Position
            </button>
          </div>
          <div className="mt-[25px]  gap-2 flex items-center justify-between w-[300px]">
            <input
              type="checkbox"
              className="w-[24px] h-[24px] focus:outline outline-[#FACC15] outline-4"
            />
            <label className="font-[500]">
              Want to yo give your order priority?
            </label>
          </div>
          <button
            type="sumbit"
            className="outline outline-[#FACC15] outline-4 bg-[#FACC15] px-[15px] py-[13px] rounded-[30px] font-[500] mt-[30px]"
          >
            ORDER NOW €{price}.00
          </button>
        </form>
      </div>
      <div>
        {/* <button onClick={getLocation}>Get Position</button>
        {position && (
          <div>
            <p>Latitude: {position.latitude}</p>
            <p>Longitude: {position.longitude}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
