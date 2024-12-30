import { styled } from '@mui/material/styles';

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
