import React from "react";
import Zero from "./map";
const Phone = () =>{
    return(
<>
    {Zero.map((item)=>{
        return(
            <div>
                <h4 id="names1">{item.names}</h4>
                <h4 id="names2">{item.names1}</h4>
                <h4 id="names3">{item.names2}</h4>
                <h4 id="des1">{item.description}</h4>
                <h4 id="des2">{item.description1}</h4>
                <h4 id="des3">{item.description2}</h4>
                <h4 id="price1">{item.Price}</h4>
                <h4 id="price2">{item.Price1}</h4>
                <h4 id="price3">{item.Price2}</h4>
                <img id="img" src={item.image} alt=""/>
                <img id="img1" src={item.image1} alt=""/>
                <img id="img2" src={item.image2} alt=""/>
            </div>
        )
    })}
</>
    )
}
export default Phone