import { styled } from '@mui/material/styles';
import ArrowLeft2 from '../../images/3847915_arrow_back_icon.png';
import ArrowRight2 from '../../images/3847912_arrow_next_right_icon.png';
import { Button } from '@mui/material';

export const CarouselContainer = styled('div')<{ showDescription: boolean }>`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 760px) {
    height: ${({ showDescription }) => (showDescription ? '' : '80vh')};
  }
`;

export const FlexBox = styled('div')`
  display: flex;
  justify-content: space-evenly;
  height: 80vh;
  align-items: center;
  width: 92vw;
  z-index: 9;
  padding-right: 4vh;
  overflow-x: hidden;

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
    padding-right: 0;
    overflow-x: visible;
    margin-top: 0;
  }
`;

export const ImgCarouselContainer = styled('div')<{ slidesMoreOne: boolean }>`
  --dotsExist: calc(${({ slidesMoreOne }) => (slidesMoreOne ? '5' : '0')}vh);

  width: 50vw;
  box-shadow: 14px 14px 14px black;
  background-color: #8e2323;
  border: solid ${({ theme }) => theme.palette.colorRed.main};

  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: calc((80vh - 50vw / 1.5) / 2 - var(--dotsExist));
  padding-bottom: calc((80vh - 2vh - 50vw / 1.5) / 2 + var(--dotsExist));
  padding-left: 1vw;
  padding-right: 1vw;

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 760px) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const SliderBox = styled('div')`
  width: 50vw;
  box-shadow: 14px 14px 14px black;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Description = styled('div')`
  width: 38vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2vh;
  padding-right: 2vh;

  background: linear-gradient(90deg, rgba(156, 0, 0, 1) 0%, rgba(235, 3, 3, 1) 100%);

  border: solid ${({ theme }) => theme.palette.colorRed.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 14px 14px 14px black;
  z-index: 10;
  height: 77vh;

  @media (max-width: 1500px) {
    width: 100%;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 35vh;
  }
`;

export const Line = styled('hr')`
  width: 5vw;
  height: 0.5vh;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const DiscriptionCarouselCont = styled('div')<{ openABS: boolean }>`
  background-color: #8e2323;
  width: 100%;
  height: 80%;
  box-shadow: ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset';
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1vw;
  padding-top: 10vh;
  padding-bottom: 12vh;
  color: ${({ theme }) => theme.palette.secondary.main};
  border-left: ${({ openABS }) => (openABS ? 'double white' : 'solid white')};

  @media (max-width: 760px) {
    height: 60%;
  }
`;

export const ArrowLeftIcon = styled('div')`
  height: 100%;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${ArrowLeft2});
`;

export const ArrowRightIcon = styled('div')`
  height: 100%;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${ArrowRight2});
`;

export const ArrowWrapper = styled('div')<{ showDescription: boolean }>`
  display: block;
  color: #a90b0b;
  z-index: 10;
  width: 6vw !important;
  height: 6vh !important;

  @media (max-width: 760px) {
    top: ${({ showDescription }) => showDescription && '30% !important'};
  }
`;

export const ButtonSwitchABS = styled(Button)`
  margin: 12px;
  height: 8vh;
  width: 100%;
  border-radius: 10px;
  background: #8e2323;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px #6a0707, 5px 5px 15px #4b0000, inset 5px 5px 10px #531f1f, inset -5px -5px 10px #4b0000;
  cursor: pointer;
  border: none;
  transition: 500ms;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background: -webkit-linear-gradient(left, #707070, #a1a1a1, #d2d2d2, #a1a1a1, #707070);
  background: linear-gradient(left, #707070, #a1a1a1, #d2d2d2, #a1a1a1, #707070);
  background-size: 3200px 200px;
  animation: gradient 15s linear infinite;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

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

  &:hover {
    box-shadow: -5px -5px 15px #6a0707, 5px 5px 15px #4b0000, inset 5px 5px 10px #4b0000, inset -5px -5px 10px #6a0707;
    background: #f9f9f9;
    background-clip: text;
    transition: 500ms;
  }
`;

export const FlexBoxButton = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
