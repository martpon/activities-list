import Debugging from "./components/Debugging/Debugging.jsx"
import List from "./components/List/List.jsx"
import "./App.css"

function App() {

 return (

  <>
  <div className="app">
    <Debugging onClickPanicButton={() => console.log(ratios)}/>
    <List/> 
  </div>  
  </>

 )
}

export default App
