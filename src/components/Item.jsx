import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="flex flex-col justify-center h-30 items-center">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <img
          src={item.img}
          alt={item.title}
          className="object-scale-down h-48 w-96"
        ></img>
        <Link to={`/item/${item.id}`}>
          <button className="m-auto p-2 border-2 border-blue-500 hover:border-red-500 rounded-md">
            Ver detalles del producto
          </button>
        </Link>
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
    id: PropTypes.number,
  }),
};

export default Item;
