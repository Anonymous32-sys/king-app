import React,{useState} from "react";
import { Link } from "react-router-dom";
import image from "../camera.jpg"
const Product = [
    {
        name:"Camera",
        Id:"1",
        category:"Gadget",
        Description:"",
        Price:"9000",
        title:"users",
        image:"../camera.jpg"
    },
    {
        name:"Lamborghini",
        Id:"2",
        category:"Car",
        Description:"SuperCar",
        Price:"700,000,000",
        image:"../Lambo.webp"
    },
    {
        name:"Iphone13Pro",
        Id:"3",
        category:"Gadget",
        Description:"Phone",
        Price:"700,000",
        image:"https://www.bing.com/images/search?view=detailV2&ccid=SIlqrPXq&id=A159D9397D0F7622A0B370B67C9B00C2E902FE3B&thid=OIP.SIlqrPXqd1EXFISH0j414AHaJx&mediaurl=https%3a%2f%2ftejarra-media.s3.amazonaws.com%2f70585%2fmedialibraryGRBT2z&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.48896aacf5ea775117148487d23e35e0%3frik%3dO%252f4C6cIAm3y2cA%26pid%3dImgRaw%26r%3d0&exph=2835&expw=2147&q=iphone+13pro&simid=608025635561670526&FORM=IRPRST&ck=89411248C9C5B41E2486919349D608EC&selectedIndex=1"
    },
];
<button>Hi</button>
export default function Cartoon(){
    return(
        <div className="container">
            {
                Product.map((item) => {
                    return (
                        <div className="containee">
                            <div key={item.Id}>
                                <div><img src={item.image} alt="ourimages" /></div>
                                <div ><h3>{item.name}</h3></div>
                                <div>{item.Description}</div>
                                <div>{item.category} </div>
                                <div>{item.Price}</div>

                                <div className="img"><Link to="/" >{item.button}</Link></div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
        }
       