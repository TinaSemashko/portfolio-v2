import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const VideoAccueil = styled('video')`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Title = styled('div')`
  position: absolute;
  width: 90%;
  top: 20vh;
  left: 3vw;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
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

  @media (max-width: 1500px) {
    width: 95%;
    top: 30vh;
    left: 5vw;
  }
`;

export const TextRainbow = styled('div')`
  width: 100%;
  height: 100%;
  text-align: center;
  background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 20s ease infinite;
  animation: rainbow 20s ease infinite;
  font-family: var(--font-satisfy);

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CatContainer = styled('div')`
  position: absolute;
  bottom: 58%;
`;

export const HistoryContainer = styled('div')`
  position: absolute;
  top: 55vh;
  left: 25vw;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
`;

export const Langbt = styled('div')`
  left: 40vw;
  height: 50vh;
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-align: center;
`;
