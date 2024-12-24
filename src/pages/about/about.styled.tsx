import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  position: relative;

  @media (max-width: 750px) {
  }
`;

export const VideoAccueil = styled("video")`
  width: 100%;
  object-fit: cover;
  text-align: center;
  position: fixed;
  z-index: -1;
`;

export const Langbt = styled("div")<{
  //top 0
  windowWidth: number;
  windowHeight: number;
}>`
  /* position: absolute;
  top: 0; */
  left: ${({ windowWidth }) => `calc(0.40px * ${windowWidth})`};
  height: ${({ windowHeight }) => `calc(0.5px * ${windowHeight})`};
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-align: center;
`;

export const Title = styled("div")<{
  //top 20%
  windowWidth: number;
  windowHeight: number;
}>`
  position: absolute;
  top: ${({ windowHeight }) => `calc(0.20 * ${windowHeight}px)`};
  left: ${({ windowWidth }) => `calc(0.15 * ${windowWidth}px)`};
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
`;

export const TextRainbow = styled("div")`
  width: 100%;
  height: 100%;
  text-align: center;
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
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

export const CatContainer = styled("div")<{
  //top 33%
  windowHeight: number;
}>`
  position: absolute;
  bottom: ${({ windowHeight }) => `calc(520 * ${windowHeight}px/1080)`};
`;

export const HistoryContainer = styled("div")<{
  //top 55%
  windowWidth: number;
  windowHeight: number;
}>`
  position: absolute;
  top: ${({ windowHeight }) => `calc(0.55px * ${windowHeight})`};
  left: ${({ windowWidth }) => `calc(0.33px * ${windowWidth})`};
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;

  @media (max-width: 750px) {
  }
`;

export const LogoContainer = styled("div")`
  text-align: center;
  padding-top: 20vh;
`;

export const Line = styled("hr")<{
  windowWidth: number;
  windowHeight: number;
  videoWidth: number;
  videoHeight: number;
}>`
  color: yellow;
  width: 100%;
  position: absolute;
  /* top: ${({ windowHeight }) => `calc(520 * ${windowHeight}px/1080)`}; */
  top: ${({ videoHeight }) => `calc(520 * ${videoHeight}px/1080)`};
`;
