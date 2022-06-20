import React, { useState } from "react";
const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const toggleMenu = () =>{
        console.log("clicked")
    }
    return(
        <div class="naviga">
        <a href='https://facebook.com' className="logo">Spencer</a>
        <div className="hamburger" onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
                </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Services</li>
                </ul>
                <button className='btn'>
                Login
                </button>
                
            
        </nav>
        </div>
    )
}
export default Navbar