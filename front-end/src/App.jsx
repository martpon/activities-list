import Debugging from "./components/Debugging/Debugging.jsx"
import LandingPage from "./components/landingPage/LandingPage.jsx"
import "./App.css"

function App() {

 return (
  <>
  <div className="app">
    <Debugging onClickPanicButton={() => console.log(ratios)}/>
    <LandingPage/>    
  </div>  
  </>

 )
}

export default App
