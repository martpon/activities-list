import { useRef,useEffect } from "react";
import PanicButton from "../PanicButton/PanicButton";

const CanvasPrueba = (props) => {

    const canvasRef = useRef(null);

    const elements = [];

    const draw = (...object) => {

        ctx.fillRect(object.x,object.y,object.width,object.height);

    }

    const canvasHandleClick = (event) => {
        
        const canvas = canvasRef.current;
        const canvasLeft = canvas.offsetLeft + canvas.clientLeft;
        const canvasTop = canvas.offsetTop + canvas.clientTop
        
        const x = event.pageX

    }

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        draw(context);


    },[draw])

    return (

        <canvas onClick={() => canvasHandleClick()} ref={canvasRef}/>

    )

}

export default CanvasPrueba
