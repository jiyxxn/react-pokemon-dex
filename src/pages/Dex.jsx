import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { SectionWrapper } from '../components/Wrapper.jsx';
import POKEMON_DATA from '../mocks/pokemonData.js';

const Dex = () => {
  return (
    <SectionWrapper>
      <Dashboard />
      <PokemonList pokemonData={POKEMON_DATA} />
    </SectionWrapper>
  );
};

export default Dex;
