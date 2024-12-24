import { styled } from '@mui/material/styles';
import img from '../../images/fon_contact.webp';

export const MainContainer = styled('div')`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 2% 98%;
  padding-bottom: 10vh;
  min-height: 100vh;
  background: url(${img}) no-repeat center center;
  background-size: cover;
  padding-top: 8vh;
`;

export const BreadcrumbsContainer = styled('div')`
  margin-top: 2vh;
  padding-left: 2vw;
  font-style: italic;

  @media (max-width: 760px) {
    margin-bottom: 4vh;
  }
`;

export const FlexBoxMain = styled('div')`
  grid-column: 1;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
  position: relative;

  @media (max-width: 760px) {
    margin-top: 6vh;
  }
`;

export const GridBox1Titre = styled('div')`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const GridBox1Titre1 = styled('div')`
  background: linear-gradient(90deg, rgba(62, 19, 19, 1) 0%, rgba(115, 0, 0, 1) 100%);
  width: 100%;
  color: ${({ theme }) => theme.palette.secondary.main};
  grid-column: 1;
  grid-row: 2;
`;

export const GridBox1Titre2 = styled('div')`
  background: linear-gradient(90deg, rgba(115, 0, 0, 1) 0%, rgba(243, 3, 3, 1) 100%);
  width: 100%;
  color: ${({ theme }) => theme.palette.secondary.main};
  grid-column: 2;
  grid-row: 2;
  align-self: center;
`;

export const GridBox2Main = styled('div')`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr 1fr;
  height: 80vh;
`;

export const GridBox2Main1 = styled('div')`
  background-color: ${({ theme }) => theme.palette.colorRed.main};
  background: linear-gradient(90deg, rgba(62, 19, 19, 1) 0%, rgba(115, 0, 0, 1) 100%);
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 100%;
`;

export const GridBox2Main2 = styled('div')`
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 100%;
  min-height: 70vh;
`;

export const CarouselBox = styled('div')`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  padding: 4vh;
  border: solid ${({ theme }) => theme.palette.colorRed.main};

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;
