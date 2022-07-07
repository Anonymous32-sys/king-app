// import React, { useState } from "react";
// import Serve from "./services";
// import Contact from "./contact";
// import { NavLink } from "react-router-dom";
// import Product from "./product";
// import { Link } from "react-router-dom";
// const Navcar = () => {
//     const [toggle,setToggle] = useState(false)
//     const toggleMenu = () =>{
//         console.log("clicked")
//     }
//     return(
//         <div class="naviga">
//         <a href='https://facebook.com' className="logo">Spencer</a>
//         <div className="hamburger" onClick={toggleMenu}>
//                 <svg viewBox="0 0 100 80" width="40" height="40">
//   <rect width="100" height="20"></rect>
//   <rect y="30" width="100" height="20"></rect>
//   <rect y="60" width="100" height="20"></rect>
// </svg>
//                 </div>
//         <nav className='navbar'>
//         <li><NavLink to='/'
//         className={({isActive}) => (isActive ? 'link active' : 'link')}>Home</NavLink></li>
//         <li><Link to="/Product">Product</Link></li>
//         <li><Link to='/Serve'>Services</Link></li>
//         <li><Link to='/Contact'>Contact</Link></li>
        
//                 <button className='btn'>
//                 Login
//                 </button>
                
            
//         </nav>
//         </div>
//     )
// }
// export default Navcar