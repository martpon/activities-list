
import { useState } from "react"
import "./example.css"

const Bar = ({data}) => {


    return (

        <div>
            <p>{data.val}</p>
            <div></div>
            <p>{data.date}</p>

        </div>

    )

}

const BarsGraphic = ({props}) => {

    const data = [

        {date: "2/5/2012",val: 5},
        {date: "2/5/2012",val: 5},

    ];
        
        

    

    return (

        <>

            <div className="bars-background">

                <aside className="bars-valuesintime-container">

                    <p>pepe</p>
                    <p>pepe</p>
                    <p>pepe</p>
                    <p>pepe</p>

                </aside>

            </div>

        </>

    )

}

export default BarsGraphic