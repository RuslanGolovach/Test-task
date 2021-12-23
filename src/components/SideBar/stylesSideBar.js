import styled from 'styled-components';
import lightSvg from '../../icon/light.svg';

const SideBarWrapper = styled.aside`
  width: 300px;
  height: 992px;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TitleWrapper = styled.div`
  width: 144px;
  background-image: url(${lightSvg});
  background-repeat: no-repeat;
  background-position: center right 24px;
`;
const Title = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;

  font-family: 'Metropolis', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  color: #36363d;
`;

export { TitleWrapper, Title, SideBarWrapper };
