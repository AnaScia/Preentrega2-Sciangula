import {useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../img/cart.svg";

function CartWidget() {
  const { allQuantity } = useContext(CartContext);

  return (
    <>
      <img className="logo" src={logo} alt="logo-cart" />
      <p>{allQuantity}</p>
    </>
  );
}

export default CartWidget;
