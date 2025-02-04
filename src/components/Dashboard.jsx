import styled from 'styled-components';
import EmptyCard from './EmptyCard';
import { BoardWrapper } from './Wrapper';
import { MAX_POKEMON } from '../shared/constants.js';
import PokemonCard from './PokemonCard.jsx';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext.jsx';

const StUl = styled.ul`
  width: 100%;
  display: flex;
  gap: 40px;
`;

const Dashboard = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemon, handleSelectedPokemon } = pokemonContext;

  const renderSelectedPokemonList = () => {
    const renderList = [];
    for (let i = 0; i < MAX_POKEMON; i++) {
      if (pokemon[i]) {
        renderList.push(
          <PokemonCard
            key={i}
            img={pokemon[i].img_url}
            name={pokemon[i].korean_name}
            number={pokemon[i].id}
            types={pokemon[i].types}
            button={'delete'}
            arrivedAt={`/detail/${pokemon[i].id}`}
            handleSelectedPokemon={handleSelectedPokemon}
          />
        );
      } else {
        renderList.push(<EmptyCard key={i} />);
      }
    }
    return renderList;
  };

  return (
    <BoardWrapper
      $padding="40px"
      $backgroundColor="#fdf7e5"
      $shadow="0px 0px 10px 2px #e2c6ac;"
    >
      <h2>Registered Pokémon 💫</h2>
      <StUl>{renderSelectedPokemonList()}</StUl>
    </BoardWrapper>
  );
};

export default Dashboard;
