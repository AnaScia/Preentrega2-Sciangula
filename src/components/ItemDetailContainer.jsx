import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { idItem } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const newDoc = doc(db, "products", idItem);
    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setItem(newProduct);
      })
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p className="flex justify-center text-xl font-bold text-blue-600">
          {" "}
          Cargando..
        </p>
      )}
    </>
  );
};

export default ItemDetailContainer;
