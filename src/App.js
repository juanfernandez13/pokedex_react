import { useEffect, useState} from 'react';
import './App.css';
import baseUrl from './services/api';

function typesData(pokemon){
  let arr = [];
  console.log(pokemon)
  for(let i in pokemon?.types){
    arr.push(pokemon?.types[i].type.name)
  }
  return arr;
}
function abilitiesData(pokemon){
  let arr = [];
  console.log(pokemon)
  for(let i in pokemon?.abilities){
    arr.push(pokemon?.abilities[i].ability.name)
  }
  return arr;
}
let idSearch;

function App() {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    pokedex(1);
  }, []);
  
  async function pokedex(id){
    console.log(id);
    if(id === null || id === undefined || id === ''){
      id = 1;
    }
    baseUrl
    .get(`/${id}`)
    .then((response) => setPokemon(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }
  
  let arrTypes = [];
  let arrAbilidades = [];
  arrTypes = typesData(pokemon);
  arrAbilidades = abilitiesData(pokemon);

  return (
    <div className="App">
      <img src={pokemon?.sprites.front_default} alt="imagem do pokemon" />
      <h2>Nome: {pokemon?.name}</h2>
      <span>Id: {pokemon?.id}</span>
      <span>Tipos; {arrTypes.join(", ")}</span>
      <span>Habilidades; {arrAbilidades.join(", ")}</span>

      <form action="" onSubmit={e => e.preventDefault(e)}>
        <label htmlFor="search">Pesquise pelo nome ou id do pokemon</label>
        <input type="text" id='search' onChange={(event) => idSearch = event.target.value} />
        <button type="submit" onClick={() => pokedex(idSearch)}>Pesquisar</button>
      </form>

    </div>
  );
}

export default App;

