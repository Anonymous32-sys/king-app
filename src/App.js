import "./App.css"
import "./app.scss"
import "./grid.scss"
import { Head } from "./component/Head"
import Slideshow from "./component/test"
import List from "./component/LIst"
import Phone from "./component/Phone"
import { Routes,Route } from "react-router-dom"
import Apps from "./component/Appd"
import Comp from "./component/Computer"





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
                    <Route path="/Apps" element={<Apps/>}/>
                </Routes>
      </div>
    </>)
}
export default App;
