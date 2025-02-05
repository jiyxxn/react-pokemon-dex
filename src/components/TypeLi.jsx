import styled from 'styled-components';

const TypeLi = styled.li`
  background: #fafafa;
  text-align: center;
  padding: 4px 10px;
  border-radius: 4px;
  white-space: nowrap;

  &[data-type='grass'] {
    border: solid 1px #5bc25b;
    color: #5bc25b;
  }
  &[data-type='poison'] {
    border: solid 1px #9f5edb;
    color: #9f5edb;
  }
  &[data-type='fire'] {
    border: solid 1px #ce4940;
    color: #ce4940;
  }
  &[data-type='fly'] {
    border: solid 1px #75b5ff;
    color: #75b5ff;
  }
  &[data-type='water'] {
    border: solid 1px #3643ff;
    color: #3643ff;
  }
  &[data-type='bug'] {
    border: solid 1px #ceac14;
    color: #ceac14;
  }
  &[data-type='normal'] {
    border: solid 1px #999894;
    color: #999894;
  }
  &[data-type='electric'] {
    border: solid 1px #ffbb00;
    color: #ffbb00;
  }
  &[data-type='earth'] {
    border: solid 1px #8b7025;
    color: #8b7025;
  }
  &[data-type='rock'] {
    border: solid 1px #474540;
    color: #474540;
  }
  &[data-type='fairy'] {
    border: solid 1px #d88aba;
    color: #d88aba;
  }
  &[data-type='fight'] {
    border: solid 1px #ff1635;
    color: #ff1635;
  }
  &[data-type='psychic'] {
    border: solid 1px #39c9b1;
    color: #39c9b1;
  }
  &[data-type='ice'] {
    border: solid 1px #7da7c9;
    color: #7da7c9;
  }
  &[data-type='ghost'] {
    border: solid 1px #b2bdc7;
    color: #b2bdc7;
  }
  &[data-type='dragon'] {
    border: solid 1px #f501cc;
    color: #f501cc;
  }
`;

export default TypeLi;
