import React from "react";
import image from "../services.jpg"
export const Serve = () =>{
    return(
        <>
        <div>
        <div className="shift">
        <img className="army" src={image} alt=""/>
        </div>
        <h1>This is a Service Page</h1>
        </div>
        </>
    )
}
export default Serve