import { Button } from './Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import formatNumberWithZeros from '../utils/formatNumberWithZeros';
import matchTypes from '../shared/matchTypes';
import TypeLi from './TypeLi';

const PokemonCard = ({
  img,
  name,
  number,
  types,
  button,
  onPokemonSelect,
  arrivedAt = '',
}) => {
  const dexNumber = formatNumberWithZeros(number, '3');
  const navigate = useNavigate();

  return (
    <CardLi
      className="poke-card"
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
          <TypeLi key={idx} data-type={matchTypes(type)}>
            {type}
          </TypeLi>
        ))}
      </ul>
      <Button
        type="button"
        data-toggle={button}
        onClick={(e) => onPokemonSelect(e)}
      >
        {button === 'register' ? '데려가기' : '삭제하기'}
      </Button>
    </CardLi>
  );
};

const CardLi = styled.div`
  width: 100%;
  flex: 1;
  background-color: #faeabb;
  padding: 20px 26px;
  border: solid 2px #fcf3d9;
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-shadow: 0px 0px 8px 2px #eed995;

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
    gap: 6px;
  }
`;

export default PokemonCard;
