import styled from 'styled-components';
import EmptyCard from './EmptyCard';
import { BoardWrapper } from './Wrapper';

const StUl = styled.ul`
  width: 100%;
  display: flex;
  gap: 60px;
`;

const Dashboard = () => {
  const renderEmptyList = () => {
    const MAX_POKE_BALL = 6;
    const emptyCards = [];
    for (let i = 0; i < MAX_POKE_BALL; i++) {
      emptyCards.push(<EmptyCard key={i} />);
    }
    return emptyCards;
  };

  return (
    <BoardWrapper
      $padding="40px"
      $backgroundColor="#fdf7e5"
      $shadow="0px 0px 10px 2px #e2c6ac;"
    >
      <h2>Registered Pokémon 💫</h2>
      <StUl>{renderEmptyList()}</StUl>
    </BoardWrapper>
  );
};

export default Dashboard;
