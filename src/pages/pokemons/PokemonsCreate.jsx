import PokemonsForm from "../../layouts/pokemons/component/PokemonsForm";

const PokemonsCreate = () => {
  return ( 
    <section className="py-8">
      <div className="flex flex-col ga8 container mx-auto px-8 md:px-4">
        <PokemonsForm/>
      </div>
    </section>
   );
}
 
export default PokemonsCreate;