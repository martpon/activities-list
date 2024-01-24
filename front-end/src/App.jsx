import Debugging from "./components/Debugging/Debugging.jsx"
import Chronometer from "./components/chronometer/chronometer.jsx"
import "./App.css"

function App() {

 return (
  <>
  <div className="app">
    <Debugging onClickPanicButton={() => console.log(ratios)}/>
    <Chronometer txt={"pepe"} initialTime={5000} streak={200} totalTime={780}/>
  </div>  
  </>

 )
}

export default App
