import { useState, useEffect } from "react";
import { FaAngleRight,FaArrowRotateLeft,FaPause,FaCircleXmark} from "react-icons/fa6";
import "./chronometer.css"

const StopWatch = ({ initialTime }) => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false && time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
                console.log(time);
            }, 1000);
        } else {
            clearInterval(interval);
            {/*este bloque se ejecuta cuando se clickea pause o termina el intervalo*/ }
        }
        return () => {
            clearInterval(interval);
            console.log(interval)
        };
    }, [isActive, isPaused, time]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(initialTime);
    };

    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </div>
    );
}

const Timer = ({ time }) => {

    const secondsConverter = (segundosP) => {

        const seconds = Math.round(segundosP % 0x3C);
        const minutes  = Math.floor(segundosP / 0x3C ) % 0x3C;
        const hours    = Math.floor(segundosP / 0xE10);
    
        return `${hours}:${minutes}:${seconds}`
        
      }

    return (
        <div className="timer">
            <span className="digits">
                {secondsConverter(time)}
            </span>
        </div>
    );
}

const ControlButtons = (props) => {

    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            <FaAngleRight/>
        </div>
    );

    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={props.handleReset}>
                <FaArrowRotateLeft/>
            </div>
            <div className="btn btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? <FaAngleRight/> : <FaPause/>}
            </div>
        </div>
    );

    return (
        <div className="Control-Buttons">
            <div >{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}

const DeleteBtn = ({onClick}) => {

    return (

        <>
        
            <div>

            <div className="btn btn-delete"
            onClick={() => onClick({/*aca deberia de estar la accion para borrar el elemento entero*/})}>
            <FaCircleXmark/>
            </div>

            </div>

        </>

    )

}

const Chronometer = ({id,txt,initialTime,totalTime,streak}) => {

    return (

        <>

            <div className="chronometer-container">
                <DeleteBtn onClick={() => console.log("pepe")}/>
                <h1>{txt}</h1>
                <StopWatch initialTime={initialTime} />
                <p>{streak} streak</p>
                <p>{totalTime}</p>
            </div>

        </>

    )

}
export default Chronometer;