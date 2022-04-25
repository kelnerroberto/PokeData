import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { PokemonProvider } from './contexts/Provider';
import { DetailedPokemon } from './pages/DetailedPokemon';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokemon/:name' element={ <DetailedPokemon /> } />
          <Route path='/' element={ <PokemonProvider> <Home /> </PokemonProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
