import { Button } from './Button';
import styled from 'styled-components';

const CardLi = styled.li`
  width: 100%;
  background-color: #faeabb;
  padding: 20px 26px;
  border: solid 3px #fcf3d9;
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StP = styled.p`
  color: #e49a4f;
  font-weight: 500;

  &.poke-name {
    font-size: 1.4em;
    font-weight: 800;
    color: #df8b37;
  }

  span + span::before {
    content: ', ';
  }
`;

const PokemonCard = ({ img, name, types, number }) => {
  const dexNumber = String(number).padStart(3, '0');

  return (
    <CardLi data-id={number}>
      <img src={img} alt="" />
      <StP className="poke-name">{name}</StP>
      <StP>No. {dexNumber}</StP>
      <StP>
        {types.map((type, idx) => {
          return <span key={idx}>{type}</span>;
        })}
      </StP>
      <Button>데려가기</Button>
    </CardLi>
  );
};

export default PokemonCard;
