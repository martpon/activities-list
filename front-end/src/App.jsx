import Debugging from "./components/Debugging/Debugging.jsx"

import "./App.css"

function App() {

 return (
  <>
  <div className="app">
    <Debugging onClickPanicButton={() => console.log(ratios)}/>
    
  </div>  
  </>

 )
}

export default App
