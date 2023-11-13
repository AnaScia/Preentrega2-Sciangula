import Item from "./Item";
import PropTypes from "prop-types";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      stock: PropTypes.number,
      price: PropTypes.number,
      description: PropTypes.string,
    })
  ),
};

export default ItemList;
