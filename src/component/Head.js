import React from "react"
import "../../src/component/Head.scss"
import { Link } from "react-router-dom"
import { IconName } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Li = (props) => (
    <li><a href="">{props.name}</a></li>
)

export class Head extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [
                'Phones',
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
                <h3 className="Yellow"><span>MEG</span>-ELECTS</h3>
                <div id="Link">
                    <Link to="/">Shop</Link>
                    <Link to="">Product</Link>
                    </div>
                    <select name="Category">
                        <option data-count="2" value="Category">Category</option>
                        <option data-count="2" value="Phones">Phones</option>
                        <option data-count="23" value="Home Appliances">Home Appliances</option>
                        <option data-count="433" value="Electronics">Electronics</option>
                        <option data-count="45" value="Ascessories">Ascessories</option>
                        <option data-count="476" value="Jewelry">Jewelry</option>
                        <option data-count="78" value="Tools">Tools</option>
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
            </>
        )
    }
}