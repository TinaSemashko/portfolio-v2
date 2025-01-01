import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Description = styled('div')`
  width: 38vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2vh;
  padding-right: 2vh;

  background: ${({ theme: { palette } }) =>
    `linear-gradient(90deg, ${palette.secondary.main} 0%, ${palette.primary.main} 100%)`};

  border: solid ${({ theme }) => theme.palette.colorBlue.main};
  color: ${({ theme }) => theme.palette.colorBlue.main};
  box-shadow: 14px 14px 14px black;
  z-index: 10;
  height: 77vh;

  @media (max-width: 1500px) {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 40vh;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100%;
  }
`;

export const DiscriptionCarouselCont = styled('div')`
  background-color: ${({ theme }) => theme.palette.colorBlue.main};
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
  border-left: double white;

  @media (max-width: 568px) {
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const FlexBoxButton = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 568px) {
    display: none;
  }
`;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const MainImagesContainer = styled('div')``;

export const Picture = styled('img')`
  border-style: ridge;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 100%;
`;

export const CollapseContainer = styled('div')<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const ColorContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;

  background: ${({ theme: { palette } }) =>
    `repeating-linear-gradient(90deg, #0000 0, rgb(255, 255, 255) 25%, #0000 50%) ${palette.primary.main}`};
  background-size: 200% 100%;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: shine 5s infinite linear;

  @keyframes shine {
    0% {
      background-position: right;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;
