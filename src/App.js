import { useEffect, useState} from 'react';
import './App.css';
import baseUrl from './services/api';





function App() {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arrTypes, setArrTypes] = useState([]);
  const [arrAbilidades, setArrAbilidades] = useState([]);

  useEffect(() => {
    pokedex(id);
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

  function getPokemon(response){
    setPokemon(response.data); 
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
      <img src={pokemon?.sprites.front_default} alt="imagem do pokemon" />
      <h2>Nome: {pokemon?.name}</h2>
      <p>Id: {pokemon?.id}</p>
      <p>Tipos; {arrTypes.join(", ")}</p>
      <p>Habilidades; {arrAbilidades.join(", ")}</p>

      <form action="" onSubmit={e => e.preventDefault(e)}>
        <label htmlFor="search">Pesquise pelo nome ou id do pokemon</label>
        <input type="text" id='search' onChange={(event) => handleChange(event)} />
        {erro && <span style={{color:'red', fontWeight:'300'}} >Nome ou Id inválidos</span>}
        {loading && <span style={{color:'blue', fontWeight:'700'}} >Carregando...</span>}
        <button type="submit" onClick={() => pokedex(id)}>Pesquisar</button>
      </form>

    </div>
  );
}

export default App;

