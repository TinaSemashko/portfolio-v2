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

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentPathArray = pathname.split('/');
  const isParallax = currentPathArray[currentPathArray.length - 1] === 'about';

  return (
    <S.MainContainer isParallax={isParallax}>
      <S.StyledButton label={t('footer.contact')} onClick={() => navigate(Routes.contact)} />
      <S.SocialLinks>
        <Social directionRow={false} />
      </S.SocialLinks>
      <S.Langs>
        <LangButton colorPrime={false} iconWithoutSlash={true} selectMode={false} />
      </S.Langs>
      <S.TitreColor>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ fontSize: fontSizeFooter, zIndex: '100', gridColumn: '2', alignSelf: 'center' }}>
          {t('footer.rights')}
        </Typography>
      </S.TitreColor>
    </S.MainContainer>
  );
};

export default Home;
