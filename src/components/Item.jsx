import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 border-blue-500 rounded-md">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <img
          src={item.img}
          alt={item.title}
          className="object-scale-down h-48 w-96"
        ></img>
        <Link to={`/item/${item.id}`}>
          <button className="m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md">
            Ver detalles del producto
          </button>
        </Link>
        <p className="m-1 p-1 border-2">Stock disponible: {item.stock}</p>
      </div>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default Item;
