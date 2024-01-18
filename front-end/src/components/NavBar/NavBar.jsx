const simulatedUrlDatabaseEndpoints = [
    { id: 13215646, txt: "pedro" },
    { id: 123544, txt: "juan" },
    { id: 987654, txt: "maría" },  // Nuevo elemento
    { id: 456789, txt: "luis" }    // Nuevo elemento
  ];

const NavbarItem = ({ onClick, txt, pageActualUrl }) => {
    {/*pageActualUrl ve la pagina actual del url y si coincide marca con un cirulo rojo  */ }

    const navBarItemCss =
        (pageActualUrl === txt)
            ? ""
            : "";

    const handleClicker = () => console.log((pageActualUrl === txt)); {/*sujeto a cambios*/}

    return (

        <li className={navBarItemCss} onClick={() => { onClick(); handleClicker() }}>{txt}</li>

    )

}

const NavBar = ({pageActualUrl}) => {

    return (

        <nav>

            <ul>
                {simulatedUrlDatabaseEndpoints
                .map((a) => {
                    return (
                        <NavbarItem onClick={() => console.log(a.id)} txt={a.txt} pageActualUrl={pageActualUrl}/>
                    ) })}
            </ul>

        </nav>

    )

}

export default NavBar

{/* a cambiar simulatedDatabaseEndPoints pero la logica del componente esta ya creada*/}