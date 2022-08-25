import React, { useState } from "react";
import './styles.css';
import typeColors from "../../const";


//components começam com letra maiuscula
const ContainerEnd = (props) => {
    
    return <article className='containerVistoUltimo' style={{backgroundColor:`${typeColors[props.tipo]}`}}> 
        <section className="rowContainerID"><section className="ContainerID"><span><b>{props.id}</b></span></section></section>
        <section className="rowImgPokemon">
                <img className="imgPokemon" src={props.img} alt={props.nome} />
            
        </section>
        
    </article>
}

export default ContainerEnd;