import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import PrimaryButton from '../../shared/primaryButton';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.palette.colorGray.main};
`;

export const GridContainer = styled('div')`
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 44% 16%;
  grid-template-rows: 20% 20% 10% 10% 10% 15% 15%;

  position: relative;
  justify-items: start;

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-items: center;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 25% 12% 12% 12% 12% 27%;
  }
`;

export const ColorContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: 1 / span 3;
  grid-row: 3 / span 5;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 3;
    grid-row: 2 / span 5;
  }
`;

export const CubImg = styled('img')`
  grid-column: 1;
  grid-row: 1 / span 5;
  height: 100vh;
  justify-self: start;
  padding-top: 4vh;

  @media (max-width: 2000px) {
    width: 95%;
  }

  ${({ theme }) => theme.breakpoints.down('xxl')} {
    width: 95%;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Titre = styled(Typography)`
  grid-column: 2;
  grid-row: 1 / span 2;
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-transform: uppercase;
  font-family: 'Roboto Flex', serif;
  z-index: 10;
  padding-top: 10vh;
  font-size: 40rem;

  -webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  /**
 * ----------------------------------------
 * animation focus-in-contract-bck
 * ----------------------------------------
 */
  @-webkit-keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(300px);
      transform: translateZ(300px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(12px);
      transform: translateZ(12px);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes focus-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(300px);
      transform: translateZ(300px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(12px);
      transform: translateZ(12px);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  @media (max-width: 1600px) {
    padding-top: 4vh;
  }

  ${({ theme }) => theme.breakpoints.down('xxl')} {
    padding-top: 10vh;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 2;
  }
`;

export const ImgBox = styled('div')`
  width: 8rem;
  height: 8rem;
  grid-column: 3;
  grid-row: 1 / span 2;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: ${({ theme }) => `-0.5px 0.5px 15px 13px ${theme.palette.colorBlue.main}`};

  & :hover {
    -webkit-animation: rotate-in-ver 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: rotate-in-ver 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    width: 6rem;
    height: 6rem;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 4rem;
    height: 4rem;
    box-shadow: none;
    border: ${({ theme }) => `solid 0.5px ${theme.palette.colorBlack.main}`};
    align-self: center;
    justify-self: start;
    margin-top: -4rem;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
  }

  /**
 * ----------------------------------------
 * animation rotate-in-ver
 * ----------------------------------------
 */
  @-webkit-keyframes rotate-in-ver {
    0% {
      -webkit-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
  @keyframes rotate-in-ver {
    0% {
      -webkit-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
      opacity: 1;
    }
  }
`;

export const ImgNode = styled('img')`
  width: 100%;
  height: 100%;

  text-align: center;
`;

export const SubTitre = styled(Typography)`
  grid-column: 2 / span 2;
  grid-row: 4;
  text-transform: lowercase;
  padding-top: 2vh;

  background: ${({ theme }) =>
    `-webkit-linear-gradient(left, ${theme.palette.secondary.main}, ${theme.palette.colorLightBlue.main}, ${theme.palette.colorBlack.main}, ${theme.palette.colorLightBlue.main}, ${theme.palette.secondary.main})`};
  background-size: 3200px 200px;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  animation: gradient 40s linear infinite;

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

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 3;
    grid-row: 3;
    text-align: center;
  }
`;

export const Technol = styled('div')`
  grid-column: 2 / span 2;
  grid-row: 5;
  width: 100%;
  align-self: center;
  justify-self: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  padding-right: 2vw;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 0;

    grid-column: 1 / span 3;
    grid-row: 4;
    text-align: center;
    justify-self: center;
    justify-content: center;
    padding-right: 0;
  }
`;

export const TechnolTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  padding-right: 0.7vw;
  padding-left: 0.7vw;

  &:first-child {
    padding-left: 0;
  }
`;

export const Circle = styled('div')`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.palette.colorGray.main};
  border-radius: 50%;
`;

export const StyledButton = styled(PrimaryButton)`
  grid-column: 2;
  grid-row: 6;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: uppercase;
  position: relative;
  align-self: center;
  justify-self: start;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 3;
    grid-row: 5;
    justify-self: center;

    &.MuiButton-root {
      margin-top: 1vh;
    }
  }
`;

export const CitateBox = styled('div')`
  width: 98%;
  grid-column: 2 / span 2;
  grid-row: 7;
  align-self: center;
  justify-self: stretch;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 0;
    align-self: center;
    text-align: center;
    justify-self: center;
    grid-column: 1 / span 3;
    grid-row: 6;
    letter-spacing: 0;
    padding-top: 10%;
  }
`;

export const Citate = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};

  letter-spacing: 0.15rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    letter-spacing: 0;
  }
`;
