import React from 'react';
import { trends } from './Trendingdata';
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


export default function Trending(props) {
    const {products , onAdd} = props;
    return(
        <div className='trend'>
            <h2>Trending</h2>
            <hr className='hr_one' />
            <div className='trend-box'>  
                    {
                        trends.map((item) => {
                        return(
                            <div key={item.id} className='trend-item'>
                                <Link to= {`/Trending/${item.id}`}>
                                <img src={item.img} alt='the_image' />
                                <h3>{item.name}</h3>  
                                <p>{item.price}</p>
                                </Link>                        
                                <button className='btn'  onClick={()=>onAdd(item)}>Add to cart <FaShoppingCart/></button> 
                            </div>
                            )
                                            }
                    )}
                   
            </div>
        </div>
    )
}