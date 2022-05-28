import { Outlet } from "react-router-dom";
import Header from "./component/section/Header";
import Footer from "./component/section/Footer";
import usePokemons from "../../hooks/usePokemons";

const Pokemons = () => {
  
  const context = usePokemons();

  const applicationName = "PokemonInc APP";

  return (  
    <>
      <Header
        appName = {applicationName}
      />      
      <main className = "text-center pt-16 pb-8">
        <Outlet/> 
      </main>
      <Footer/>      
    </>
  );
}
 
export default Pokemons;