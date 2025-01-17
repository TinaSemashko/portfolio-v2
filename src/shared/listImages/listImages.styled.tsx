import { ImageList, ImageListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageList = styled(ImageList)`
  width: 80%;
  border: solid ${({ theme }) => theme.palette.beige.main};
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

  & .MuiSvgIcon-root {
    height: 2rem;
    width: 3rem;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    margin-top: 1vh;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.palette.colorLightBlue.main};
      cursor: pointer;
    }
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
