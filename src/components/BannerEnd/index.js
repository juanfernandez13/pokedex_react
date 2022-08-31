import './styles.css'
import ContainerEnd from '../containerEnd';
const BannerEnd = (props) => {
    return(
        <section className='sectionVistoUltimo'>
        <span>Visto por último</span>
        <section className='test'>
          {props.Pokemon2 && <ContainerEnd img={props.Pokemon2.sprites.other['official-artwork'].front_default} id={props.Pokemon2.id} nome={props.Pokemon2.name} tipo={props.Pokemon2.types[0].type.name} tipo1 ={props.Pokemon2.types[1] ? props.Pokemon2.types[1].type.name : props.Pokemon2.types[0].type.name}/>}
          
          {props.Pokemon1 && <ContainerEnd img={props.Pokemon1.sprites.other['official-artwork'].front_default} id={props.Pokemon1.id} nome={props.Pokemon1.name} tipo={props.Pokemon1.types[0].type.name} tipo1 ={props.Pokemon1.types[1] ? props.Pokemon1.types[1].type.name : props.Pokemon1.types[0].type.name}/>}
          
          {props.Pokemon0 && <ContainerEnd img={props.Pokemon0.sprites.other['official-artwork'].front_default} id={props.Pokemon0.id} nome={props.Pokemon0.name} tipo={props.Pokemon0.types[0].type.name} tipo1 ={props.Pokemon0.types[1] ? props.Pokemon0.types[1].type.name : props.Pokemon0.types[0].type.name}/>}
        </section>
      </section>
    );
}

export default BannerEnd;