import React, { useEffect, useState } from "react";
import MenuItem from "../../components/Product_list/MenuItem";
import { getMenu } from "../../services/getData";

export default function Menu() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const menu = getMenu();
    menu.then((x) => {
      setData(x);
    });
  }, [data,setData]);
  return (
    <div className="w-full h-[90vh] gap-4 bg-[#F1F3F0]">
      {data.map((x) => {
        return (
          <ul key={x.id} className="max-w-[752px] m-auto ">
            <MenuItem
              id={x.id}
              img={x.imageUrl}
              name={x.name}
              description={x.ingredients}
              price={x.unitPrice}
              disable={x.soldOut}
              product={x}
              count={x.count}
            />
          </ul>
        );
      })}
    </div>
  );
}
