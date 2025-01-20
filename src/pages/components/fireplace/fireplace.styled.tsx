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
  width: 100%;
  height: 100vh;
  object-fit: cover;
  text-align: center;
  position: fixed;
  z-index: -1;

  @media (max-width: 1500px) {
    width: auto;
  }
`;

export const Title = styled('div')<{
  //top 20%
  windowWidth: number;
  windowHeight: number;
}>`
  position: absolute;
  width: 90%;
  top: ${({ windowHeight }) => `calc(0.20 * ${windowHeight}px)`};
  left: ${({ windowWidth }) => `calc(0.03 * ${windowWidth}px)`};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  -webkit-animation: swirl-in-fwd 0.6s ease-out both;
  animation: swirl-in-fwd 0.6s ease-out both;

  @media (max-width: 1500px) {
    top: 30%;
    left: 0;
  }

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
    left: ${({ windowWidth }) => `calc(0.05px * ${windowWidth})`};
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

export const CatContainer = styled('div')<{
  //top 33%
  windowHeight: number;
}>`
  position: absolute;
  bottom: ${({ windowHeight }) => `calc(520 * ${windowHeight}px/1080)`};

  @media (max-width: 568px) {
    bottom: 20%;
  }
`;

export const HistoryContainer = styled('div')<{
  //top 55%
  windowWidth: number;
  windowHeight: number;
}>`
  position: absolute;
  top: ${({ windowHeight }) => `calc(0.55px * ${windowHeight})`};
  left: ${({ windowWidth }) => `calc(0.23px * ${windowWidth})`};
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
`;

export const Langbt = styled('div')<{
  //top 0
  windowWidth: number;
  windowHeight: number;
}>`
  left: ${({ windowWidth }) => `calc(0.40px * ${windowWidth})`};
  height: ${({ windowHeight }) => `calc(0.5px * ${windowHeight})`};
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-align: center;
`;
