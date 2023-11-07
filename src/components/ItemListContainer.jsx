import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {

  const onAdd= (quantity) => {
    console.log(quantity);
  }

  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
      <ItemCount stock={3} initial={1} onAdd={onAdd}></ItemCount>
      <ItemList></ItemList>
    </>
  );
}

export default ItemListContainer;

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
};
