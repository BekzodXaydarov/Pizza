import React from "react";
import Pizza from "../../assets/imgs/pizza-1.jpg";
import LiComponent from "../../components/Product_list/LiComponent";

const product = [
  {
    id: 1,
    title: "Margherita",
    description: "Tomato, Mozzarella, Basil",
    price: "12.00",
    img: Pizza,
    boolen: true,
    count: 1,
  },
  {
    id: 2,
    title: "Margherita",
    description: "Tomato, Mozzarella, Basil",
    price: "12.00",
    img: Pizza,
    boolen: false,
    count: 1,
  },
  {
    id: 3,
    title: "Romana",
    description: "Tomato, Mozzarella, Prosciutto",
    price: "15.00",
    img: Pizza,
    boolen: true,
    count: 1,
  },
];

export default function Order() {
  return (
    <div className="w-full h-[90vh] gap-4 bg-[#F1F3F0]">
      {product.map((x) => {
        return (
          <ul key={x.id} className="max-w-[752px] m-auto ">
            <LiComponent
              id={x.id}
              img={x.img}
              title={x.title}
              description={x.description}
              price={x.price}
              disable={x.boolen}
              product={x}
              count={x.count}
            />
          </ul>
        );
      })}
    </div>
  );
}
