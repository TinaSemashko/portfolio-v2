import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 4rem;
  font-size: 25px;
  font-weight: 700;
  margin-top: 48px;
  font-family: Arial;
  text-transform: unset;
  gap: 0.75em;
  letter-spacing: 0.07em;
  border: solid;
  z-index: 2;
  border: '4px solid';

  &.MuiButton-root {
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
  }

  border-image: ${({ theme }) =>
    `linear-gradient(55deg, ${theme.palette.colorBlue.main}, ${theme.palette.beige.main}, ${theme.palette.colorLightBlue.main}, ${theme.palette.colorBlue.main} )1`};
  ${({ disabled }) =>
    !disabled &&
    `

  
  :: before {
    position: absolute;
    content: '';
    margin-left: 50px;
    width: 171.42px;
    height: 42.99px;
    left: 10.73px;
    top: 11px;
    background: rgba(172, 189, 211, 0.2);
    filter: blur(15px);
    transform: rotate(7.23deg);
    z-index: -1;
  }
  
  `}
`;
