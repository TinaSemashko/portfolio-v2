import { IconButton, Typography } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useEffect, useState } from 'react';

import * as S from './scroll.styled';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Routes } from '../../app/routes';

type Props = {
  showBelow: number;
};

const Scroll: React.FC<Props> = ({ showBelow }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [show, setShow] = useState(showBelow ? false : true);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <S.MainContainer>
      {show && (
        <IconButton
          onClick={handleClick}
          sx={{
            height: '18vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'fixed',
            bottom: '10vh',
            color: 'secondary.main',
            zIndex: '100',

            '&:hover': {
              backgroundColor: 'inherit',
            },

            '&:hover *': {
              color: 'colorBlue.main',
              backgroundColor: 'transparent',
              transition: '0.5s',
            },
          }}>
          <NavigationIcon color={pathname === Routes.projects ? 'primary' : 'secondary'} />
          <Typography
            variant="body2"
            color={pathname === Routes.projects ? 'primary' : 'secondary'}
            sx={{ transform: 'rotate(90deg)', py: 4 }}>
            {t('main.backToTop')}
          </Typography>
        </IconButton>
      )}
    </S.MainContainer>
  );
};

export default Scroll;
