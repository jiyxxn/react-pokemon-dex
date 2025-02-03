import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 95%;
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BoardWrapper = styled.section`
  width: 100%;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : 'none'};
  border-radius: 10px;
  padding: ${(props) => (props.$padding ? props.$padding : 0)};
  box-shadow: ${(props) => (props.$shadow ? props.$shadow : 0)};

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
