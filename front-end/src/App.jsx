import Debugging from "./components/Debugging/Debugging.jsx"
import CanvasPrueba from "./components/CanvasPrueba/CanvasPrueba.jsx"
import "./App.css"

function App() {

 return (

  <>
  <div className="app">
    <Debugging onClickPanicButton={() => console.log("pepe")}/>
    <CanvasPrueba/>
  </div>  
  </>

 )
}

export default App
