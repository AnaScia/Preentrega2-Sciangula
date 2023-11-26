import {useState, createContext} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart,setCart]=useState([]);

    const addToCart = (item,quantity) => {
        if (!isInCart(item.id)){
            setCart((prev)=>[...prev,{item,quantity}])
        }else{
            console.log("No se puede agregar mas")
        }
    }

    const isInCart = (itemId) => { 
        return cart.some((i)=>i.item.id === itemId)
    }

    const getTotalItems = () => { 
       let cant=0;
       cart.forEach((e)=>cant += e.quantity)
       return cant
    }

    const removeItem = () => { 
    }

    return ( 
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                getTotalItems,
                removeItem
            }
        }>
        {children}

        </CartContext.Provider>
     );
}

CartProvider.propTypes = {
       children: PropTypes.object
  };