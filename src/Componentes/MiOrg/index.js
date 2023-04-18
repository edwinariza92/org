import { useState } from "react";
import "./miorg.css"
const MiOrg = (props) =>{
    const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick=()=>{
        console.log("Mostras/ Ocultar elemento");
        actualizarMostrar(!mostrar)
    }
    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg