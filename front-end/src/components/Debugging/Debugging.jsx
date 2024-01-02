import {useState,useEffect} from "react"

const PanicButton = ({OnClick}) => {


    return (

        <button onClick={() => OnClick()}>PanicButton</button>

    )

}

const MousePosition = () => {

    const [cords,setCords] = useState({x: 0, y: 0})

    useEffect(() => {

        const handleWindowsMouseMove = (event) => {

            setCords({
                x: event.clientX,
                y: event.clientY 
            })

        }

        window.addEventListener("mousemove",handleWindowsMouseMove);

        return () => {

            window.removeEventListener("mousemove",handleWindowsMouseMove)

        }

    },[]);

    return (

        <p>x:{cords.x} y:{cords.y}</p>

    )

}

const Debugging = ({onClickPanicButton}) => {
    
    const debuggingStyle = {

        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "0px",
        left: "0px",
        height: "100px",
        width: "80px"


    }

    
    const [elementosAOcultar,setElementosAOcultar] = useState ({
        display: "flex",
        flexDirection: "column"});

    const buttonHandleClick = () => {

       (elementosAOcultar.display === "flex")
       ? setElementosAOcultar({...elementosAOcultar,display: "none"})
       : setElementosAOcultar({...elementosAOcultar,display: "flex"})
        
    }

    return (

        <div style={debuggingStyle}>

            <button onClick={() => {buttonHandleClick()}}>ocultar</button>

            <div style={elementosAOcultar}>
                <PanicButton OnClick={() => onClickPanicButton()}/>
                <MousePosition/>
            </div>
            
            
        </div>
            
        

    )

}

export default Debugging