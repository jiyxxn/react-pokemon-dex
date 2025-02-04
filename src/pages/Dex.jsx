import { useState } from 'react';
import POKEMON_DATA from '../mocks/pokemonData.js';
import { MAX_POKEMON } from '../shared/constants.js';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { SectionWrapper } from '../components/Wrapper.jsx';
import { PokemonContext } from '../context/PokemonContext.jsx';
import { validateExisted, validateMaximum } from '../utils/validate.js';
import { toast } from 'react-toastify';

const Dex = () => {
  const [pokemon, setPokemon] = useState([]);

  const handleSelectedPokemon = (e) => {
    const toggleBtn = e.target.getAttribute('data-toggle');
    const selectedId = e.target.closest('li').getAttribute('data-id');

    e.stopPropagation(); // detail 페이지로 이동하는 것 방지

    // toggleBtn [data-toggle= "register" || "delete"]
    switch (toggleBtn) {
      // * 포켓몬 등록
      case 'register':
        {
          if (!validateMaximum(pokemon, MAX_POKEMON)) {
            toast.error('더 이상 데려갈 수 없습니다.');
            return pokemon;
          }
          if (!validateExisted(pokemon, selectedId)) {
            toast.error('이미 데려간 포켓몬입니다.');
            return pokemon;
          }

          const selectedPokemonList = POKEMON_DATA.filter((data) => {
            return data.id === Number(selectedId);
          });

          toast.success('포켓몬이 전투에 참여합니다.');
          setPokemon((prev) => [...prev, ...selectedPokemonList]);
        }
        break;

      // * 포켓몬 삭제
      case 'delete': {
        const remainedPokemonList = pokemon.filter((data) => {
          return data.id !== Number(selectedId);
        });

        toast.success(`포켓몬이 집으로 돌아갔습니다.`);
        setPokemon([...remainedPokemonList]);
      }
    }
  };

  return (
    <SectionWrapper $gradient>
      <PokemonContext.Provider
        value={{ pokemon, handleSelectedPokemon, pokemonData: POKEMON_DATA }}
      >
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </SectionWrapper>
  );
};

export default Dex;
