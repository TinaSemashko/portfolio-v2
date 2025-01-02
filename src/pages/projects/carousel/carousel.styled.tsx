import { styled } from '@mui/material/styles';

export const CarouselContainer = styled('div')`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const FlexBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90vw;
  z-index: 9;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    width: 100%;
    padding-right: 0;
    overflow-x: visible;
    margin-top: 0;
  }
`;

export const SliderBox = styled('div')`
  width: 70%;
  box-shadow: 14px 14px 14px black;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const ImgCarouselContainer = styled('div')`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const ArrowWrapper = styled('div')`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 10;
  color: ${({ theme }) => theme.palette.primary.main} !important;
  border-radius: 50%;
  padding: 1rem !important;
  background-color: #f9f9f988 !important;
`;
