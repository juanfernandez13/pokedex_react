import React, { useState } from "react";
import './styles.css';

const typeColors = {
    fire: "#f04c00",
    dark: "#18181a",
    bug: "#476e28",
    grass: "#2d8a33",
    electric: "rgba(247, 195, 23, 1)",
    steel: "#ccc",
    water: "#DEF3FD",
    ground: "#614c2f",
    rock: "#D5D5D4",
    fairy: "#e6369c",
    ghost: "#552381",
    poison: "#a069d1",
    dragon: "#97B3E6",
    psychich: "#eaeda1",
    flying: "#157cd1",
    fighting: "#5c5852",
    normal: "#d37203",
  };


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