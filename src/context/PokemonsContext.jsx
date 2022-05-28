/*crea variables globales o funciones globales*/
import axios from 'axios';
import { createContext, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) =>{
  
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);  
  const [pokemonsResult, setPokemonsResult] = useState({});  

  const createPokemon = async (pokemon) => {
    try{
      const form = new FormData();
      
      for (const key in pokemon){
        form.append (key, pokemon[key]);
      }
  
      const options = {
        method: 'POST',
        heders: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_API_URL}/pokemons`
      };
      
      const {data} = await axios(options);

      setPokemons([...pokemons, data]); /*copia la data anterior y agrega lo nuevo*/
      navigate('/pokemons');

    }catch(err){
      console.log(err.response.data.message);
    }
  };

  const readPokemons = async (_id) => {
    try{
      let url = `${process.env.REACT_APP_API_URL}/pokemons/`;
      if (_id!=="") url +=_id;
      
      const options = {
        method: 'GET',
        url: url
      }
      
      const {data} = await axios(options);

      if (_id!=="") 
        setPokemonsResult(data);  /*un resultado*/
      else
        setPokemons(data);  /*array resultados*/

    }catch(err){
      console.log(err.response.data.message);
    }
  };

  const updatePokemon = async (pokemon) => {
    try{
      const form = new FormData();
      
      for (const key in pokemon){
        form.append (key, pokemon[key]);
      }
  
      const options = {
        method: 'PUT',
        heders: {
          'Content-Type': 'multipart/form-data'
        },
        data: form,
        url: `${process.env.REACT_APP_API_URL}/pokemons/${pokemon._id}`
      };
      
      const {data} = await axios(options);
      setPokemonsResult({});
      navigate('/pokemons');

    }catch(err){
      console.log(err.response.data.message);
    }
  };

  const deletePokemon = async (_id) => {
    try{
      const options = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL}/pokemons/${_id}`
      };
      
      const {data} = await axios(options);
      setPokemonsResult({});
      navigate('/pokemons');

    }catch(err){
      console.log(err.response.data.message);
    }
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        pokemonsResult,
        setPokemons,
        createPokemon,
        readPokemons,
        updatePokemon,
        deletePokemon
      }}      
    >
      {children}
    </PokemonsContext.Provider>
  )
};
