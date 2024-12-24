import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItems } from "../../constants/menuItems";

import * as S from "./topbarPerspective.styled";
import { Typography } from "@mui/material";
import { Routes } from "../../app/routes";

const menuItemsArray = Object.values(MenuItems);

const TopBar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <S.MainContainer>
      <S.LefterBox onClick={() => navigate(Routes.about)}>
        <S.TextBox className="text">
          <Typography variant="h5" color="secondary.main">
            {t("menu.about")}
          </Typography>
        </S.TextBox>
      </S.LefterBox>
      <S.LeftBox onClick={() => navigate(Routes.projects)}>
        <S.TextBox className="text">
          <Typography variant="h5" color="secondary.main">
            {t("menu.projects")}
          </Typography>
        </S.TextBox>
      </S.LeftBox>
      <S.CenterBox onClick={() => navigate(Routes.home)}>
        <S.Explainer className="explainer">
          <span>{t("menu.menu")}</span>
        </S.Explainer>
        <S.TextBox className="text">
          <Typography variant="h5" color="secondary.main">
            {t("menu.home")}
          </Typography>
        </S.TextBox>
      </S.CenterBox>
      <S.RightBox onClick={() => navigate(Routes.resume)}>
        <S.TextBox className="text">
          <Typography variant="h5" color="secondary.main">
            {t("menu.resume")}
          </Typography>
        </S.TextBox>
      </S.RightBox>
      <S.RighterBox onClick={() => navigate(Routes.contact)}>
        <S.TextBox className="text">
          <Typography variant="h5" color="secondary.main">
            {t("menu.contact")}
          </Typography>
        </S.TextBox>
      </S.RighterBox>
    </S.MainContainer>
  );
};

export default TopBar;
