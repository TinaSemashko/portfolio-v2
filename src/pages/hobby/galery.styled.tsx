import { ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  background-color: black;
  text-align: center;
  /* padding-top: 10rem; */
  overflow-x: hidden;
`;

export const StyledImageList = styled(ImageList)`
  width: 100vw;
  height: 100%;
  margin-top: 5rem;
`;

export const StyleImageListItem = styled(ImageListItem)`
  position: relative;
  overflow: hidden;

  &:hover {
    .top-left {
      transform: translate(50%, 50%);
    }
    .top-right {
      transform: translate(-50%, 50%);
    }
    .bottom-left {
      transform: translate(50%, -50%);
    }
    .bottom-right {
      transform: translate(-50%, -50%);
    }
  }

  & .MuiImageListItem-img {
    outline-offset: -0.8rem;
    outline: 1rem solid rgba(0, 0, 0, 0.3);
  }
`;

export const Corner = styled("div")`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid transparent;
`;

export const TopLeftCorner = styled(Corner)`
  top: 40px;
  left: 40px;
  border-top-color: ${({ theme }) => theme.palette.primary.main};
  border-left-color: ${({ theme }) => theme.palette.primary.main};
  transition: transform 0.3s ease-in-out;
`;

export const TopRightCorner = styled(Corner)`
  top: 40px;
  right: 40px;
  border-top-color: ${({ theme }) => theme.palette.primary.main};
  border-right-color: ${({ theme }) => theme.palette.primary.main};
  transition: transform 0.3s ease-in-out;
`;

export const BottomLeftCorner = styled(Corner)`
  bottom: 40px;
  left: 40px;
  border-bottom-color: ${({ theme }) => theme.palette.primary.main};
  border-left-color: ${({ theme }) => theme.palette.primary.main};
  transition: transform 0.3s ease-in-out;
`;

export const BottomRightCorner = styled(Corner)`
  bottom: 40px;
  right: 40px;
  border-bottom-color: ${({ theme }) => theme.palette.primary.main};
  border-right-color: ${({ theme }) => theme.palette.primary.main};
  transition: transform 0.3s ease-in-out;
`;
