import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [quantity, serQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    serQuantity(quantity);
    addToCart(item, quantity);
  };

  return (
    <>
      <div className="flex flex-col justify-center h-30 items-center">
        <img
          src={item.img}
          alt={item.title}
          className="object-scale-down h-48 w-96"
        ></img>
        <h2 className="text-lg font-bold">{item.title}</h2>
        <p>Stock: {item.stock}</p>
        <p>Precio: {item.price}</p>
        <p>Descripción:{item.description}</p>
        {quantity === 0 ? (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link
            to={"/cart"}
            className="m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
          >
            Ir al carrito
          </Link>
        )}
      </div>
    </>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default ItemDetail;
