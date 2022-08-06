import "./App.css"
import "./app.scss"
import Home from "./component/Home";
import { Routes,Route } from "react-router-dom"
import Head from "./component/Header";
function App() {
  return (
    <>
      <div className="App">
        <Head />
        <Routes>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
      </div>
    </>
  )
}
export default App;
