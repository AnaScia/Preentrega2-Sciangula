import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [allQuantity, setAllQuantity] = useState(0);

  const addToCart = (item, quantity) => {
  
    const productExist = cart.find((product) => {
      return product.item.id === item.id});

    if (!productExist) {
      setCart((prev) => [...prev, { item, quantity }]);
      setAllQuantity(prev => prev + quantity);
      setTotal((prev) => prev + (item.price * quantity));
    } else {
      const cartActual = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      })
      setCart(cartActual);
      setAllQuantity(prev => prev + quantity);
      setTotal((prev) => prev + (item.price * quantity));
    }
  };

  const removeItem = (id) => {
    const itemDelete = cart.find((itemWrapper) => itemWrapper.item.id == id);
    const filterCart = cart.filter((itemWrapper) => itemWrapper.item.id !== id);
    setCart(filterCart);
    setAllQuantity((prev) => prev - itemDelete.quantity);
    setTotal((prev) => prev - itemDelete.item.price * itemDelete.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setAllQuantity(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        total,
        allQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
