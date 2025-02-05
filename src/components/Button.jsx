import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  font-size: ${(props) => (props.$big ? '20px' : '14px')};
  font-weight: ${(props) => (props.$big ? 'bold' : 'normal')};
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  color: ${(props) => (props.color ? props.color : '#fafafa')};
  letter-spacing: -0.008em;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#df8b37'};
  cursor: pointer;
`;
