import React from "react"
import Appmap from "./Appliances";
import productItems from "./Topselling";

export default function Main(props) {
    const { products , onAdd } = props;
    return (
        <>
            <main className="block col-2 trend">
                <h2>Products</h2>
                <div className="row trend-box">
                
            
       
                    {productItems.map((product) => (
                        <div key={product.id} product={product} onAdd={onAdd} >
                        <img src={product.img_src} className='small'  alt={product.about}/>
                        <h3>{product.text}</h3>
                             <div>${product.Amount}</div>
                        <button id="Nope" onClick={()=>onAdd(product)}>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}