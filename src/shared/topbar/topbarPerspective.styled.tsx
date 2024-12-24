import { styled } from "@mui/material/styles";

export const TextBox = styled("div")`
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.3s ease;
  top: 0;
  /* left: 5px; */
  text-align: center;
  position: absolute;
  will-change: transform;
  color: #fff;
  text-shadow: 0 0 5px rgba(100, 100, 255, 0.6);
`;

export const MainContainer = styled("div")`
  width: 100%;
  height: 10px;
  display: flex;
  perspective: 10px;
  transform: perspective(300px) rotateX(20deg);
  will-change: perspective;
  perspective-origin: center center;
  transition: all 1.3s ease-out;
  justify-content: center;
  transform-style: preserve-3d;
  border: solid yellow;

  &:hover {
    perspective: 1000px;
    transition: all 1.3s ease-in;
    transform: perspective(10000px) rotateX(0deg);

    .text {
      opacity: 1;
    }
    & > div {
      opacity: 1;
      transition-delay: 0s;
    }
    .explainer {
      opacity: 0;
    }
  }
`;

const sharedStyles = `
  width: 200px;
  height: 12vh;
  transform-style: preserve-3d;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: 0 0 20px 5px rgba(100, 100, 255, 0.4);
  opacity: 0;
  transition: all 0.3s ease;
  transition-delay: 1s;
  position: relative;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LefterBox = styled("div")`
  ${sharedStyles}
  text-align:center;
  transform: translateX(-60px) translateZ(-50px) rotateY(-10deg);
  background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/organization-512.png);
`;

export const LeftBox = styled("div")`
  ${sharedStyles}
  transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);
  background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/creative_draw-512.png);
`;

export const CenterBox = styled("div")`
  ${sharedStyles}
  opacity: 1;
  background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/app_window-512.png);
`;

export const RightBox = styled("div")`
  ${sharedStyles}
  transform: translateX(30px) translateZ(-25px) rotateY(5deg);
  background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/cloud_weather-512.png);
`;

export const RighterBox = styled("div")`
  ${sharedStyles}
  transform: translateX(60px) translateZ(-50px) rotateY(10deg);
  background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/search-512.png);
`;

export const Explainer = styled("div")`
  font-weight: 300;
  font-size: 2rem;
  color: #fff;
  transition: all 0.6s ease;
  width: 100%;
  height: 100%;
  background-color: #303050;
  background-image: radial-gradient(circle at center top, #cce, #33a);
  border-radius: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;
