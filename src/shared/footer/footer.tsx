import { Typography } from '@mui/material';
import LangButton from '../langButton';
import { Routes } from '../../app/routes';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import Social from '../socialLinks';

import { fontSizes } from '../../constants/responsiveFontSizes';

import * as S from './footer.styled';

const fontSizeFooter = fontSizes.footer;

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
