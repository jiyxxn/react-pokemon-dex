import styled from 'styled-components';
import EmptyCard from './EmptyCard';

const BoardWrapper = styled.section`
  background-color: #fdf7e5;
  border-radius: 10px;
  padding: 40px;
`;

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
    <BoardWrapper>
      <h2>나만의 포켓몬</h2>
      <StUl>{renderEmptyList()}</StUl>
    </BoardWrapper>
  );
};

export default Dashboard;
