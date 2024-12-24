import { styled } from '@mui/material/styles';
import img from '../../images/fon_footer.webp';
import { Typography } from '@mui/material';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
  margin-top: 7vh;
`;

export const Title = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.palette.primary.main};
  background-image: url(${img});

  @media (max-width: 750px) {
  }
`;

export const FlexBox = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
`;

export const BodyBox = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2%;
`;

export const ChapterContainer = styled(Typography)`
  text-align: center;
  padding-bottom: 2%;
`;

export const ParagraphContainer = styled(Typography)`
  padding-bottom: 2%;
`;
