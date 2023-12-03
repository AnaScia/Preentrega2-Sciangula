import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);
  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center text-blue-950 text-xl font-bold">Cart</h1>
      <ul className="m-auto">
        {cart.length > 0 ? (
          cart.map((itemWrapper) => {
            // eslint-disable-next-line react/jsx-key
            return (<li className="text-center border-2 border-blue-500 m-3">
              <p className="text-lg font-bold">{itemWrapper.item.title}</p>
              <img src={itemWrapper.item.img} alt={itemWrapper.title}
                className="object-scale-down h-48 w-96"></img>
              <p>{itemWrapper.item.description}</p>
              <p>{itemWrapper.quantity*itemWrapper.item.price}</p>
              <button
                onClick={() => removeItem(itemWrapper.item.id)}
                className="m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
              >
                Eliminar producto
              </button>
            </li>);
          })
        ) : (
          <h3>No hay productos agregados...</h3>
        )}
      </ul>

      <h2 className="flex justify-center text-blue-950 text-lg font-bold">Valor total del carrito: ${total}</h2>

      <button
        onClick={() => {
          clearCart();
        }}
        className="m-auto p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
      >
        Vaciar carrito
      </button>

    </div>
  );
};

export default Cart;
