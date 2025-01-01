import { styled } from '@mui/material/styles';
import PrimaryButton from '../../shared/primaryButton';
import { ImageListItem } from '@mui/material';

export const MainContainer = styled('div')`
  text-align: center;
  padding-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15vh;

  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Title = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3vh;
`;

export const StyledListItem = styled(ImageListItem)`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  position: relative;

  &:hover .styled-image {
    opacity: 0.1;
  }

  &:hover .description {
    opacity: 1;
  }
`;

export const ThreeDotsBox = styled('div')`
  justify-self: center;
  z-index: 20;
  grid-column: 1;
  grid-row: 1;
  color: ${({ theme }) => theme.palette.colorOrange.main};

  cursor: pointer;

  & .MuiSvgIcon-root {
    height: 2rem;
    width: 3rem;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    margin-top: 1vh;
    border-radius: 50%;
  }

  @media (max-width: 750px) {
    width: 20%;
    justify-self: end;
    align-self: center;
  }
`;

export const StyledImage = styled('img')<{ commercial: boolean }>`
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  border: solid 4px;
  border-color: ${({ theme, commercial }) =>
    commercial ? theme.palette.primary.main : theme.palette.colorOrange.main};
  transition: opacity 0.3s ease;
  opacity: 1;
`;

export const Description = styled('div')`
  width: 95%;
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  z-index: 10;
  color: ${({ theme }) => theme.palette.colorBlue.main};
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const StyledButtonCarousel = styled(PrimaryButton)`
  text-transform: uppercase;
`;

export const CarouselContainer = styled('div')`
  padding-top: 10vh;
`;

export const MobileContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const PictureContainer = styled('div')`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  position: relative;
`;

export const Picture = styled('img')`
  border: 3px inset red;
  border-style: ridge;
  box-shadow: 0 0 15px 3px rgba(86, 6, 6, 0.9);
  width: 100%;

  grid-column: 1;
  grid-row: 1;
`;

export const ButtonMore = styled('button')`
  grid-column: 1;
  grid-row: 1;
  position: absolute;
  top: 76%;
  left: 54%;
  letter-spacing: 0.06em;
  overflow: hidden;
  transition: all 0.3s;
  background: linear-gradient(
    to right,
    rgba(250, 2, 2, 0.7) 1%,
    transparent 40%,
    transparent 60%,
    rgba(97, 6, 6, 0.7) 100%
  );
  color: #950101;
  box-shadow: inset 0 0 10px rgba(253, 27, 27, 0.4), 0 0 9px 3px rgba(253, 27, 27, 0.1);
  border: 3px inset red;
  border-style: ridge;
  width: 40vw;
  height: 5vh;

  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(163, 17, 17, 0.1) 40%,
      rgba(85, 6, 6, 0.1) 60%,
      transparent 100%
    );
  }

  &:hover {
    color: #f9f905;
    box-shadow: inset 0 0 10px rgba(245, 41, 41), 0 0 9px 3px rgba(126, 21, 21);
  }
  &:hover:before {
    transform: translateX(15em);
  }

  @media (max-width: 350px) {
    top: 66%;
  }
`;
