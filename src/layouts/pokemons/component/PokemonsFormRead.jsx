import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import usePokemons from '../../../hooks/usePokemons';

const PokemonsForm = () => {

  const { pokemons, pokemonsResult, readPokemons, deletePokemon } = usePokemons(); 
  const { _id, name, type, hp, attack, special, image } = pokemonsResult;
  
  useEffect(() => {
    readPokemons("");
  }, []);

  const unaFuncion = async (e) => {
    await readPokemons(e.target.value);
  };

  const delPokemon = async (e) => {
    await deletePokemon(_id);
  };

  return (  
    <>
      <div className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 mx-sm mx-auto p-4">
        <h2>Seleccione un Pokemon de la lista</h2>
        <select className="bg-zinc-800 rounded p-2" onChange={unaFuncion}> 
          <option key="-1" value="-1">Seleccione un Pokemon de la lista</option>
          {pokemons.map((item) => <option key={item._id} value={item._id}>{item.name}</option>)}
        </select>

        {pokemonsResult._id === undefined ? (
          ""
        ):(
          <>
            <input type="text" 
              value ={_id}
              className="bg-zinc-800 rounded p-2" disabled/>
              <input type="text" 
              value = {name}
              className="bg-zinc-800 rounded p-2" disabled/>    
              <input type="text" 
              value = {type}
              className="bg-zinc-800 rounded p-2" disabled/>    
              <input type="number"
              value = {hp}
              className="bg-zinc-800 rounded p-2" disabled/>    
              <input type="text" 
              value ={attack}
              className="bg-zinc-800 rounded p-2" disabled/>    
              <input type="text"
              value ={special}
              className="bg-zinc-800 rounded p-2" disabled/>
              <figure className="w-32 h-32">
                <img src={image.url} alt={name} className="w-full h-full object-cover" />
              </figure>
              <Link to={`/pokemons/create/${_id}`} className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white">
                Editar
              </Link>
              <button className="bg-cyan-300 rounded-md text-black font-medium px-3 py-1 transition-colors hover:bg-white"
              onClick={delPokemon}
              >
                Borrar
              </button>
            </>
          )}
         </div>
    </>
    )
}
 
export default PokemonsForm;