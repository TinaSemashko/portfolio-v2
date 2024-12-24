import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")``;

export const List = styled("span")<{
  colorPrime: boolean;
  iconWithoutSlash: boolean;
}>`
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 20%;
  li {
    list-style-type: none;
    display: inline-block;
    text-transform: "uppercase";
    &:not(:first-of-type) {
      padding-left: 2.1vw;
    }
    &:first-of-type ::after {
      padding-left: 2.1vw;
    }
  }
`;

export const LangGridContainer = styled("div")`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.colorBlack.main};
`;

export const LanguageButton = styled("span")<{ selected: boolean }>`
  color: ${({ selected, theme }) => (selected ? "#ffe4c4" : "#00f7ff")};
  &:hover {
    color: #01767a;
  }
  font-weight: 950;
  grid-column: 1;
  grid-row: 1;
  /* padding-top: 12vh; */
`;

export const Lamp = styled("img")<{ colorPrime: boolean }>`
  display: ${({ colorPrime }) => (colorPrime ? "block" : "none")};
  text-align: center;
  grid-column: 1;
  grid-row: 1;
  width: 7rem;
`;
