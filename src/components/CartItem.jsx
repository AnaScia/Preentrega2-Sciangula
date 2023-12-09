import PropTypes from "prop-types";

const CartItem = ({ cartItem, removeItem }) => {
  return (
    <>
      <li
        key={cartItem.item.id}
        className="text-center border-2 border-blue-500 m-3"
      >
        <p className="text-lg font-bold">{cartItem.item.title}</p>
        <img
          src={cartItem.item.img}
          alt={cartItem.item.title}
          className="object-scale-down h-48 w-96"
        ></img>
        <p>{cartItem.item.description}</p>
        <p>Precio unitario: {cartItem.item.price}</p>
        <p>Cantidad agregada de productos: {cartItem.quantity}</p>
        <p>
          Precio total del producto: {cartItem.quantity * cartItem.item.price}
        </p>

        <button
          onClick={() => removeItem(cartItem.item.id)}
          className="m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
        >
          Eliminar producto
        </button>
      </li>
    </>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
  removeItem: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default CartItem;
