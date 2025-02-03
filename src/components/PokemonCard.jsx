import { Button } from './Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import formatNumberWithZeros from '../utils/formatNumberWithZeros';

const CardLi = styled.li`
  width: 100%;
  background-color: #faeabb;
  padding: 20px 26px;
  border: solid 2px #fcf3d9;
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1;

  p,
  li {
    color: #e49a4f;
    font-weight: 500;
  }

  p.poke-name {
    font-size: 1.4em;
    font-weight: 800;
    color: #df8b37;
  }

  ul {
    display: flex;
  }

  li + li::before {
    content: ', ';
  }
`;

const PokemonCard = ({
  img,
  name,
  number,
  types,
  button,
  registerPokemon,
  arrivedAt = '',
}) => {
  const dexNumber = formatNumberWithZeros(number, '3');
  const navigate = useNavigate();

  return (
    <CardLi
      data-id={number}
      onClick={() => {
        navigate(arrivedAt);
      }}
    >
      <img src={img} alt="" />
      <p className="poke-name">{name}</p>
      <p>No. {dexNumber}</p>
      <ul>
        {types.map((type, idx) => (
          <li key={idx}>{type}</li>
        ))}
      </ul>
      <Button
        type="button"
        data-toggle={button}
        onClick={(e) => registerPokemon(e)}
      >
        {button === 'register' ? '데려가기' : '삭제하기'}
      </Button>
    </CardLi>
  );
};

export default PokemonCard;
