import "./App.css"
import "./app.scss"
import "./grid.scss"
import { Head } from "./component/Head"
import Slideshow from "./component/test"
import List from "./component/LIst"




function App() {
  return (
    <>
      <div className="App">
        <Head />
        <Slideshow />

      </div>
      <div className="Stone">
        <List />
      </div>
    </>)
}
export default App;
