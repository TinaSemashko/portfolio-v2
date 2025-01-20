import { Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import img from '../../images/fon-cv.webp';
import img1 from '../../images/papier.webp';
import img2 from '../../images/papier1.webp';
import PrimaryButton from '../../shared/primaryButton';

export const MainContainer = styled('div')`
  padding-top: 10vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: relative;

  /* background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const BackgroundMain = styled('div')`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: cover;
  border: solid;
  box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b, inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
`;

export const MainGridContainer = styled(BackgroundMain)`
  width: 60%;
  padding-top: 4vh;
  padding-bottom: 4vh;
  padding-left: 4vw;
  padding-right: 4vw;

  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const ResumeContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  grid-gap: 1%;
  align-items: center;
  justify-items: center;

  @media (max-width: 1200px) {
  }
`;

export const PhotoBox = styled('div')`
  grid-column: 1;
  grid-row: 1 / span 2;
  text-align: center;
`;

export const Photo = styled('img')`
  width: 15vw;
  padding: 0.5rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media (max-width: 1200px) {
    width: 20vw;
  }
`;

export const Title = styled('div')`
  grid-column: 2;
  grid-row: 1;
  padding-left: 6vh;

  @media (max-width: 1200px) {
    padding-left: 0;
    grid-column: 2 / span 2;
  }
`;

export const ButtonCV = styled(Button)`
  grid-column: 3;
  grid-row: 1;

  &:hover::before {
    transform: scaleX(1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      82.3deg,
      ${({ theme }) => theme.palette.colorBlue.main} 10.8%,
      ${({ theme }) => theme.palette.secondary.main} 94.3%
    );
    transition: all 0.475s;
  }

  outline: none;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed;
  border-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.colorBlue.main}, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.colorBlue.main}, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
  }

  &.MuiButton-root {
    width: 7vw;
    height: 8vh;
    border-radius: 10px;

    @media (max-width: 1200px) {
      width: 10vw;
      height: 10vh;
    }

    @media (max-width: 568px) {
      width: 4vw;
      height: 6vh;
    }

    @media (max-width: 400px) {
      width: 4vw;
      height: 4vh;
    }
  }

  @media (max-width: 1200px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const TextBox = styled('div')`
  grid-column: 2 / span 2;
  grid-row: 2;
  padding-left: 10vh;

  @media (max-width: 1200px) {
    grid-column: 1 / span 3;
    padding-left: 2vh;
    grid-row: 3;
  }
`;

export const StyledTypographyResume = styled(Typography)`
  & .MuiTypography-root {
    padding-top: 0;

    ${({ theme }) => theme.breakpoints.down('lg')} {
      font-size: 1rem;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      font-size: 0.8rem;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      font-size: 0.6rem;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      font-size: 0.5rem;
    }
    ${({ theme }) => theme.breakpoints.down('xxs')} {
      font-size: 0.5rem;
    }
  }
`;

export const FlexInformationContainer = styled(BackgroundMain)`
  grid-column: 2 / span 2;
  grid-row: 3;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const Line = styled(BackgroundMain)`
  width: 75%;
  height: 11vh;
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledButton = styled(PrimaryButton)`
  text-transform: uppercase;
  position: relative;
  align-self: center;
  justify-self: center;
  color: ${({ theme }) => theme.palette.secondary.main};

  &.MuiButton-root {
    margin-top: 0;
  }
`;

export const Empty = styled('div')`
  width: 100%;
  height: 5vh;
`;

export const ExperienceCommon = styled('div')`
  padding-top: 5vh;
  padding-bottom: 10vh;
  padding-right: 4vw;
  text-align: center;
  width: 100%;

  @media (max-width: 1200px) {
    padding-right: 2vw;
    padding-left: 2vw;
    padding-bottom: 2vh;
  }
`;

export const Experience = styled(ExperienceCommon)`
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 1200px) {
    grid-column: 1;
    padding-bottom: 4vh;
  }
`;

export const Education = styled(ExperienceCommon)`
  grid-column: 1;
  grid-row: 1;
`;

export const GridExpCompetences = styled('div')`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

export const GridEducLangueges = styled('div')`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

export const SectionAdditional = styled(BackgroundMain)`
  text-align: left;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  white-space: normal;
`;

export const SectionCompetances = styled(SectionAdditional)`
  margin-top: 6vh;
  margin-left: -6vw;
  padding-top: 4vh;
  padding-bottom: 4vh;
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 1200px) {
    width: 95%;
    margin-left: 0;
    margin-top: 0;
    padding-left: 10vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  @media (max-width: 760px) {
    padding-top: 8vh;
    padding-bottom: 8vh;
  }
`;

export const SectionLangueges = styled(SectionAdditional)`
  height: 34vh;
  min-width: 25vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  margin-top: 40vh;

  grid-column: 2;
  grid-row: 1;

  @media (max-width: 1200px) {
    grid-column: 1;
    margin-top: 0;
    width: 95%;
    height: 40vh;
    padding-left: 10vw;
  }

  @media (max-width: 760px) {
    height: 30vh;
  }
`;

export const ExpTitle = styled('div')`
  padding-bottom: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.main};
  text-shadow: 1px 1px 0 #05174b, 1px -1px 0 #05174b, -1px 1px 0 #05174b, -1px -1px 0 #05174b;

  grid-column: 1 / span 3;
  grid-row: 1;
`;

export const ExpMain = styled('div')`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  width: 100%;

  grid-column: 1 / span 2;
`;

export const EducMain = styled(ExpMain)`
  grid-column: 1 / span 3;
`;

export const SectionDates = styled('div')`
  grid-column: 1;
  text-align: right;

  @media (max-width: 1200px) {
    margin-left: 2vw;
  }
`;

export const SectionPoint = styled('div')`
  grid-column: 2;
  height: 30vh;
  margin-top: -2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 20vh;
    margin-top: 0;
  }
`;

export const Circle = styled('div')`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 15px;
    height: 15px;
  }
`;

export const SectionOrganisation = styled('div')`
  grid-column: 3;
  text-align: left;
  white-space: pre-line;
`;

export const CoursesTitle = styled('div')`
  margin-top: 8vh;
  grid-column: 1 / span 3;
  text-align: center;
  color: ${({ theme }) => theme.palette.colorBlue.main};
`;

export const Courses = styled('ul')`
  grid-column: 1 / span 3;
  text-align: left;
  padding-left: 10vw;
`;

export const Hobby = styled('div')`
  min-height: 30vh;
  width: 80%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-gap: 5%;
  padding-bottom: 10vh;
  padding-right: 8vw;
`;

export const SectionHobby = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.colorBlue.main, 0.3),
  width: '20vw',
  height: '6vh',

  color: theme.palette.secondary.main,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  boxShadow: '-1px -5px 15px #41465b, 5px 5px 15px #41465b, inset 5px 5px 10px #212121, inset -5px -5px 10px #212121',

  animation: 'floatAnimation 3s ease-in-out infinite',

  '@keyframes floatAnimation': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },

  [theme.breakpoints.down('xl')]: {
    width: '30vw',
  },

  [theme.breakpoints.down('lg')]: {
    width: '50vw',
  },
}));

export const SectionHobbyMain = styled(SectionHobby)`
  grid-row: 1;
  grid-column: 1 / span 4;
  cursor: pointer;
  animation: floatAnimation 5s infinite;

  & :hover {
    background-color: ${({ theme }) => theme.palette.colorBlue.main};
  }
`;

export const StyledTypography = styled(Typography)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionHobby1 = styled(SectionHobby)`
  grid-row: 2;
  grid-column: 1;
  animation: floatAnimation 2s infinite;

  @media (max-width: 960px) {
    margin-left: 18vw;
  }
`;

export const SectionHobby2 = styled(SectionHobby)`
  grid-row: 3;
  grid-column: 2;
  animation: floatAnimation 4.2s infinite;
`;

export const SectionHobby3 = styled(SectionHobby)`
  grid-row: 4;
  grid-column: 3;
  animation: floatAnimation 4s infinite;
`;

export const SectionHobby4 = styled(SectionHobby)`
  grid-row: 5;
  grid-column: 4;
  animation: floatAnimation 3.5s infinite;
  @media (max-width: 960px) {
    margin-right: 20vw;
  }
`;

export const SectionHobby5 = styled(SectionHobby)`
  grid-row: 6;
  grid-column: 2;
  animation: floatAnimation 4.7s infinite;
`;
