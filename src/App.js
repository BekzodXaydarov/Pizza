import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RoutePage from "./components/Route/RoutePage";
import { useCart } from "./redux/selector";

export default function App() {

  // const Error = () => (<>
  // <div className="max-w-[752px] m-auto p-[5px]">
  // <Link to={'/menu'} className='text-[#3B82F6] text-[14px]'>← Back to menu</Link>
  // <p className='mt-7 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
  // </div>
  // </>
  // )
  return (
    <div className="w-full h-[100vh] flex items-center justify-between flex-col">
      <Navbar />
      <RoutePage />
      <Footer />
    </div>
  );
}
