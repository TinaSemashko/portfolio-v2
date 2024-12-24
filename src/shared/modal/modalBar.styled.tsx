import { Backdrop, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20vw;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: -2px solid #000;
  border-radius: 2px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  padding: 2rem;
  text-align: center;
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  -webkit-tap-highlight-color: transparent;
`;
