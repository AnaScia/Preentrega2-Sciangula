import PropTypes from "prop-types";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (quantity) => {
    console.log(quantity);
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

        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
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
