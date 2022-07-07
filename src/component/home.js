import React from "react";
import photo from "../mypic.jpg";
import image from "../R.gif"

const Home = () =>{
    return(
        <>
        <body>
        <div className="stone">
        <h1>Welcome To <span>Spencer</span></h1>
         <img src={photo} alt="hi" width={500} />
         <h4>We Offer Adequate Shopping Environment....</h4>
         <button className="yoman">Click Here</button>
        <img className="cont" src={image} width="" height="40px" alt=""/>
        </div>
        </body>
        </>
    ) 
}
export default Home