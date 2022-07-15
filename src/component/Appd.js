import React from "react";
import Appmap from "./Appliances";
import { FaShoppingCart } from "react-icons/fa";
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function Ariel() {
  document.getElementById('id01').style.display = 'block'
}
function Ariel1() {
  document.getElementById('id01').style.display = 'none'
}
function Ariel2() {
  document.getElementById('id01').style.display = 'none'
}
// // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
const Apps = () => {

  return (
    <>
      <div id="id01" className="modal">
        <span onClick={Ariel1} className="close" title="Close Modal">&times;</span>
        <form className="modal-content">
          <div className="container">
            <h4>Silver Crest 5000W German Industrial Food Crusher & Blender + Extra Mill Jar</h4>
            <h6>Price: "₦ 21,800"</h6>
            <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/80/2267121/1.jpg?1279" />
            <div class="clearfix">
              <button type="button" onClick={Ariel2} className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Add to cart<FaShoppingCart /></button>
            </div>
          </div>
        </form>
      </div>
      {Appmap.map((item) => {
        return (
          <>
            <h2>{item.names}</h2>
            <h2>{item.description}</h2>
            <h2>{item.Price}</h2>
            <img src={item.image} alt="" onClick={Ariel} />
            <button onClick={Ariel}>Shop Now<FaShoppingCart /></button>
          </>
        )
      }
      )}
    </>
  )
}
export default Apps