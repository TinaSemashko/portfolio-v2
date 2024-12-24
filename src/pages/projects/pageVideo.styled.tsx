import { styled } from '@mui/material/styles';
import img from '../../images/fon_footer.webp';
import { Button } from '@mui/material';

export const MainContainer = styled('div')`
  text-align: center;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colorBlack.main};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 760px) {
    min-height: 0;
  }
`;

export const VideoContainer = styled('div')`
  width: 90%;
  height: 90vh;
  overflow: hidden;
  border: solid 10px;
  border-color: ${({ theme }) => theme.palette.colorRed.main};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: ${({ theme }) => theme.palette.secondary.main};

  @media (max-width: 1200px) {
    height: 80vh;
  }

  @media (max-width: 960px) {
    height: 70vh;
  }

  @media (max-width: 620px) {
    height: 60vh;
  }

  @media (max-width: 400px) {
    height: 55vh;
  }

  @media (max-width: 320px) {
    height: 50vh;
  }
`;

export const VideoProjects = styled('video')`
  width: 60vw;
  margin-top: 2vh;
  text-align: center;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media (max-width: 1200px) {
    width: 80vw;
  }

  @media (max-width: 960px) {
    width: 85vw;
  }

  @media (max-width: 760px) {
    width: 80vw;
  }
`;

export const ButtonsContainer = styled('div')`
  padding-bottom: 1rem;
  padding-top: 1rem;
  color: ${({ theme }) => theme.palette.colorRed.main};
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  border-radius: 10px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonVideo = styled(Button)`
  background-color: ${({ theme }) => theme.palette.colorRed.main};
  @media (max-width: 760px) {
    width: 80vw;
    height: 6vh;
    margin: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FlexBox = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    justify-content: start;
  }
`;
