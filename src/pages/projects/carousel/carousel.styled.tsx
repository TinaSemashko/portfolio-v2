import { styled } from '@mui/material/styles';

export const CarouselContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: hidden;
  position: relative;
`;

export const SliderBox = styled('div')`
  flex: 1;
  min-height: 0;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 4rem;
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0.5rem 2.5rem;
  }

  .slick-slider {
    width: 100%;
  }
`;

export const ImgCarouselContainer = styled('div')`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 100%;
    max-height: 75vh;
    width: auto !important;
    height: auto;
    object-fit: contain;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    & img {
      max-height: 65vh;
    }
  }
`;

export const ArrowWrapper = styled('div')`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 10;
  color: ${({ theme }) => theme.palette.colorBlue.main} !important;
  border-radius: 50%;
  padding: 0.75rem !important;
  background-color: ${({ theme }) => theme.palette.colorLightBlue.main} !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  & svg {
    font-size: 1.5rem;
  }
`;

export const Caption = styled('div')`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colorBlue.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 2.5rem 4rem;
  font-size: 1.25rem;
  line-height: 1.65;
  text-align: left;
  border-top: 3px solid ${({ theme }) => theme.palette.colorLightBlue.main};
  box-sizing: border-box;
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
    line-height: 1.55;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 1rem 1.25rem;
    font-size: 0.95rem;
  }
`;
