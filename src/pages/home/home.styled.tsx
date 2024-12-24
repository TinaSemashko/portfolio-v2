import { styled } from '@mui/material/styles';
import img1 from '../../images/2ecran.webp';
import img from '../../images/pont.webp';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
`;

export const TitreColor = styled('div')`
  transition: 500ms;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; //dedcdca9
  background-clip: text;

  background: linear-gradient(45deg, #ffffff, #444444, #ffffff, #444444, #ffffff);

  background-size: 3200px 200px;
  animation: gradient 15s linear infinite;
  color: transparent;
  background-clip: text;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export const GridContainer = styled('div')`
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 45% 30% 25%;
  justify-items: center;
  position: relative;

  @media (max-width: 1200px) {
    height: 75vh;
  }

  @media (max-width: 760px) {
    height: 80vh;
  }

  @media (max-width: 568px) {
    height: 100vh;
  }
`;

export const Side = styled('div')`
  text-align: center;
  transition: transform 0.3s ease-in-out;
`;

export const LeftSide1ecran = styled(Side)`
  grid-row: 1 / span 3;
  grid-column: 1;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #dedcdca9;
`;

export const RightSide1ecran = styled(Side)`
  grid-row: 1 / span 3;
  grid-column: 2;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ElAnimation = styled('div')`
  &:hover .hide {
    animation: none;
    -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:hover .card {
    animation: none;
    -webkit-animation: flip-in-hor-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-hor-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation flip-in-hor-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }

  /**
 * ----------------------------------------
 * animation flip-in-hor-top
 * ----------------------------------------
 */
  @-webkit-keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
`;

export const Puzzle = styled('div')`
  grid-column: 1 / span 2;
  grid-row: 2;
  display: grid;
  padding-top: 6vh;

  align-items: center;
  align-self: center;

  width: 96vw;
  margin-left: 24vw;
  grid-template-columns: 9.375% 3.125% 6.25% 3.125% 6.25% 3.125% 6.25% 3.125% 6.25% 3.125% 6.25% 3.125% 6.25% 3.125% 9.375%;

  @media (max-width: 960px) {
    width: 112vw;
    margin-left: 28vw;
    padding-top: 0;
  }

  @media (max-width: 568px) {
    grid-template-columns: 9.375% 3.125% 6.25% 3.125% 6.25% 3.125% 9.375%;
    grid-template-rows: 50% 50%;
    margin-top: 0;
    margin-left: 35rem;
    width: 56rem;
    height: 10.5rem;
  }

  @media (max-width: 400px) {
    margin-left: 25rem;
    width: 40rem;
    height: 7.5rem;
  }
`;

export const Element = styled(ElAnimation)<{ index: number }>`
  grid-row: 1;
  grid-column: ${({ index }) => (index === 1 || index === 2 ? `${index} / span 2` : `${index + (index - 2)} / span 2`)};

  @media (max-width: 568px) {
    grid-row: ${({ index }) => (index < 5 ? 1 : 2)};
    grid-column: ${({ index }) =>
      index < 5
        ? index === 1 || index === 2
          ? `${index} / span 2`
          : `${index + (index - 2)} / span 2`
        : index === 5 || index === 6
        ? `${index - 4} / span 2`
        : `${index - 4 + (index - 6)} / span 2`};
  }
  position: relative;
`;

export const ElImg = styled('img')`
  grid-row: 2;
  width: 12vw;
  display: block;

  @media (max-width: 960px) {
    width: 14vw;
  }

  @media (max-width: 568px) {
    width: 7rem;
  }

  @media (max-width: 400px) {
    width: 5rem;
  }
`;

export const ElImgHide = styled('img')`
  width: 12vw;
  display: none;

  @media (max-width: 960px) {
    width: 14vw;
  }

  @media (max-width: 568px) {
    width: 7rem;
  }

  @media (max-width: 400px) {
    width: 5rem;
  }
`;

export const TitleLeft1ecran = styled('div')`
  margin-top: 14vh;
  margin-left: 6%;
  margin-right: 6%;
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  align-self: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  color: ${({ theme }) => theme.palette.colorBlack.main};

  -webkit-animation: swirl-in-fwd 0.6s ease-out both;
  animation: swirl-in-fwd 0.6s ease-out both;

  @-webkit-keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 568px) {
    margin-top: 14vh;
    clip-path: none;
    color: ${({ theme }) => theme.palette.colorBlack.main};
  }
`;

export const TitleRight1ecran = styled('div')`
  margin-top: 14vh;
  margin-left: 6%;
  margin-right: 6%;
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  align-self: center;
  color: ${({ theme }) => theme.palette.colorBlack.main};
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);

  @media (max-width: 568px) {
    margin-top: 14vh;
    clip-path: none;
    color: ${({ theme }) => theme.palette.colorBlack.main};
  }
`;

export const LogoContainer = styled('div')`
  text-align: center;
  padding-top: 20vh;
`;

export const CatContainer = styled('div')`
  position: absolute;
  grid-row: 3;
  grid-column: 1 / span 2;
  align-self: end;
  bottom: 0;

  @media (max-width: 760px) {
    height: 70%;
  }
`;

export const GridContainer2ecran = styled('div')`
  width: 100%;
  height: 98vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;

  @media (max-width: 760px) {
    height: auto;
  }
`;

export const LeftSide2ecran = styled(Side)`
  grid-row: 1;
  grid-column: 1;

  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #dedcdca9;

  @media (max-width: 760px) {
    grid-row: 1 / span 3;
  }
`;

export const RightSide2ecran = styled(Side)`
  grid-row: 1;
  grid-column: 2;

  text-align: center;
  background-color: #dedcdca9;
  background: url(${img1}) no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.palette.secondary.main};

  @media (max-width: 760px) {
    grid-row: 1 / span 3;
  }
`;

export const NestedGridContainer2ecran = styled('div')`
  grid-row: 1;
  grid-column: 1 / span 2;

  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2% 98%;
  align-items: center;

  padding-bottom: 10%;

  @media (max-width: 760px) {
    grid-template-rows: 2% 39% 59%;
  }
`;

export const ImgCloudContainer = styled('div')`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  z-index: 100;
  height: 4vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 760px) {
    margin-top: -2vh;
  }

  @media (max-width: 568px) {
    margin-top: -6vh;
    height: 2vh;
  }
`;

export const ImgLeft2ecran = styled('img')`
  grid-row: 2;
  grid-column: 1;
  width: 50vw;
  /* aspect-ratio: 1.72/1; */
  padding-right: 12%;
  opacity: 0.7;

  @media (max-width: 760px) {
    padding-top: 10vh;
    width: 80vw;
  }
`;

export const Text2ecran = styled('div')`
  grid-column: 1;
  grid-row: 2;
  place-self: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  padding-top: 15%;

  @media (max-width: 760px) {
    padding-top: 4vh;
    padding-bottom: 4vh;
    grid-row: 3;
  }
`;

export const TitleLeft2ecran = styled('div')`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 10;

  @media (max-width: 568px) {
    color: ${({ theme }) => theme.palette.colorBlack.main};
  }
`;

export const TitleRight2ecran = styled('div')`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  z-index: 10;

  @media (max-width: 568px) {
    color: ${({ theme }) => theme.palette.colorBlack.main};
  }
`;
