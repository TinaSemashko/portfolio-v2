import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

export const MainContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.beige.main};

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-evenly;
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
    grid-template-rows: 30% 40% 40%;
  }
`;

export const ColorContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  grid-column: 1 / span 2;
  grid-row: 2;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
    grid-row: 2 / span 2;
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
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 20%;
  justify-items: start;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 25% 25% 25% 25%;
    /* grid-template-rows: 25% 10% 2% 2% 2% 2% 2% 2% 2% 10% 30%; */
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
  }
`;

export const ButtonText1 = styled(ButtonText)`
  grid-row: 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 3;
  }
`;

export const ButtonText2 = styled(ButtonText)`
  grid-row: 4;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 5;
  }
`;

export const ButtonText3 = styled(ButtonText)`
  grid-row: 6;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 7;
  }
`;

export const ButtonText4 = styled(ButtonText)`
  grid-row: 8 / span 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row: 9;
  }
`;

export const QrImg = styled('img')`
  width: 10vw;
  justify-self: center;
  align-self: center;
  padding-top: 1vh;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 20vw;
    padding-top: 0;
    grid-row: 9;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 30vw;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    width: 40vw;
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
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
  }
`;

export const FormContainer = styled('div')`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-column: 1;
    grid-row: 3;
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
    margin-bottom: 3rem;
  }
`;
