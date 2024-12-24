import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../app/app";

import * as S from "./galery.styled";

const Galery: React.FC = () => {
  const { state } = useLocation();
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [dataGalery, setdataGalery] = useState<string[]>([]);

  useEffect(() => {
    if (state && state.hasOwnProperty("photodata")) {
      setdataGalery([...state.photodata]);
    }
  }, [state]);

  return (
    <S.MainContainer>
      <S.StyledImageList
        variant="masonry"
        cols={matchDownSm ? 1 : matchDownMd ? 2 : 3}
        gap={8}
      >
        {dataGalery.map((item, index) => (
          <S.StyleImageListItem key={index}>
            <img
              srcSet={`${require(`../../images/Hobby/${item}`)}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${require(`../../images/Hobby/${item}`)}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
              alt=""
            />
            <S.TopLeftCorner className="top-left" />
            <S.TopRightCorner className="top-right" />
            <S.BottomLeftCorner className="bottom-left" />
            <S.BottomRightCorner className="bottom-right" />
          </S.StyleImageListItem>
        ))}
      </S.StyledImageList>
    </S.MainContainer>
  );
};

export default Galery;
