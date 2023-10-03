import logo from "../img/cart.svg"

function CartWidget() {

  return (
    <>
      <img className="logo" src={logo} alt="logo-cart" />
      <h3>0</h3>
    </>
  );
}

export default CartWidget;
