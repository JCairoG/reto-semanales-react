import { useContext } from 'react';
import { PokemonsContext } from "../context/PokemonsContext";

const usePokemons = () =>{
  return useContext(PokemonsContext);
};

export default usePokemons;