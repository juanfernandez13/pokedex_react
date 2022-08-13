import './styles.css'
import ContainerEnd from '../containerEnd';
const BannerEnd = (props) => {
    return(
        <section className='sectionVistoUltimo'>
        <span>Visto por último</span>
        <section className='test'>
          {props.Pokemon2 && <ContainerEnd img={props.Pokemon2.sprites.other['official-artwork'].front_default} id={props.Pokemon2.id} nome={props.Pokemon2.name}/>}
          
          {props.Pokemon1 && <ContainerEnd img={props.Pokemon1.sprites.other['official-artwork'].front_default} id={props.Pokemon1.id} nome={props.Pokemon1.name}/>}
          
          {props.Pokemon0 && <ContainerEnd img={props.Pokemon0.sprites.other['official-artwork'].front_default} id={props.Pokemon0.id} nome={props.Pokemon0.name}/>}
        </section>
      </section>
    );
}

export default BannerEnd;