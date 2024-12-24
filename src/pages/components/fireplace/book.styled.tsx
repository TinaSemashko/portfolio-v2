import { styled } from '@mui/material/styles';
import paper1 from '../../../images/paper.webp';

export const MainContainer = styled('div')`
  position: relative;
`;

export const CardContainer = styled('div')<{
  windowWidth: number;
  windowHeight: number;
}>`
  width: ${({ windowWidth }) => `calc(0.1px * ${windowWidth})`};
  height: ${({ windowHeight }) => `calc(0.27px * ${windowHeight})`};
  position: absolute;
  top: ${({ windowHeight }) => `calc(0.32 * ${windowHeight}px)`};
  left: ${({ windowWidth }) => `calc(0.30 * ${windowWidth}px)`};

  perspective: 2000px;
  transform: rotateX(50deg) skewX(20deg) translate(-50px, -400px);
  background: url(${paper1}) no-repeat;
  background-size: cover;
  transform-style: preserve-3d;
  transition: 8s;

  @media (max-width: 750px) {
  }
`;

export const ImgContainer = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
`;

export const TextContainer = styled('div')<{
  windowWidth: number;
  windowHeight: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: ${({ windowWidth }) => `calc(0.095px * ${windowWidth})`};
  height: 10vh;
  padding-top: 2vh;
  z-index: -1;
  color: ${({ theme }) => theme.palette.colorRed.main};

  & .MuiTypography-root {
    font-size: ${({ windowHeight }) => `calc(0.0006rem * ${windowHeight})`};
  }
`;

export const ImgVert = styled('img')`
  height: 100%;
  width: 100%;
`;
