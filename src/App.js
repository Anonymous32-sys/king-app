import "./App.css"
import "./app.scss"
import "./grid.scss"
import Navcar from "./component/Navbar";
import Home from "./component/home";
import services, { Serve } from "./component/services";
import Contact from "./component/contact";
import NavComp from "./component/nav";
import BoxComp from "./component/box";
import GridComp from "./component/GridComp";
import {Routes , Route} from "react-router-dom"
import ErrorPage from "./component/error";
import Product from "./component/product";

function App(){
    return(
    <div className="App">
    {/* <Navcar/>
    <NavComp/> */}
    <BoxComp/>
    <div>
        {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Serve" element={<Serve/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/Product" element={<Product/>}/>
        </Routes> */}
    </div>

    </div>
    )
}
export default App;
