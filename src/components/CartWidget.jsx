import {useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../img/cart.svg";
import { Link } from "react-router-dom";

function CartWidget() {

  const {cantidadTotal} = useContext(CartContext)

  return (
    <div>
    <Link to="./cart">
      <img className="logo" src={logo} alt="logo-cart" />
      </Link>
      <p>{cantidadTotal}</p>
    </div>
  );
}

export default CartWidget;
