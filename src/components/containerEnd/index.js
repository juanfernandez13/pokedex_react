import React from "react";
import './styles.css';

//components começam com letra maiuscula
const ContainerEnd = (props) => {
    return <article className='containerVistoUltimo'>
        <section className="rowContainerID"><section className="ContainerID"><span><b>{props.id}</b></span></section></section>
        <section className="rowImgPokemon">
                <img className="imgPokemon" src={props.img} alt={props.nome} />
            
        </section>
        
    </article>
}

export default ContainerEnd;