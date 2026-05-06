import { ImageList, ImageListItem } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import img from '../../images/tr.webp';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
  padding-top: 10vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
  }
`;

export const StyledImageList = styled(ImageList)`
  width: 80%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 90%;
  }

  &.MuiImageList-root {
    padding: 3rem;

    ${({ theme }) => theme.breakpoints.down('lg')} {
      padding: 1rem;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 0.3rem;
    }
  }
`;

export const StyledImageListItem = styled(ImageListItem)`
  align-items: center;
  justify-items: center;
`;

export const StyledImage = styled('img')(({ theme }) => ({
  width: '95%',
  height: '95%',
  border: '1rem solid ',
  borderColor: alpha(theme.palette.primary.main, 0.9),
  boxShadow:
    ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
}));
