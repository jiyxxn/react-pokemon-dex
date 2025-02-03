import { useNavigate, useParams } from 'react-router-dom';
import { SectionWrapper } from '../components/Wrapper';
import POKEMON_DATA from '../mocks/pokemonData.js';
import formatNumberWithZeros from '../utils/formatNumberWithZeros.js';
import { Button } from '../components/Button.jsx';
import TypeLi from '../components/TypeLi.jsx';
import matchTypes from '../utils/matchTypes.js';
import styled from 'styled-components';

const DetailCard = styled.div`
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: #fafafa95;
  padding: 40px;
  border: double 4px #f3d37c;
  box-shadow: 0px 0px 20px 4px #f3d37c7b;
  p {
    font-size: 1.2em;
  }
  p.poke-name {
    font-size: 1.8em;
    font-weight: 800;
  }
  img {
    width: 60%;
  }

  ul {
    display: flex;
    gap: 4px;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const matchedPokemon = POKEMON_DATA.find(
    (pokemon) => Number(id) === pokemon.id
  );

  const {
    korean_name,
    id: pokeId,
    img_url,
    types,
    description,
  } = matchedPokemon;

  return (
    <SectionWrapper height={'100vh'}>
      <DetailCard>
        <img src={img_url} alt={korean_name} />

        <p className="poke-name">{korean_name}</p>
        <p>No. {formatNumberWithZeros(pokeId, 3)}</p>
        <ul>
          {types.map((type, idx) => (
            <TypeLi key={idx} data-type={matchTypes(type)}>
              {type}
            </TypeLi>
          ))}
        </ul>
        <p>{description}</p>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </DetailCard>
    </SectionWrapper>
  );
};

export default Detail;
