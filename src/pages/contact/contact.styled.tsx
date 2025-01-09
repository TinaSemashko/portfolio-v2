import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

export const MainContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.beige.main};

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const GridContainer = styled('div')`
  z-index: 10;
  width: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 40% 60%;

  position: relative;
  justify-items: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 100vh;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 25% 33% 12% 30%;
  }
`;

export const ColorContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: 1 / span 2;
  grid-row: 2;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 4;
    grid-row: 2 / span 3;
  }
`;

export const Titre = styled(Typography)`
  grid-column: 1 / span 3;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-transform: uppercase;
  font-family: 'Roboto Flex', serif;
  z-index: 10;
  padding-top: 10vh;
  font-size: 40rem;

  -webkit-animation: focus-in-expand-fwd 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: focus-in-expand-fwd 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  /**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
  @-webkit-keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-800px);
      transform: translateZ(-800px);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
  }
`;

export const ButtonContainer = styled('div')`
  width: 100%;
  padding-left: 2vw;
  grid-column: 1;
  grid-row: 2;
  justify-self: center;
  align-self: center;

  display: grid;
  grid-template-columns: 20% 80%;
  /* grid-template-rows: 20% 11% 11% 11% 11% 11% 11% 14%; */
  justify-items: start;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 4;
    grid-template-columns: 25% 25% 25% 25%;
    padding-top: 2vh;
  }
`;

export const ImgSocial = styled('img')`
  width: 3rem;
  height: 3rem;
  grid-column: 1;

  justify-self: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 1;
  }
`;

export const ImgSocial1 = styled(ImgSocial)`
  grid-row: 1 / span 2;
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
  }
`;

export const ImgSocial2 = styled(ImgSocial)`
  grid-row: 3 / span 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 2;
  }
`;
export const ImgSocial3 = styled(ImgSocial)`
  grid-row: 5 / span 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 3;
  }
`;
export const ImgSocial4 = styled(ImgSocial)`
  grid-row: 7 / span 3;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 4;
  }
`;

export const TextContainer = styled(Typography)`
  grid-column: 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 4;
    justify-self: center;
    align-self: center;
  }
`;

export const TextContainer1 = styled(TextContainer)`
  grid-row: 1;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 2;
  }
`;

export const TextContainer2 = styled(TextContainer)`
  grid-row: 3;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 4;
  }
`;

export const TextContainer3 = styled(TextContainer)`
  grid-row: 5;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 6;
  }
`;

export const TextContainer4 = styled(TextContainer)`
  grid-row: 7;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 8;
  }
`;

export const ButtonText = styled(Button)`
  grid-column: 2;

  &.MuiButton-root {
    padding-left: 0;
  }

  & :hover {
    color: ${({ theme }) => theme.palette.colorOrange.main};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-self: center;
    align-self: center;
    align-items: center;
    grid-column: 1 / span 4;

    &.MuiButton-root {
      padding-top: 0;
    }
  }
`;

export const ButtonText1 = styled(ButtonText)`
  grid-row: 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 3;

    &.MuiButton-root {
      padding-bottom: 0;
    }
  }
`;

export const ButtonText2 = styled(ButtonText)`
  grid-row: 4;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 5;

    &.MuiButton-root {
      padding-bottom: 0;
    }
  }
`;

export const ButtonText3 = styled(ButtonText)`
  grid-row: 6;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 7;

    &.MuiButton-root {
      padding-bottom: 0;
    }
  }
`;

// export const ButtonText4 = styled(ButtonText)`
//   grid-row: 8 / span 2;

//   ${({ theme }) => theme.breakpoints.down('md')} {
//     grid-row: 9;

//     &.MuiButton-root {
//       padding-bottom: 4vh;
//     }
//   }
// `;

export const QrContainer = styled('div')`
  grid-column: 1;
  grid-row: 2;
  padding-top: 1vh;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 4;
    grid-row: 3;
    width: 20vw;
    /* padding-top: 0; */
    padding-bottom: 1vh;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 30vw;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 40vw;
  }
`;

export const QrImg = styled('img')`
  width: 100%;
  justify-self: center;
  align-self: end;

  /* ${({ theme }) => theme.breakpoints.down('md')} {
    width: 20vw;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 30vw;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 40vw;
  } */
`;

export const FormContainer = styled('div')`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1 / span 3;
    grid-row: 4;

    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`;

/// contact form
export const BtnSubmit = styled(Button)`
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.palette.beige.main};
  border: 4px solid;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.palette.colorBlack.main};

  &:hover {
    background: linear-gradient(315deg, #5986bc, #ffffff);
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 0.5rem;
  }
`;
