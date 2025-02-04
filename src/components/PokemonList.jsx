import { BoardWrapper } from './Wrapper';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const GridUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const PokemonList = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemonData, handleSelectedPokemon } = pokemonContext;

  return (
    <BoardWrapper>
      <GridUl>
        {pokemonData.map((data) => {
          return (
            <PokemonCard
              key={data.id}
              img={data.img_url}
              name={data.korean_name}
              number={data.id}
              types={data.types}
              button={'register'}
              arrivedAt={`/detail/${data.id}`}
              handleSelectedPokemon={handleSelectedPokemon}
            />
          );
        })}
      </GridUl>
    </BoardWrapper>
  );
};

export default PokemonList;
