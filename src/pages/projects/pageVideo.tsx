import { useLocation, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Routes } from "../../app/routes";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import VideoAssofactory from "../../images/assofactory.mp4";
import VideoConnectify from "../../images/connevtify.mp4";
import VideoABS from "../../images/abs.mp4";
import VideoSeaLife from "../../images/SEALIFE api.mp4";

import * as S from "./pageVideo.styled";

type VideoLinks = {
  [key: string]: string;
};

const videoLinks: VideoLinks = {
  VideoAssofactory: VideoAssofactory,
  VideoConnectify: VideoConnectify,
  VideoSeaLife: VideoSeaLife,
  VideoABS: VideoABS,
};

const fontSizeBody2 = {
  xs: "0.5rem",
  sm: "0.8rem",
  md: "0.7rem",
  lg: "0.9rem",
  xl: "1rem",
};

const VideoProjects: React.FC = () => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [videoSrc, setVideoSrc] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (state && state.hasOwnProperty("projectcard")) {
      const project = state.projectcard.project;
      setVideoSrc(videoLinks[project.linkVideo]);
    }
  }, [state]);

  const handleRestartVideo = (): void => {
    if (videoRef?.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const openCard = () => {
    console.log(state.projectcard.project);
    navigate(Routes.cartproject, {
      state: { cartproject: state.projectcard },
    });
  };

  return (
    <S.MainContainer>
      <S.VideoContainer>
        <S.VideoProjects ref={videoRef} src={videoSrc} autoPlay muted />
        <S.ButtonsContainer>
          <S.ButtonVideo
            color="error"
            variant="contained"
            onClick={handleRestartVideo}
          >
            <S.FlexBox>
              <ReplayCircleFilledIcon />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body1" sx={{ fontSize: fontSizeBody2 }}>
                {t("projects.repeat")}
              </Typography>
            </S.FlexBox>
          </S.ButtonVideo>
          <S.ButtonVideo
            color="error"
            variant="contained"
            onClick={() => openCard()}
          >
            <S.FlexBox>
              <DescriptionIcon />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body1" sx={{ fontSize: fontSizeBody2 }}>
                {t("projects.description")}
              </Typography>
            </S.FlexBox>
          </S.ButtonVideo>
          <S.ButtonVideo
            color="error"
            variant="contained"
            onClick={() => {
              navigate(Routes.projects);
            }}
          >
            <S.FlexBox>
              <AssignmentReturnIcon />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body1" sx={{ fontSize: fontSizeBody2 }}>
                {t("projects.return")}
              </Typography>
            </S.FlexBox>
          </S.ButtonVideo>
        </S.ButtonsContainer>
      </S.VideoContainer>
    </S.MainContainer>
  );
};

export default VideoProjects;
