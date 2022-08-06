import React from "react"
import { NavLink , Link } from "react-router-dom"
import "../Header.css"
import Photo from "../44424 [Converted].png"
const Head = () =>{
    return(
        <>
<div className="Header">
    <div className="Head-Flex-img">
        <img className="Flex1-Img" src={Photo} alt=""/>
    </div>
    <div className="Head-Flex-Text">
        <h2 className="Company-Name"> Company Name</h2>
        <h5 className="Extras">In Chambers: ............ , ........... , ........... , ........</h5>
        <h4>Phone No :</h4>
        <h4>Email Address :</h4>
    </div>
</div>
<div className="Head-Links">
<NavLink to="/Home">Home</NavLink>
</div>
        </>
    )
}
export default Head