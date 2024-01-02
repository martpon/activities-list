import { useRef,useEffect } from "react";


const CanvasPrueba = (props) => {


const canvasRef = useRef (null);

const backGround = (ctx) => {
    let x = 5;

    for (let i = 0; i < 25; i++) { 
        ctx.fillRect(15,x,1000,1);
        x = x + 5;
    }
}

useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    backGround(context);
},[])

    return (

        <canvas width={"250px"} height={"250px"} onClick={() => canvasHandleClick()} ref={canvasRef}/>

    )

}

export default CanvasPrueba
