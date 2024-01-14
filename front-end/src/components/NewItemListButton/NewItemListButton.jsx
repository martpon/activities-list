import { useState } from "react"
import "./NewItemListButton.css"
/*nilb = NewItemListButton*/

const NewItemListButton = () => {

    const [displayPopUp,setDisplayPopUp] = useState(false)

    const popupWrapperClass = (displayPopUp)
                            ? "nilb-wrapper"
                            : "none"

    return (
        <> 
        <button className="nilb-button" onClick={() => setDisplayPopUp(true)}>+</button>
    
        <div className={popupWrapperClass}>

            <form className="nilb-form" action="">

                <input type="text" name="" id="" placeholder="ej: limpiar mi casa"/>

                <section>

                    <input type="submit"/>
                    <button onClick={() => setDisplayPopUp(false)}>borrar</button>

                </section>

            </form>

        </div>
        </>


    )

}

export default NewItemListButton;