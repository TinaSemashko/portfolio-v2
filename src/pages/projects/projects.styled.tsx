import { styled } from '@mui/material/styles';
import img from '../../images/fon_projects.webp';

export const MainContainer = styled('div')`
  text-align: center;
  padding-top: 10vh;
  min-height: 100vh;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 40vh;

  @media (max-width: 1200px) {
    margin-bottom: 30vh;
  }

  @media (max-width: 960px) {
    margin-bottom: 20vh;
  }
`;

export const CarouselContainer = styled('div')`
  padding-top: 10vh;
`;

export const MobileContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const PictureContainer = styled('div')`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  position: relative;
`;

export const Picture = styled('img')`
  border: 3px inset red;
  border-style: ridge;
  box-shadow: 0 0 15px 3px rgba(86, 6, 6, 0.9);
  width: 100%;

  grid-column: 1;
  grid-row: 1;
`;

export const ButtonMore = styled('button')`
  grid-column: 1;
  grid-row: 1;
  position: absolute;
  top: 76%;
  left: 54%;
  letter-spacing: 0.06em;
  overflow: hidden;
  transition: all 0.3s;
  background: linear-gradient(
    to right,
    rgba(250, 2, 2, 0.7) 1%,
    transparent 40%,
    transparent 60%,
    rgba(97, 6, 6, 0.7) 100%
  );
  color: #950101;
  box-shadow: inset 0 0 10px rgba(253, 27, 27, 0.4), 0 0 9px 3px rgba(253, 27, 27, 0.1);
  border: 3px inset red;
  border-style: ridge;
  width: 40vw;
  height: 5vh;

  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(163, 17, 17, 0.1) 40%,
      rgba(85, 6, 6, 0.1) 60%,
      transparent 100%
    );
  }

  &:hover {
    color: #f9f905;
    box-shadow: inset 0 0 10px rgba(245, 41, 41), 0 0 9px 3px rgba(126, 21, 21);
  }
  &:hover:before {
    transform: translateX(15em);
  }

  @media (max-width: 350px) {
    top: 66%;
  }
`;
