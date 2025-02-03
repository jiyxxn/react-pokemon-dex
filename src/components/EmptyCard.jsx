import styled from 'styled-components';

const StCard = styled.li`
  flex: 1;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px #aaa;
  border-radius: 10px;
`;
const StImg = styled.img`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const EmptyCard = () => {
  return (
    <StCard>
      <StImg width={'50%'} src="../../public/pokeball.png" alt="" />
    </StCard>
  );
};

export default EmptyCard;
