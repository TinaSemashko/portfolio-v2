import { useEffect, useState } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Routes } from "../../../app/routes";
import { theme } from "../../../app/app";
import parse from "html-react-parser";
import Video from "../../../images/production_id 4076130 (1080p).mp4";
import Book from "./book";
import WalkingCat from "../walkingCat";
import LangButton from "../../../shared/langButton";
import useWindowSize from "../../../shared/useWindowSize/useWindowSize";

import * as S from "./fireplace.styled";

const About: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize(true);
  const [heightVideo, setHeightVideo] = useState(height);

  const MDScreen = useMediaQuery(theme.breakpoints.up("xxl"));

  useEffect(() => {
    const videoElement = document.getElementById("videoAccueil");
    setHeightVideo(videoElement?.offsetHeight ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window]);

  return (
    <S.MainContainer>
      <S.VideoAccueil id="videoAccueil" src={Video} autoPlay loop muted />
      <S.Langbt windowWidth={width} windowHeight={height}>
        <LangButton
          colorPrime={true}
          iconWithoutSlash={false}
          selectMode={false}
        />
      </S.Langbt>
      <S.Title windowWidth={width} windowHeight={height}>
        <S.TextRainbow>
          <Typography variant="h2">{t("not_found.title")}</Typography>
          <Typography variant="h2">{t("not_found.description")}</Typography>
        </S.TextRainbow>
        <Button variant="outlined" onClick={() => navigate(Routes.home)}>
          {t("not_found.btn_go_home")}
        </Button>
      </S.Title>
      <S.CatContainer windowHeight={heightVideo}>
        <WalkingCat />
      </S.CatContainer>
      {MDScreen && (
        <S.HistoryContainer windowWidth={width} windowHeight={height}>
          <Typography variant="h3"> {parse(t("about.subtitle3"))}</Typography>
          <Book />
        </S.HistoryContainer>
      )}
    </S.MainContainer>
  );
};

export default About;
