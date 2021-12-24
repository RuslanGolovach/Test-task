import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Metropolis;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.14;
  color: #36363d;
  cursor: pointer;

  &: not(: last-child) {
    margin-bottom: 20px;
  }
`;

const ActiveItem = styled(Item)`
  &: before {
    position: absolute;
    left: 0;
    content: '';
    width: 4px;
    height: 32px;
    background-color: #ffc700;
  }
  & svg {
    fill: #ffc700;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description = styled.p`
  margin: 0;
  margin-left: 8px;
`;

const Quantity = styled.p`
  margin: 0;
`;

export { Item, IconWrapper, Description, Quantity, ActiveItem };
