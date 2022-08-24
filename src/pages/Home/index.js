import { useEffect, useState} from 'react';
import './styles.css';
import baseUrl from '../../services/baseUrl';
import leftPokeball from '../../assets/leftPokeball.svg';
import rightPokeball from '../../assets/rightPokeball.svg';
import BannerEnd from '../../components/BannerEnd';

import Fire from '../../assets/icons/fogo.svg';
import Ice from '../../assets/icons/gelo.svg';
import Dark from '../../assets/icons/dark.svg';
import Bug from '../../assets/icons/inseto.svg';
import Grass from '../../assets/icons/planta.svg';
import Electric from '../../assets/icons/electric.svg';
import Steel from '../../assets/icons/steel.svg';
import Water from '../../assets/icons/water.svg';
import Ground from '../../assets/icons/ground.svg';
import Rock from '../../assets/icons/rock.svg';
import Fairy from '../../assets/icons/fairy.svg';
import Ghost from '../../assets/icons/fantasma.svg';
import Poison from '../../assets/icons/venenoso.svg';
import Dragon from '../../assets/icons/dragao.svg';
import Psychic from '../../assets/icons/psychic.svg';
import Flying from '../../assets/icons/flying.svg';
import Fighting from '../../assets/icons/fighting.svg';
import Normal from '../../assets/icons/normal.svg';


function PokedexPage(){
    const [pokemon, setPokemon] = useState();
    const [corDeFundo, setCorDeFundo] = useState();
    const [tipoZero, setTipoZero] = useState();
    const [id, setId] = useState(1);
    const [valueInput, setValueInput] = useState('');
    const [erro, setErro] = useState(false);
    const [loading, setLoading] = useState(false);
    const [arrTypes, setArrTypes] = useState([]);
    const [type, setType] = useState();
    const [arrUltimos, setArrUltimos] = useState([]);
    const [arrAbilidades, setArrAbilidades] = useState([]);


    const typeColors = {
      fire: "#f04c00",
      dark: "#18181a",
      bug: "#476e28",
      grass: "#2d8a33",
      electric: "rgba(247, 195, 23, 1)",
      steel: "#ccc",
      water: "#0038FF",
      ice: "#0038FF",
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
    const typeIcon = {
      fire: Fire,
      dark: Dark,
      bug: Bug,
      ice: Ice,
      grass: Grass,
      electric: Electric,
      steel: Steel,
      water: Water,
      ground: Ground,
      rock: Rock,
      fairy: Fairy,
      ghost: Ghost,
      poison: Poison,
      dragon: Dragon,
      psychic: Psychic,
      flying: Flying,
      fighting: Fighting,
      normal: Normal,
    };

    useEffect(() => {
        pokedex(Math.floor(Math.random() * 897) +1);
    }, []);
    
    function typesData(pokemon){
      setCorDeFundo(typeColors[pokemon?.types[0].type.name]);
      setType(pokemon?.types[0].type.name);
      const arr = [];
      for(let i in pokemon?.types){
        arr.push(pokemon?.types[i].type.name)
      }
      return arr;
    }
    function abilitiesData(pokemon){
      const arr = [];
      for(let i in pokemon?.abilities){
        arr.push(pokemon?.abilities[i].ability.name)
      }
      return arr;
    }

    function erroAlert(err){
      console.error("ops! ocorreu um erro" + err);
      //window.alert("Nome ou Id inválidos");
      setErro(true);
      setLoading(false);
    }
    
    function nextID(value){
      pokedex(id+value);
    }
    
    function getPokemon(response){
      setPokemon(response.data);
      setId(response.data.id) 
      setErro(false); 
      setLoading(false);
      setArrTypes(typesData(response.data));
      setTipoZero(response.data.types[0].type.name);
      setArrAbilidades(abilitiesData(response.data));
      setArrUltimos(ultimosPokemons());
      handleClearInput();
      
    }
    
    function ultimosPokemons(){
      const arrAux = arrUltimos;
      
      if(arrAux.length >= 3){
        arrAux.shift();
      }
      
      arrAux.push(pokemon);
      return arrAux;
    }
    
    async function pokedex(id){
        if(id === null || id === undefined || id === ''){
        id = 1;
        }
        setLoading(true);
        baseUrl
        .get(`/${id}`)
        .then((response) => getPokemon(response))
        .catch((err) => {
        erroAlert(err);
        });
        

    }

    function handleClearInput(){
        setValueInput('');
    }

    function handleChange(event){
        setValueInput(event.target.value);
        setId(event.target.value);
        setErro(false);
    }
  

  return (
    <div className="PokedexPage">
      <header className='headerApp'>
        
        <form className='barraDePesquisa' action="" onSubmit={e => e.preventDefault(e)}>
        <input className='input' type="text" id='search' placeholder='Pesquise um Pokemon' onChange={(event) => handleChange(event)} value={valueInput} />
        {erro && <span style={{color:'red', fontWeight:'300'}} >Nome ou Id inválidos</span>}
        {loading && <span style={{color:'blue', fontWeight:'700'}} >Carregando...</span>}
        <button className='buttonInput' type="submit" onClick={() => pokedex(id)}>Pesquisar</button>
      </form>
      </header>
      

      <main className='mainApp'>
      <section className='rowButtonsPokemon'>
        <button className='pokeballButton'
          onClick={() => nextID(-1)}
        >
          <figure>
            <img  src= {leftPokeball}/>
          </figure>
        </button>
        <article className='containerPokemon' style={{backgroundColor:`${corDeFundo}`}}>
        <section className="rowContainerID"><section className="ContainerID"><span><b>{pokemon?.id}</b></span></section></section>
          <section className='rowDataPokemon'>
            <figure className='imgPokemon'>
              <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="imagem do pokemon" />
            </figure>
            <section className='dataPokemon'>
              <h2>Nome: {pokemon?.name}</h2>
              <p>Tipos; {arrTypes.join(", ")}</p>
              <p>Habilidades; {arrAbilidades.join(", ")}</p>
              <section className='rowIconsType'>
              <img className='iconType' src={typeIcon[`${arrTypes[0]}`]} alt="tipo pokemom" />
              {arrTypes[1] && <img className='iconType' src={typeIcon[`${arrTypes[1]}`]} alt="tipo pokemom" />}
              </section>
            </section>
          </section>
        </article>

        <button className='pokeballButton'
        onClick={() => nextID(1)}
        >
          <figure>
            <img  src= {rightPokeball}/>
          </figure>
        </button>
      </section>
      
      <BannerEnd Pokemon2 = {arrUltimos[2]} Pokemon1 = {arrUltimos[1]} Pokemon0 = {arrUltimos[0]}/>
     
      </main>

    
    </div>
  );
}

export default PokedexPage;