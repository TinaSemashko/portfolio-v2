import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import img1 from '../../images/web-dev1.webp';
import img2 from '../../images/robot.webp';
import img3 from '../../images/robot2.webp';

export const MainContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const LeftContainer = styled('div')`
  padding-top: 4vh;
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const RightContainer = styled('div')`
  width: 50vw;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  align-items: center;
  z-index: 100;

  @media (max-width: 750px) {
    margin-top: -4vh;
    min-height: 38vh;
    width: 100%;
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

export const LefttBackgroundContainer = styled('div')`
  width: 100%;
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const RightBackgroundContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  width: 100%;
  min-height: 100vh;
  text-align: right;
  z-index: -1;
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 750px) {
    min-height: 100%;
    width: 100%;
    grid-column: 1;
    justify-self: end;
  }
`;

export const CardBox = styled('div')`
  --h: 30vh;
  --w: 15vw;
  position: relative;
  width: calc(var(--w) * 3);
  height: calc(var(--h) * 2);
  grid-column: 1 / span 2;
  grid-row: 1;

  @media (max-width: 1100px) {
    height: calc(var(--h) * 0.7 * 2);
  }

  @media (max-width: 750px) {
    height: calc(var(--h) * 0.5 * 2);
    width: calc(var(--w) * 1.6 * 3);
  }
`;

export const CardContainer = styled('div')`
  --h: 30vh;
  --w: 15vw;
  height: var(--h);
  width: var(--w);
  position: absolute;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  @media (max-width: 1100px) {
    height: calc(var(--h) * 0.7);
  }

  @media (max-width: 750px) {
    height: calc(var(--h) * 0.5);
    width: calc(var(--w) * 1.6);
  }
`;

export const Card1 = styled(CardContainer)`
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 4px solid;
`;

export const Card2 = styled(CardContainer)`
  top: 0;
  left: 15vw;
  background-image: url(${img1});
  border-top: 4px solid;

  @media (max-width: 750px) {
    left: calc(var(--w) * 1.6);
  }
`;

export const Card3 = styled(CardContainer)`
  top: 0;
  left: 30vw;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 4px solid;

  @media (max-width: 750px) {
    left: calc(var(--w) * 1.6 * 2);
  }
`;

export const Card4 = styled(CardContainer)`
  top: 30vh;
  left: 0;
  background-image: url(${img3});
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-left: 4px solid;
  border-bottom: 4px solid;

  @media (max-width: 1100px) {
    top: calc(var(--h) * 0.7);
  }

  @media (max-width: 750px) {
    top: calc(var(--h) * 0.5);
  }
`;

export const Card5 = styled(CardContainer)`
  top: 30vh;
  left: 15vw;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 4px solid;

  @media (max-width: 1100px) {
    top: calc(var(--h) * 0.7);
  }

  @media (max-width: 750px) {
    top: calc(var(--h) * 0.5);
    left: calc(var(--w) * 1.6);
  }
`;

export const Card6 = styled(CardContainer)`
  top: 30vh;
  left: 30vw;
  background-image: url(${img2});
  border-right: 4px solid;
  border-bottom: 4px solid;

  @media (max-width: 1100px) {
    top: calc(var(--h) * 0.7);
  }

  @media (max-width: 750px) {
    top: calc(var(--h) * 0.5);
    left: calc(var(--w) * 1.6 * 2);
  }
`;

/// contact form
export const BtnSubmit = styled(Button)`
  padding: 20px 30px;
  margin-bottom: 1.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 4px solid;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.palette.colorBlack.main};

  &:hover {
    background: linear-gradient(315deg, #5986bc, #ffffff);
  }

  @media (max-width: 750px) {
    margin-bottom: 3rem;
  }
`;
