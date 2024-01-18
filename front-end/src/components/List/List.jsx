import { useState } from "react"
import NewItemListButton from "../NewItemListButton/NewItemListButton.jsx"
import "../../style/List.css"

const simulatedDatabase = {
    "actividades": [
      {
        "id": 1,
        "nombre_actividad": "Hacer ejercicio",
        "fecha_cumplimiento": "2024-01-15",
        "completada": false
      },
      {
        "id": 2,
        "nombre_actividad": "Leer un libro",
        "fecha_cumplimiento": "2024-01-20",
        "completada": true
      },
      {
        "id": 3,
        "nombre_actividad": "Preparar presentación",
        "fecha_cumplimiento": "2024-01-18",
        "completada": false
      }
    ]
  }

const ListArticlePopUp = ({ date,display}) => {

    const displayed = (display) 
        ? "listpopup-container"
        : "none"
                        

    return (
        <div className={displayed}>

            <p className="listtext-style">{date}</p>

        </div>
    )

}

const ListArticle = ({ txt,check,date }) => {

    const [listarticlePopUp,setListarticlePopUp] = useState(false)
    const [state, setState] = useState(check);

   

    const dateTxt = (!state)
        ? "cuando lo completes aqui aparecera la fecha"
        : `${date}` /* cambiar el codigo para que tome el prop en un futuro */

    const styleTxt = (state)
        ? "listtext-style line-trough"
        : "listtext-style";


    const inputHandleClick = () => {

        (state)
            ? setState(false)
            : setState(true)


    }


    return (

        <div className="listarticle-container">

            <div>

                <p className={styleTxt}>{txt}</p>

                <input
                    type="checkbox" checked={state}
                    onChange={() => inputHandleClick()}
                    onMouseOver={() => setListarticlePopUp(true)}
                    onMouseOut={() => setListarticlePopUp(false)}
                    />

                <ListArticlePopUp display={listarticlePopUp} date={dateTxt}/>

            </div>


            

        </div>

    )

}

const List = (...props) => {

    return (

        <>
            <div className="list-all-container">

                {simulatedDatabase.actividades.map((element) => {
                        return (

                            <ListArticle 
                                id={element.id} 
                                txt={element.nombre_actividad} 
                                date={element.fecha_cumplimiento} 
                                check={element.completada} />

                        )
                })}
                <NewItemListButton/>
                
            </div>
        </>

    )

}

export default List