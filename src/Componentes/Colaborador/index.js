import "./colaborador.css"
import {MdDeleteForever} from "react-icons/md"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador =(props)=>{
    const{nombre,puesto,foto,equipo, id,fav} =props.datos
    const{colorPrimario,eliminarColaborador,like} = props
    return <section className="colaborador">
        <MdDeleteForever className="eliminar" onClick={()=>eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav? <AiFillHeart color="red" onClick={()=>like(id)}/>: <AiOutlineHeart onClick={()=>like(id)}/>}
            
            
        </div>
    </section>
}

export default Colaborador