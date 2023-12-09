import { useState, useContext } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const mForm = (e) => {
    e.preventDefault();

    if (!name || !surname || !phone || !email || !confirm) {
      setError("Completar campos requeridos");
      return;
    }

    if (email !== confirm) {
      setError("No coinciden los emails");
      return;
    }

    const db = getFirestore();

    const order = {
      items: cart.map((item) => ({
        id: item.item.id,
        title: item.item.title,
        quantity: item.quantity,
      })),
      total: total,
      date: new Date(),
      name,
      surname,
      phone,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "products", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stockActual = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockActual - productOrder.quantity,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setOrdenId(docRef.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error en la orden", error);
            setError("Hay un error al hacer la orden");
          });
      })

      .catch((error) => {
        console.log("Error al actualizar stock", error);
        setError("No se puede actualizar el stock");
      });
  };

  return (
    <div>
      <form onSubmit={mForm} className="max-w-md mx-auto">
        {cart.map((item) => (
          <div key={item.item.id}>
            <p>
              {""}
              {item.item.title} x {item.quantity} {""}
            </p>
            <p>Precio unitario: {item.item.price}</p>
          </div>
        ))}

        <h2 className="m-4">Ingrese sus datos</h2>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre
          </label>
          <input
            type="text"
            maxLength="10"
            onChange={(e) => setName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellido
          </label>
          <input
            type="text"
            maxLength="15"
            onChange={(e) => setSurname(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Telefono
          </label>
          <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor=""
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirmacion del email
          </label>
          <input
            type="email"
            onChange={(e) => setConfirm(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></input>
        </div>

        {error && <p>{error}</p>}

        <button
          type="submit"
          className="m-5 p-1 border-2 border-blue-500 hover:border-red-500 rounded-md"
        >
          Comprar
        </button>
        {ordenId && <p>Gracias por comprar!!!Tu numero de ID es: {ordenId} </p>}
      </form>
    </div>
  );
};

export default Checkout;
