import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../utils/data";


export default function RoutePage() {
  return (
    <div className="bg-[#F1F3F0] w-full h-[100%] overflow-auto">
      <Routes>
        {routes.map((rout) => {
          return (
            <Route key={rout.id} path={rout.to} element={<rout.element />} />
          );
        })}
      </Routes>
    </div>
  );
}
