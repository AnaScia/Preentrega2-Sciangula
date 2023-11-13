import logo from "../img/cart.svg";

function CartWidget() {
  return (
    <>
      <img className="logo" src={logo} alt="logo-cart" />
      <p>0</p>
    </>
  );
}

export default CartWidget;
