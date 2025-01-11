import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import img1 from '../../images/cube_tech.webp';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';

import * as S from './home.styled';
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fontSizeTitle = {
    xxs: '10rem',
    xs: '10rem',
    sm: '12rem',
    md: '18rem',
    lg: '18rem',
    xl: '18rem',
    xxl: '22rem',
  };

  const fontSizeSubTitle = {
    xxs: '1.4rem',
    xs: '1.8rem',
    sm: '2.2rem',
    md: '2.4rem',
    lg: '2.6rem',
    xl: '2.8rem',
    xxl: '3rem',
  };

  const fontSizeCitate = {
    xxs: '0.8rem',
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    xxl: '2rem',
  };

  return (
    <S.MainContainer>
      <Helmet>
        <title>Portfolio full stack développeur</title>
        <meta name="description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
        <meta name="twitter:title" content="Portfolio full stack développeur" />
        <meta name="twitter:description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:title" content="Portfolio full stack développeu" />
        <meta property="og:description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:url" content="https://tina-dev-portfolio.netlify.app/" />
        <meta property="og:site_name" content="tina-dev-portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="article" />
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
        <S.SubTitre
          variant="h2"
          sx={{
            fontSize: fontSizeSubTitle,
          }}>
          {t('main.subtitle1')}
        </S.SubTitre>
        <S.CubImg src={img1} />
        <S.StyledButton label={t('main.buttonMore')} onClick={() => navigate(Routes.projects)} />
        <S.Citate
          variant="subtitle1"
          sx={{
            fontSize: fontSizeCitate,
          }}>
          {t('main.title2ecran')}
        </S.Citate>
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Home;
