import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const promiseData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productsFile = "/public/products.json";
          fetch(productsFile)
            .then((response) => response.json())
            .then((data) => {
              resolve(data);
            });
        }, 1000);
      });
    };

    promiseData().then((data) => {
      if (categoryId) {
        const filterProducts = data.filter((p) => p.category === categoryId);
        setItems(filterProducts);
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);
  return (
    <>
      {items.length == 0 ? (
        <p className="flex justify-center text-xl font-bold text-blue-600"> Cargando...</p>
      ) : (
        <ItemList items={items}></ItemList>
      )}
    </>
  );
}

export default ItemListContainer;
