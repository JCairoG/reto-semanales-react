import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Pokemons from './layouts/pokemons/Pokemons';
import {PokemonsProvider} from './context/PokemonsContext';
import PokemonsCreate from './pages/pokemons/PokemonsCreate';
import PokemonsRead from './pages/pokemons/PokemonsRead';

function App() {
  return (
    <PokemonsProvider>

      <Routes>
        <Route path='/' element={<Navigate to="/pokemons" replace={true} />} />
        <Route path='/pokemons' element={<Pokemons/>}>
          <Route index element={<h2>Pokemons</h2>} />
          <Route path='create' element={<PokemonsCreate/>} />
          <Route path='create/:id' element={<PokemonsCreate/>} />
          <Route path='read' element={<PokemonsRead/>} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
      
    </PokemonsProvider>
  );
}

export default App;