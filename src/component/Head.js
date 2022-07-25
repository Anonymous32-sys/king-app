import React from "react"
import "../../src/component/Head.scss"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Li = (props) => (
    <li>{props.name}</li>
)

export class Head extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [
                'Mobile Phones',
                'Home Appliances',
                'Electronics',
                'Ascessories',
                'Jewelry',
                'Clothing',
                'Tools'
            ]
        }
    }

    // myFunction = () => {
    //     var x = document.getElementById("myDIV");
    //     if (x.style.display = 'none') {
    //         x.style.display = "block";
    //     } else {
    //         x.style.display = 'none';
    //     }
    // }

    Function = () => {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        ul.style.display = 'block';
        li = ul.getElementsByTagName('li');
        // console.log(li)
        console.log(input.value)
        if (input.value === '') ul.style.display = 'none';

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            // console.log(a)
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    render() {

        return (
            <>
            <div id="cover">
                <h3 className="Yellow"><span>MEG</span>-ELECTS</h3>
                <div id="Link">
                   <h5 id="aria"><Link to="/">Shop</Link></h5> 
                   <h5 id="soft"><Link to="">Product</Link></h5>
                    </div>
                    <select name="Category">
                        <Link to="/Phones"><option  value="Category">Category</option></Link>
                        <option  value="Phones">Phones</option>
                        <option  value="Home Appliances">Home Appliances</option>
                        <option value="Electronics">Electronics</option>
                        <option  value="Ascessories">Ascessories</option>
                        <option  value="Jewelry">Jewelry</option>
                        <option  value="Tools">Tools</option>
                    </select>
                
                <div id="myDIV">
                <FaSearch/>
                </div>
                <div className="Omg">
                    <input type="text" id="myInput" onKeyUp={this.Function} placeholder="Search for products.." className="Around" />


                    <ul id="myUL" style={{ display: 'none' }} >{
                        this.state.names.map(name => (
                            <Li name={name} />
                        ))
                    }
                    </ul>
                </div>
                <strong><FaRegHeart/></strong>
                {/* <div id="cart"><FaShoppingCart/>{""}</div> */}
                </div>
            </>
        )
    }
}