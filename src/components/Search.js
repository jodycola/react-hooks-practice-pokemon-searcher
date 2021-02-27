import React from "react";

function Search({searchPokemon, setSearchPokemon}) {



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchPokemon} onChange={(e)=>setSearchPokemon(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
