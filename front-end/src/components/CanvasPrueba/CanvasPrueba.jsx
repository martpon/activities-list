import { useRef,useEffect } from "react";


const CanvasPrueba = (props) => {

const canvasRef = useRef (null);


/*#genera el background de el grafico */
const backGround = (ctx) => {
    
    let x = 0;
    let width = 75;

    for (let i = 0; i < 18; i++) { 
        ctx.fillRect(15,x,width,1);
        x = x + 35;
        width = width + 192;
    }
}

const bars = (ctx,params) => {

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);

}

useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    backGround(context);
    // bars(context)
},[])

    return (

        <canvas width={ratios.width} height={ratios.heigth - 100} onClick={() => canvasHandleClick()} ref={canvasRef}/>

    )

}

export default CanvasPrueba
