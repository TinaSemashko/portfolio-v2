import { styled } from '@mui/material/styles';
import img1 from '../../images/itworld1.webp';
import img2 from '../../images/web-dev.webp';
import img3 from '../../images/yoga.webp';
import img4 from '../../images/travel.webp';
import img5 from '../../images/reading.webp';
import img6 from '../../images/busi.webp';
import img7 from '../../images/paris1.webp';

export const MainContainer = styled('div')`
  width: 100%;
  position: relative;
  margin-bottom: 17vh;
`;

export const ImgMain = styled('div')`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 1200px) {
    min-height: 60vh;
  }

  @media (max-width: 568px) {
    min-height: 40vh;
  }
`;

export const TextContainerAbsolute = styled('div')`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  mix-blend-mode: hard-light;
`;

export const TextContainerBetween = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 4vw;

  @media (max-width: 1200px) {
    padding: 2vh 4vw;
  }
`;

export const ImgMainContainer = styled(ImgMain)`
  background-image: url(${img1});
  min-height: 100vh;

  @media (max-width: 568px) {
    min-height: 50vh;
  }
`;

export const TextContainerShort0 = styled(TextContainerAbsolute)`
  color: #000;
  margin-top: -12vh;
  background-color: transparent;
  left: -25%;
  top: 30%;

  @media (max-width: 1200px) {
    margin-top: -3vh;
  }

  @media (max-width: 568px) {
    margin-top: -4vh;
    left: 0;
  }
`;

export const TextContainer1 = styled(TextContainerBetween)`
  color: red;
  background-color: #282e34;
`;

export const ImgContainer1 = styled(ImgMain)`
  background-image: url(${img2});
  min-height: 80vh;
`;

export const TextContainerShort1 = styled(TextContainerAbsolute)`
  background-color: transparent;
  font-size: 25px;
  color: red;
  background-color: #00000080;
  height: 10vh;
  width: 50%;
  left: 25%;
`;

export const TextContainer2 = styled(TextContainerBetween)`
  color: orange;
  background-color: #282e34;
`;

export const ImgContainer2 = styled(ImgMain)`
  background-image: url(${img3});
  min-height: 70vh;
`;

export const TextContainerShort2 = styled(TextContainerAbsolute)`
  color: orange;
  background-color: #00000080;
  height: 10vh;
  width: 50%;
  left: 25%;
`;

export const TextContainer3 = styled(TextContainerBetween)`
  color: yellow;
  background-color: #282e34;
`;

export const ImgContainer3 = styled(ImgMain)`
  background-image: url(${img4});
  min-height: 70vh;
`;

export const TextContainerShort3 = styled(TextContainerAbsolute)`
  color: yellow;
  background-color: #00000080;
  height: 10vh;
  width: 50%;
  left: 25%;
`;

export const TextContainer4 = styled(TextContainerBetween)`
  color: yellowgreen;
  background-color: #282e34;
`;

export const ImgContainer4 = styled(ImgMain)`
  background-image: url(${img5});
  min-height: 70vh;
`;

export const TextContainerShort4 = styled(TextContainerAbsolute)`
  color: green;
  background-color: #00000080;
  height: 10vh;
  width: 50%;
  left: 25%;
`;

export const TextContainer5 = styled(TextContainerBetween)`
  color: #0ca5e7;
  background-color: #282e34;
`;

export const ImgContainer5 = styled(ImgMain)`
  background-image: url(${img6});
  min-height: 70vh;
`;

export const TextContainerShort5 = styled(TextContainerAbsolute)`
  color: #0ca5e7;
  background-color: #00000080;
  height: 10vh;
  width: 50%;
  left: 25%;
`;

export const TextContainer6 = styled(TextContainerBetween)`
  color: violet;
  background-color: #282e34;
`;

export const ImgContainer6 = styled(ImgMain)`
  background-image: url(${img7});
  min-height: 100vh;
`;

export const TextContainerShort6 = styled(TextContainerAbsolute)`
  color: violet;
  background-color: #000000bb;
  height: 10vh;
  width: 40%;
  left: 30%;
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
