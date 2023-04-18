import Colaborador from "../Colaborador/index";
import "./equipo.css";
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    const { colorPrimario, colorFondo, titulo,id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor,like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.6)
    }
    const estiloTitulo = { borderColor: colorPrimario }
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    className="input-color"
                    type='color'
                    value={colorPrimario}
                    onChange={(evento) =>{
                        actualizarColor(evento.target.value,id);
                    }}
                />

                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo