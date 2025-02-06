import { BoardWrapper } from './Wrapper';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import usePokemonActions from '../hooks/usePokemonActions';

const PokemonList = () => {
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const { handleSelectedPokemon } = usePokemonActions();

  return (
    <BoardWrapper>
      <GridUl>
        {pokemonData.map((data) => {
          return (
            <li key={data.id}>
              <PokemonCard
                img={data.img_url}
                name={data.korean_name}
                number={data.id}
                types={data.types}
                button="register"
                arrivedAt={`/detail/${data.id}`}
                onPokemonSelect={handleSelectedPokemon}
              />
            </li>
          );
        })}
      </GridUl>
    </BoardWrapper>
  );
};

const GridUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 20px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1180px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    width: 100%;
    display: flex;
  }
`;

export default PokemonList;
