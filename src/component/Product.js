import React from 'react'

export default function Product(props) {
    const {product}=props;
    return (<>
        <div>
            <img className='small' src={product.image} alt={product.id}/>
            <h3>{product.description}</h3>
            <div>${product.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    </>
    )
}
