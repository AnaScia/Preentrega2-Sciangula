import { useState,useEffect } from 'react';
import Item from './Item';


const ItemList = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const promiseData = () => { 
            return new Promise((resolve)=> { 
                setTimeout(() => { 
                    const productsFile="/public/products.js"

                    fetch(productsFile)
                    .then((response)=>response.json())
                    .then((data)=>{
                        resolve(data)
                    })
             }, 2000)
            })
        }

        promiseData().then((data)=>{setProductData(data)})
    
    }, []);
    
    return ( 
        <div>
            {
                productData.length==0 ? <p> Cargando..</p>
                : productData.map((item)=>{
                    return(<Item key={item.id} item={item}/>)
                })
            }
        </div>
     );
}
 
export default ItemList;