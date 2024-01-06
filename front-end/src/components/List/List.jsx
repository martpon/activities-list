import { useState } from "react"
import "./List.css"

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

    const getDate = () => {

        let date = new Date();

        return `finalizado en ${date}`

    }

    const dateTxt = (!state)
        ? "cuando lo completes aqui aparecera la fecha"
        : `${getDate()}`

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

                <ListArticle txt={"pepe se la come"} check={false} />
                <ListArticle txt={"pepe se la come"} check={false} />
                <ListArticle txt={"pepe se la come"} check={false} />
                <ListArticle txt={"pepe se la come"} check={false} />
                
            </div>
        </>

    )

}

export default List