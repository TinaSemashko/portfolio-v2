import { Typography } from '@mui/material';
import LangButton from '../langButton';
import { Routes } from '../../app/routes';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import Social from '../socialLinks';

import * as S from './footer.styled';

const fontSizeFooter = {
  xxs: '0.5rem',
  xs: '0.5rem',
  sm: '0.8rem',
  md: '0.9rem',
  lg: '1rem',
  xl: '1.2rem',
  xxl: '1.2rem',
};

const fontSizeTitre = {
  xxs: '0.9rem',
  xs: '0.9rem',
  sm: '1.2rem',
  md: '1.3rem',
  lg: '1.5rem',
  xl: '1.6rem',
  xxl: '1.6rem',
};

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentPathArray = pathname.split('/');
  const isParallax =
    currentPathArray[currentPathArray.length - 1] === 'about' ||
    currentPathArray[currentPathArray.length - 1] === 'projects';

  return (
    <S.MainContainer isParallax={isParallax}>
      <S.WorkInquiryBox>
        <div>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontSize: fontSizeTitre,
            }}>
            {t('footer.work')}
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ fontSize: fontSizeFooter, color: '#008388' }}>
            {t('footer.work_sub')}
          </Typography>
        </div>
        <S.ButtonWork onClick={() => navigate(Routes.contact)}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              fontSize: fontSizeFooter,
            }}>
            {t('footer.contact')}
          </Typography>
        </S.ButtonWork>
      </S.WorkInquiryBox>
      <Social />
      <S.FlexBox>
        <LangButton colorPrime={false} iconWithoutSlash={true} selectMode={false} />
        <Typography variant="h6" textAlign="center" sx={{ fontSize: fontSizeFooter, zIndex: '100' }}>
          {t('footer.rights')}
        </Typography>
        <div></div>
      </S.FlexBox>
    </S.MainContainer>
  );
};

export default Home;
