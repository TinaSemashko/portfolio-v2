import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  overflow-x: hidden;
`;
