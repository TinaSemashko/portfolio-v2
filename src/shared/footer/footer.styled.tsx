import { styled } from '@mui/material/styles';
import PrimaryButton from '../primaryButton';

export const MainContainer = styled('div')<{ isParallax: boolean }>`
  position: ${({ isParallax }) => (isParallax ? 'fixed' : 'inherit')};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-color: ${({ theme }) => theme.palette.colorBlack.main};
  height: 15vh;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: 80% 20%;
  padding-bottom: 0.5vh;
`;

export const SocialLinks = styled('div')`
  grid-column: 3;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Langs = styled('div')`
  grid-column: 1;
  grid-row: 1 / span 2;
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  padding-right: 8vw;
  width: 100%;
  height: 4vh;
  grid-column: 1 / span 3;
  grid-row: 2;
`;

export const StyledButton = styled(PrimaryButton)`
  grid-column: 2;
  grid-row: 1;
  text-transform: uppercase;
  position: relative;
  align-self: center;
  justify-self: center;

  &.MuiButton-root {
    margin-top: 1vh;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 2;
  }
`;

export const TitreColor = styled('div')`
  transition: 500ms;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; //dedcdca9
  background-clip: text;

  background: linear-gradient(45deg, #ffffff, #444444, #ffffff, #444444, #ffffff);

  background-size: 3200px 200px;
  animation: gradient 20s linear infinite;
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
