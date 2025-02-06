import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { SectionWrapper } from '../components/Wrapper';
import formatNumberWithZeros from '../utils/formatNumberWithZeros.js';
import { Button } from '../components/Button.jsx';
import TypeLi from '../components/TypeLi.jsx';
import matchTypes from '../shared/matchTypes.js';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { validateNotExisted } from '../utils/validate.js';
import usePokemonActions from '../hooks/usePokemonActions.js';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Detail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsDexNum = searchParams.get('dexNum'); // 쿼리 스트링 가져오기

  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const { handleSelectedPokemon } = usePokemonActions();

  const navigate = useNavigate();

  const matchedPokemon = pokemonData.find(
    (pokemon) => Number(paramsDexNum) === pokemon.id
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
      <DetailCard className="poke-card" data-id={pokeId}>
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

        {validateNotExisted(selectedPokemon, pokeId) ? (
          <Button
            onClick={(e) => handleSelectedPokemon(e)}
            data-toggle="register"
          >
            데려가기
          </Button>
        ) : (
          <Button
            onClick={(e) => handleSelectedPokemon(e)}
            data-toggle="delete"
          >
            삭제하기
          </Button>
        )}
        <BtnGoBack onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} title="목록으로 돌아가기" />
        </BtnGoBack>
      </DetailCard>
    </SectionWrapper>
  );
};

const DetailCard = styled.div`
  position: relative;
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

const BtnGoBack = styled.button`
  position: absolute;
  top: 5%;
  left: 2%;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #df8b37;
  opacity: 0.6;
  cursor: pointer;
`;

export default Detail;
