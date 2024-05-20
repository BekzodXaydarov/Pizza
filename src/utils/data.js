import Home from "../page/Home/home";
import Menu from "../page/Menu/menu";
import Cart from "../page/Cart/cart";
import Order from "../page/Order/order";
import { useCart } from "../redux/selector";

export const routes = [
  { id: 1, to: "/", element: Home },
  { id: 2, to: "/menu", element: Menu },
  { id: 3, to: "/cart", element: Cart },
  { id: 4, to: "/order/new", element: Order },
];
