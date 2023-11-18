import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { idItem } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return fetch("/public/products.json")
        .then((response) => response.json())
        .then((data) => {
          const foundProduct = data.find((item) => item.id == idItem);
          setItem(foundProduct);
        });
    };

    fetchData();
  }, [idItem]);

  return <>{item ? <ItemDetail item={item} /> : <p> Cargando..</p>}</>;
};

export default ItemDetailContainer;

