import { Button, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Routes } from '../../../app/routes';
import { theme } from '../../../app/app';
import parse from 'html-react-parser';
import Video from '../../../images/fireplace.mp4';
import Book from './book';
import WalkingCat from '../walkingCat';
import LangButton from '../../../shared/langButton';

import * as S from './fireplace.styled';

const Fireplace: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const MDScreen = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <S.MainContainer>
      <S.VideoAccueil id="videoAccueil" src={Video} autoPlay loop muted playsInline />
      <S.Langbt>
        <LangButton colorPrime={true} iconWithoutSlash={false} selectMode={false} />
      </S.Langbt>
      <S.Title>
        <S.TextRainbow>
          <Typography variant="h2">{t('not_found.title')}</Typography>
          <Typography variant="h2">{t('not_found.description')}</Typography>
        </S.TextRainbow>
        <Button variant="outlined" onClick={() => navigate(Routes.home)}>
          {t('not_found.btn_go_home')}
        </Button>
      </S.Title>
      <S.CatContainer>
        <WalkingCat />
      </S.CatContainer>
      {MDScreen && (
        <S.HistoryContainer>
          <Typography variant="h3"> {parse(t('about.subtitle3'))}</Typography>
          <Book />
        </S.HistoryContainer>
      )}
    </S.MainContainer>
  );
};

export default Fireplace;
