import React from "react";
import Gadger from "./gadget";
const Gadgets = () =>{
    return(
        <>
            {Gadger.map((item)=>{
                return(
                    <>
                    <h2>{item.names}</h2>
                        <h2>{item.names1}</h2>
                        <h2>{item.names2}</h2>
                        <h2>{item.description}</h2>
                        <h2>{item.description1}</h2>
                        <h2>{item.description2}</h2>
                        <h2>{item.Price}</h2>
                        <h2>{item.Price1}</h2>
                        <h2>{item.Price2}</h2>
                        <img src={item.image} alt=""/>
                        <img src={item.image1} alt=""/>
                        <img src={item.image2} alt=""/>
                        </>
                )
            })}
        </>
    )
}
export default Gadgets