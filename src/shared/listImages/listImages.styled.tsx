import { ImageList, ImageListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageList = styled(ImageList)`
  width: 80%;
  border: solid ${({ theme }) => theme.palette.colorGray.main};
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

export const StyledImage = styled('img')`
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  border: solid 4px ${({ theme }) => theme.palette.primary.main};
  transition: opacity 0.3s ease;
  opacity: 1;
`;

export const RoleBadge = styled('div')`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 25;
  background-color: ${({ theme }) => theme.palette.colorTeal.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 0.65rem;
    padding: 3px 7px;
  }
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
