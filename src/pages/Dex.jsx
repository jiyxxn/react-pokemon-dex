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

    setPokemon((prevData) => {
      // toggleBtn [data-toggle= "register" || "delete"]
      switch (toggleBtn) {
        // * 포켓몬 등록
        case 'register': {
          if (!validateMaximum(prevData, MAX_POKEMON)) {
            // ! Error
            // * 아래 같은 토스트 알럿을 validateMaximum 함수에서 호출해도 동일한 이슈 발생함
            toast.warning('더 이상 데려갈 수 없습니다.');
            return prevData;
          }
          if (!validateExisted(prevData, selectedId)) return prevData;

          const selectedPokemonList = POKEMON_DATA.filter((data) => {
            return data.id === Number(selectedId);
          });

          return [...prevData, ...selectedPokemonList];
        }

        // * 포켓몬 삭제
        case 'delete': {
          // alert('삭제되었습니다.');

          const remainedPokemonList = prevData.filter((data) => {
            return data.id !== Number(selectedId);
          });
          return [...remainedPokemonList];
        }

        default:
          return prevData;
      }
    });
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
