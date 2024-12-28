import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import PrimaryButton from '../../shared/primaryButton';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const GridContainer = styled('div')`
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 20% 10% 10% 10% 30%;

  position: relative;
  justify-items: start;

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 25% 10% 10% 10% 35% 10%;
  }
`;

export const ColorContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: 1 / span 2;
  grid-row: 3 / span 4;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
    grid-row: 2 / span 5;
  }
`;

export const CubImg = styled('img')`
  grid-column: 1;
  grid-row: 2 / span 5;
  width: 20vw;
  justify-self: center;
  padding-top: 4vh;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    width: 30vw;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 5;
    width: 30vw;
    padding-top: 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 50vw;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 60vw;
  }
`;

export const Titre = styled(Typography)`
  grid-column: 2;
  grid-row: 1 / span 2;
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-transform: uppercase;
  z-index: 10;
  padding-top: 10vh;
  font-size: 40rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
  }
`;

export const SubTitre = styled(Typography)`
  grid-column: 2;
  grid-row: 4;
  color: ${({ theme }) => theme.palette.colorBlue.main};
  text-transform: lowercase;
  font-family: 'Jura', serif;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
    grid-row: 3;
    text-align: center;
  }
`;

export const StyledButton = styled(PrimaryButton)`
  grid-column: 2;
  grid-row: 5;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: uppercase;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
    grid-row: 4;

    &.MuiButton-root {
      margin-top: 1vh;
    }
  }
`;

export const Citate = styled(Typography)`
  grid-column: 1 / span 2;
  grid-row: 6;
  color: ${({ theme }) => theme.palette.secondary.main};
  letter-spacing: 0.2em;
  align-self: end;
  justify-self: center;
  padding-bottom: 4vh;
  font-family: 'Roboto Flex', serif;
  text-align: center;
  padding-left: 2vw;
  padding-right: 2vw;
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

export const LogoContainer = styled('div')`
  text-align: center;
  padding-top: 20vh;
`;
