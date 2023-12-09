import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="flex justify-center text-blue-950 text-xl font-bold">
        Cart
      </h1>

      <ul className="m-auto">
        {cart.length > 0 ? (
          <div className="flex flex-col">
            {cart.map((itemWrapper) => (
              <CartItem
                key={itemWrapper.item.id}
                cartItem={itemWrapper}
                removeItem={removeItem}
              ></CartItem>
            ))}
            <h2 className="flex justify-center text-blue-950 text-lg font-bold">
              Valor total del carrito: ${total}
            </h2>
            <button
              onClick={() => {
                clearCart();
              }}
              className="m-auto p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
            >
              Vaciar carrito
            </button>
            <Link
              to={"/Checkout"}
              className="m-auto p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
            >
              Terminar la compra
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="m-2">No hay productos agregados...</h3>
            <Link
              to={"/"}
              className="text-center m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
            >
              Ir al inicio
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
