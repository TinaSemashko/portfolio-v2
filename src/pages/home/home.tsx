import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import img1 from '../../images/home.webp';
import node from '../../images/node-js.webp';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import { Technologies } from '../../constants/technologies';

import * as S from './home.styled';

const TechnologiesArray = Object.values(Technologies);

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
  xxs: '0.7rem',
  xs: '0.8rem',
  sm: '0.9rem',
  md: '0.8rem',
  lg: '0.8rem',
  xl: '0.9rem',
  xxl: '1.1rem',
};

const fontSizeTech = {
  xxs: '0.8rem',
  xs: '0.9rem',
  sm: '1.1rem',
  md: '1.1rem',
  lg: '1.1rem',
  xl: '1.3rem',
  xxl: '1.6rem',
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            <>
              <S.TechnolTypography
                variant="h3"
                sx={{
                  fontSize: fontSizeTech,
                }}>
                {item}
              </S.TechnolTypography>
              {index < TechnologiesArray.length - 1 ? <S.Circle /> : ''}
            </>
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
