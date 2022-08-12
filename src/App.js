import { useEffect, useState} from 'react';
import './App.css';
import baseUrl from './services/api';
import leftPokeball from './assets/leftPokeball.svg';
import rightPokeball from './assets/rightPokeball.svg';





function App() {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arrTypes, setArrTypes] = useState([]);
  const [arrAbilidades, setArrAbilidades] = useState([]);

  useEffect(() => {
    pokedex(Math.floor(Math.random() * 897) +1);
  }, []);
  
  function typesData(pokemon){
    let arr = [];
    for(let i in pokemon?.types){
      arr.push(pokemon?.types[i].type.name)
    }
    return arr;
  }
  function abilitiesData(pokemon){
    let arr = [];
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
    setArrAbilidades(abilitiesData(response.data));
    
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

  function handleChange(event){
    setId(event.target.value);
    setErro(false);
  }
  

  return (
    <div className="App">
      <header className='headerApp'>
        
        <form className='barraDePesquisa' action="" onSubmit={e => e.preventDefault(e)}>
        <input className='input' type="text" id='search' placeholder='Pesquise um Pokemon' onChange={(event) => handleChange(event)} />
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
        <article className='containerPokemon'>
          <figure className='imgPokemon'>
            <img src={pokemon?.sprites.front_default} alt="imagem do pokemon" />
          </figure>
          <section className='dataPokemon'>
            <h2>Nome: {pokemon?.name}</h2>
            <p>Id: {pokemon?.id}</p>
            <p>Tipos; {arrTypes.join(", ")}</p>
            <p>Habilidades; {arrAbilidades.join(", ")}</p>
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
      
      <section>
        <span>Visto por último</span>
      </section>
      </main>

    
    </div>
  );
}

export default App;

