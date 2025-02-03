import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { SectionWrapper } from '../components/Wrapper.jsx';
import POKEMON_DATA from '../mocks/pokemonData.js';
import { MAX_POKEMON } from '../shared/constants.js';

const Dex = () => {
  const [pokemon, setPokemon] = useState([]);

  const registerPokemon = (e) => {
    const toggleBtn = e.target.getAttribute('data-toggle');
    const selectedId = e.target.closest('li').getAttribute('data-id');

    e.stopPropagation(); // detail 페이지로 이동하는 것 방지

    setPokemon((prevData) => {
      switch (toggleBtn) {
        case 'register': {
          if (prevData.length >= MAX_POKEMON) {
            alert('더 이상 데려갈 수 없습니다.');
            return prevData;
          }
          const isExisted = prevData.filter((data) => {
            return data.id === Number(selectedId);
          });

          if (isExisted.length > 0) {
            alert('이미 데려간 포켓몬입니다.');
            return prevData;
          }

          const selectedPokemonList = POKEMON_DATA.filter((data) => {
            return data.id === Number(selectedId);
          });

          return [...prevData, ...selectedPokemonList];
        }

        case 'delete': {
          // alert('삭제되었습니다.');

          const remainedPokemonList = pokemon.filter((data) => {
            return data.id !== Number(selectedId);
          });
          return [...remainedPokemonList];
        }
      }
    });
  };

  return (
    <SectionWrapper $gradient>
      <Dashboard pokemon={pokemon} registerPokemon={registerPokemon} />
      <PokemonList
        pokemonData={POKEMON_DATA}
        registerPokemon={registerPokemon}
      />
    </SectionWrapper>
  );
};

export default Dex;
