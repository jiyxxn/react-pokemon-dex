import styled from 'styled-components';

const StCard = styled.li`
  width: 100%;
  flex: 1;
  aspect-ratio: 1 / 1;
  padding: 20px 26px;
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
      <img src="/monster_ball.png" alt="" />
    </StCard>
  );
};

export default EmptyCard;
