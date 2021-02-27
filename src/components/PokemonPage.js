import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const url = "http://localhost:3001/pokemon"

function PokemonPage() {
const [pokemon, setPokemon] = useState([])
const [searchPokemon, setSearchPokemon] = useState("")

  useEffect (()=>{
    fetch(url)
    .then((r)=> r.json())
    .then(setPokemon)
  }, []);

const displayPokemon = pokemon.filter((pokeman) =>
  pokeman.name.toLowerCase().includes(searchPokemon.toLowerCase())
  )

function addPokemon(pokeman){
  setPokemon([...pokemon, pokeman])
}
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setSearchPokemon={setSearchPokemon} searchPokemon={searchPokemon} />
      <br />
      <PokemonCollection pokemon={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
