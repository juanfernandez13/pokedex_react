import { useEffect, useState} from 'react';
import './App.css';
import baseUrl from './services/api';

function test(pokemon){
  let arr = [];
  console.log(pokemon)
  for(let i in pokemon?.types){
    arr.push(pokemon?.types[i].type.name)
  }
  return arr;
}
function test2(pokemon){
  let arr = [];
  console.log(pokemon)
  for(let i in pokemon?.abilities){
    arr.push(pokemon?.abilities[i].ability.name)
  }
  return arr;
}

function App() {
  const [pokemon, setPokemon] = useState();
  
  useEffect(() => {
    baseUrl
    .get("/1")
    .then((response) => setPokemon(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  
  let arr = [];
  let arrhabilidades = [];
  arr = test(pokemon);
  arrhabilidades = test2(pokemon);


  return (
    <div className="App">
      <img src={pokemon?.sprites.front_default} alt="imagem do pokemon" />
      <h2>Nome: {pokemon?.name}</h2>
      <h2>Id: {pokemon?.id}</h2>
      <h2>Tipos; {arr.join(", ")}</h2>
      <h2>Habilidades; {arrhabilidades.join(", ")}</h2>
    </div>
  );
}

export default App;

