import PokemonsFormRead from "../../layouts/pokemons/component/PokemonsFormRead";

const PokemonsRead = () => {
  return ( 
    <section className="py-8">
      <div className="flex flex-col ga8 container mx-auto px-8 md:px-4">
        <h2 className="text-3xl text-center font-bold text-yellow-400">Buscar Pokémon</h2>
        <PokemonsFormRead/>
      </div>
    </section>
   );
}
 
export default PokemonsRead;