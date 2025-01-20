import { styled } from '@mui/material/styles';
import PrimaryButton from '../../shared/primaryButton';
import { ImageListItem } from '@mui/material';
import img from '../../images/fon-it1.webp';

export const MainContainer = styled('div')`
  text-align: center;
  padding-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.colorGray.main};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
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
  background-color: ${({ theme }) => theme.palette.colorGray.main};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover .styled-image {
    opacity: 0.95;
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
  padding-top: 2vh;
`;

export const StyledButtonCarousel = styled(PrimaryButton)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.colorBlue.main};
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
