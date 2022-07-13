import "./App.css"
import "./app.scss"
import "./grid.scss"
import { Head } from "./component/Head"
import Slideshow from "./component/test"
import List from "./component/LIst"
import Phone from "./component/Phone"
import { Routes,Route } from "react-router-dom"
import Apps from "./component/Appd"
import Computers from "./component/comps"
import Gadgets from "./component/Gads"





function App() {
  return (
    <>
      <div className="App">
        <Head />
        <Slideshow />
      </div>
      <div className="Stone">
        <List />
        <Routes>
                    <Route path="/Phone" element={<Phone/>}/>
                    <Route path="/Apps" element={<Apps/>}/>
                    <Route path="/Computers" element={<Computers/>}/>
                    <Route path="/Gadgets" element={<Gadgets/>}/>
                </Routes>
      </div>
    </>)
}
export default App;
