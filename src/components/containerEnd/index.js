import React from "react";
import './styles.css';

//components começam com letra maiuscula
const ContainerEnd = (props) => {
    return <article className='containerVistoUltimo'>
        <div>{props.id}</div>
        <figure>
            <img src={props.img} alt={props.nome} />
        </figure>
        
    </article>
}

export default ContainerEnd;