import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'nexonGothic';
  font-size: ${(props) => (props.$big ? '20px' : '14px')};
  font-weight: ${(props) => (props.$big ? 'bold' : 'normal')};
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  color: ${(props) => (props.color ? props.color : '#333')};
  letter-spacing: -0.008em;
  border: solid 2px #3b5ca7;
  cursor: pointer;
`;
