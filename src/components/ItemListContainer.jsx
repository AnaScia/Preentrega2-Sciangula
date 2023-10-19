import PropTypes from "prop-types";

function ItemListContainer({greeting}) {
  return <h2>{greeting}</h2>;
}

export default ItemListContainer;

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
};
