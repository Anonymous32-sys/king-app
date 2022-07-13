import React from "react";
import Comp from "./Computer";
const Computers =()=>{
return(
    <div>
        {Comp.map((item)=>{
            return(
                <>
                <h2>{item.names}</h2>
                        <h2>{item.names1}</h2>
                        <h2>{item.names2}</h2>
                        <h2>{item.description}</h2>
                        <h2>{item.description1}</h2>
                        <h2>{item.description2}</h2>
                        <h4>{item.Price}</h4>
                        <h4>{item.Price1}</h4>
                        <h4>{item.Price2}</h4>
                        <img src={item.image}/>
                        <img src={item.image1}/>
                        <img src={item.image2}/>
                </>
            )
        })}
    </div>
)
}
export default Computers