import styled from 'styled-components';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin: 0 auto;
  padding: 50px 3%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: ${(props) =>
    props.$gradient
      ? 'linear-gradient(#fcefc8 0, #f3d37c 20%, #fcefc8 60%, #f3d37c 80%)'
      : ' #fcefc8'};
`;

export const BoardWrapper = styled.section`
  width: 100%;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : 'none'};
  border-radius: 10px;
  padding: ${(props) => (props.$padding ? props.$padding : 0)};
  box-shadow: ${(props) => (props.$shadow ? props.$shadow : 0)};
  overflow: hidden;

  + section {
    margin-top: 20px;
  }

  h2 {
    font-size: 1.8em;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 700;
    color: #3b5ca7;
  }
`;
