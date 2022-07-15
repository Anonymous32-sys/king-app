import "./App.css"
import "./app.scss"
import "./Meg.scss"

import { Head } from "./component/Head"
import Slideshow from "./component/test"
import List from "./component/LIst"
import Phone from "./component/Phone"
import { Routes,Route } from "react-router-dom"
import Apps from "./component/Appd"
import Computers from "./component/comps"
import Gadgets from "./component/Gads"
import Header from "./component/cart"
import Main from "./component/Main"
import Basket from "./component/Basket"
import Appmap from "./component/Appliances"
import { useState } from "react"
import Topselling from "./component/Top"
import TopSingle from "./component/Topsingle"
import Footer from "./component/MegFoot"
import Trending from "./component/Trending"





function App() {
  const{products}=Appmap;
  const[cartItems,setCartItems] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ?{...exist, qty : exist.qty + 1} : x
        ))
    }else{
      setCartItems([...cartItems,{...product, qty: 1 } ])
    }
  }
  const onRemove =(product) =>{
   const exist = cartItems.find((x) =>x.id === product.id);
   if(exist.qty === 1){
    setCartItems(cartItems.filter((x)=> x.id !== product.id));
   } else{
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty -1 } : x
      )
    );
     
   }
  }
  return (
    
    <>
      <div className="App">
     
       <Head />
        <Slideshow />
        <List />
        <Routes>
                    <Route path="/Phone" element={<Phone/>}/>
                    <Route path="/Apps" element={<Apps/>}/>
                    <Route path="/Computers" element={<Computers/>}/>
                    <Route path="/Gadgets" element={<Gadgets/>}/>
                </Routes>
        <Header countCartItems={cartItems.length}/>

        <Routes>
          <Route path="/" element={<Trending />} />
          
        </Routes>
        <Topselling />
      
        <div className="row">
          <Main onAdd={onAdd} products={products}></Main>
          <Routes><Route path="/Basket" element={<Basket onAdd={onAdd} onRemove={onRemove}cartItems={cartItems}></Basket>}/></Routes>
         
        </div>
      </div>
      <div className="Stone">
        <Footer/>
        
      </div>
    </>)
}
export default App;
