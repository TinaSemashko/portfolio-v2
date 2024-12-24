import { styled } from '@mui/material/styles';
import fon1 from '../../images/fon_footer.webp';

export const MainContainer = styled('div')`
  width: 100%;
  overflow-x: hidden;
  padding-top: 10vh;
  background-image: url(${fon1});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
  }
`;
