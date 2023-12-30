import PanicButton from "./PanicButton/PanicButton"
import { useState,useRef,useEffect } from "react"
import "./example.css"

const Bar = ({data}) => {


    return (

        <div className="bar-styles">
            <p>{data.val}</p>
            <div></div>
            <p>{data.date}</p>

        </div>

    )

}

const CanvasPrueba = ({width,height}) => {


   

    const canvasRef = useRef(null);
    const canvas = canvasRef.current;

    const panicButtonHandleClick = () => {

        console.log([canvasRef,canvas])

    }

    return (

        <>  

            <PanicButton onClick={() => panicButtonHandleClick()}/>
            <canvas ref={canvasRef}/>

        </>

    )


}

const BarsGraphic = ({props}) => {

    const data = [

        {date: "2/5/2012",val: 5},
        {date: "2/5/2012",val: 5},

    ];

    
        
        

    

    return (

        <>

            <PanicButton txt={"boton de panico barsGraphic"} onClick={() => console.log(data)}/>

            <CanvasPrueba width={"150px"} height={"150px"}/>

            <div className="bars-background">

                <aside className="bars-valuesintime-container">

                    <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    </ul>
                    
                </aside>

                <div className="bars-barsContainer">

                    <Bar data={data[0]}/>

                </div>

            </div>

        </>

    )

}

export default BarsGraphic