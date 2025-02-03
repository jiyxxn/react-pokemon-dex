import styled from 'styled-components';

const StCard = styled.li`
  flex: 1;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px #aaa;
  border-radius: 10px;

  > img {
    // 포켓볼 이미지
    width: 50%;
  }
`;

const EmptyCard = () => {
  return (
    <StCard>
      <img src="../../public/monster_ball.png" alt="" />
    </StCard>
  );
};

export default EmptyCard;
