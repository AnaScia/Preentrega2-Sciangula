import {useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../img/cart.svg";

function CartWidget() {

  const {getTotalItems} = useContext(CartContext)

  return (
    <div>
      <img className="logo" src={logo} alt="logo-cart" />
      <p>{getTotalItems()}</p>
    </div>
  );
}

export default CartWidget;
