import React from "react";
import { BsHeadphones } from "react-icons/bs"
import { RiComputerLine } from "react-icons/ri"
import {AiOutlineMobile} from "react-icons/ai"
import { Link } from "react-router-dom";
const List = () => {
    return (
        <>
            <div id="link-icons">
                <Link to="/Apps" className="active"><h4><RiComputerLine />Home Appliances</h4></Link>
                 <Link to="/Phone" className="active"><h4><AiOutlineMobile/>Mobile Phone</h4></Link>
                 <Link to="/Computers" className="active"><h4><RiComputerLine />Computers</h4></Link>
                 <Link to="/Gadgets" className="active"><h4><BsHeadphones />Gadgets</h4></Link>
                 <hr className='hrm'></hr> 
                </div>
        </>
    )
}
export default List