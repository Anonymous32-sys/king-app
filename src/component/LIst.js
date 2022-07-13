import React from "react";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { BsHeadphones } from "react-icons/bs"
import { RiComputerLine } from "react-icons/ri"
import {AiOutlineMobile} from "react-icons/ai"
import { Link } from "react-router-dom";
import Phone from "./Phone";
const List = () => {
    return (
        <>
            <div id="link-icons">
                <Link to="/Apps"><h4><RiComputerLine />Home Appliances</h4></Link>
                 <Link to="/Phone"><h4><AiOutlineMobile/>Mobile Phone</h4></Link>
                 <Link to=""><h4><RiComputerLine />Computers</h4></Link>
                 <Link to="">  <h4><BsHeadphones />Gadgets</h4></Link>
            </div>
        </>
    )
}
export default List