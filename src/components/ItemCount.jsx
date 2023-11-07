import { useState } from "react";
import logo1 from "../img/minus.svg"
import logo2 from "../img/plus.svg"
import PropTypes from 'prop-types'

function ItemCount({ stock, initial,  onAdd }) {
 
  const [count, setCount] = useState(initial);

  const increase = () => {
    if(count < stock){
        setCount(count + 1);
    }
    else{alert("no hay mas stock")}
    
  };

  const decrease = () => {
    if(count > 1){
    setCount(count - 1);}
  };
  return (
    <div className="flex flex-row h-40 ">
      <div className="flex justify-around items-center m-auto p-4 bg-gray-200 border-2 border-blue-500 rounded-md">
        <button className="m-2" onClick={decrease}><img src={logo1} className="h-4 "></img></button>
        <h2 className="m-4">{count}</h2>
        <button className="m-2" onClick={increase}><img src={logo2} className="h-4"></img></button>
      </div>
      <br></br>
      <button className="m-auto p-2 border-2 border-blue-500 hover:border-red-500 rounded-md" onClick={()=>onAdd(count)}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemCount;

ItemCount.propTypes = {
    stock: PropTypes.number,
    initial: PropTypes.number,
    onAdd: PropTypes.func,
  };
