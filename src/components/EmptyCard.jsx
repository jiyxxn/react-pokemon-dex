import styled from 'styled-components';

const EmptyCard = () => {
  return (
    <StCard>
      <img src="/monster_ball.png" alt="" />
    </StCard>
  );
};

const StCard = styled.li`
  width: 100%;
  padding: 20px 26px;
  aspect-ratio: 1 / 1.5;
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

export default EmptyCard;
