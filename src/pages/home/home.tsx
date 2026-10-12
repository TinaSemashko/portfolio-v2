import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { SITE_URL } from '../../constants/site';
import img1 from '../../images/home.webp';
import node from '../../images/node-js.webp';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import { Technologies } from '../../constants/technologies';

import { fontSizes } from '../../constants/responsiveFontSizes';

import * as S from './home.styled';

const TechnologiesArray = Object.values(Technologies);

const fontSizeTitle = fontSizes.homeTitle;
const fontSizeSubTitle = fontSizes.homeSubTitle;
const fontSizeCitate = fontSizes.homeCitate;
const fontSizeTech = fontSizes.homeTech;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <Helmet>
        <title>Portfolio full stack développeur</title>
        <meta name="description" content="Tina — Full-stack développeuse web et intégrations IA (React, Node.js, TypeScript), Île-de-France" />
        <meta
          name="keywords"
          content="Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Portfolio full stack développeur" />
        <meta name="twitter:description" content="Tina — Full-stack développeuse web et intégrations IA (React, Node.js, TypeScript), Île-de-France" />
        <meta name="twitter:image" content={`${SITE_URL}/logo512.png`} />
        <meta property="og:title" content="Portfolio full stack développeur" />
        <meta property="og:description" content="Tina — Full-stack développeuse web et intégrations IA (React, Node.js, TypeScript), Île-de-France" />
        <meta property="og:image" content={`${SITE_URL}/logo512.png`} />
        <meta property="og:site_name" content="Tina — Portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      <S.GridContainer>
        <S.Titre
          variant="h1"
          sx={{
            fontSize: fontSizeTitle,
          }}>
          {t('main.title')}
        </S.Titre>
        <S.ColorContainer />
        <S.ImgBox>
          <S.ImgNode src={node} alt="Node.js" />
        </S.ImgBox>
        <S.SubTitre
          variant="h2"
          sx={{
            fontSize: fontSizeSubTitle,
          }}>
          {t('main.subtitle1')}
        </S.SubTitre>

        <S.CubImg src={img1} alt="digital city" />
        <S.Technol>
          {TechnologiesArray.map((item, index) => (
            <React.Fragment key={item}>
              <S.TechnolTypography
                variant="h3"
                sx={{
                  fontSize: fontSizeTech,
                }}>
                {item}
              </S.TechnolTypography>
              {index < TechnologiesArray.length - 1 ? <S.Circle /> : ''}
            </React.Fragment>
          ))}
        </S.Technol>
        <S.StyledButton label={t('main.buttonMore')} onClick={() => navigate(Routes.projects)} />
        <S.CitateBox>
          <S.Citate
            variant="body2"
            sx={{
              fontSize: fontSizeCitate,
            }}>
            {t('main.title2ecran')}
          </S.Citate>
        </S.CitateBox>
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Home;
