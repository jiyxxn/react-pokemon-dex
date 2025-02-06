import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  letter-spacing: -0.008em;
  position: relative;
  border: 0;
  display: inline-block;
  text-align: center;
  color: white;
  padding: 6px 18px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0px 4px #c77829;
  background-color: #df8b37;
  border-radius: 8px;

  &:active {
    top: 4px;
    box-shadow: 0 0 #c77829;
    background-color: #d17f2e;
  }

  &[data-toggle='delete'] {
    background-color: #fa5a5a;
    box-shadow: 0px 4px 0px #e04342;
  }
  &[data-toggle='delete']:active {
    box-shadow: 0 0 #ff4c4b;
    background-color: #ff4c4b;
  }
`;

export const StartMainButton = styled.button`
  position: relative;
  display: inline-block;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 50px;
  color: white;
  margin: 20px 10px 10px;
  border-radius: 6px;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  background-color: #e74c3c;
  box-shadow: 0 0 0 1px #c63702 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #c24032, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);

  &:active {
    top: 9px;
    box-shadow: 0 0 0 1px #c63702 inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
  }
`;
