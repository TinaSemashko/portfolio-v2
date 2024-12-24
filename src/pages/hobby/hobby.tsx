import { Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import Video from '../../images/videohome.mp4';
import { theme } from '../../app/app';
import { dataLeather, dataBiser, dataPaint, dataEmbroidery, dataPlasticine } from './dataHobby';
import img from '../../images/perle.webp';

import * as S from './hobby.styled';

const Hobby: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const SMScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <S.MainContainer>
      <S.VideoAccueil src={Video} autoPlay loop muted />
      <S.BackgroundContainer />
      <S.GridContainer>
        <S.ImgContainer1>
          <S.StyledImg src={img} alt="" />
          <S.StyleText>
            <Typography
              variant={SMScreen ? 'body2' : 'h4'}
              fontWeight="900"
              onClick={() => {
                navigate(Routes.galery, {
                  state: { photodata: dataLeather },
                });
              }}>
              {t('hobby.leather')}
            </Typography>
          </S.StyleText>
        </S.ImgContainer1>
        <S.ImgContainer2>
          <S.StyledImg src={img} alt="" />
          <S.StyleText>
            <Typography
              variant={SMScreen ? 'body2' : 'h4'}
              fontWeight="900"
              onClick={() => {
                navigate(Routes.galery, {
                  state: { photodata: dataBiser },
                });
              }}>
              {t('hobby.biser')}
            </Typography>
          </S.StyleText>
        </S.ImgContainer2>
        <S.ImgContainer3>
          <S.StyledImg src={img} alt="" />
          <S.StyleText>
            <Typography
              variant={SMScreen ? 'body2' : 'h4'}
              fontWeight="900"
              onClick={() => {
                navigate(Routes.galery, {
                  state: { photodata: dataPaint },
                });
              }}>
              {t('hobby.paint')}
            </Typography>
          </S.StyleText>
        </S.ImgContainer3>
        <S.ImgContainer4>
          <S.StyledImg src={img} alt="" />
          <S.StyleText>
            <Typography
              variant={SMScreen ? 'body2' : 'h4'}
              fontWeight="900"
              onClick={() => {
                navigate(Routes.galery, {
                  state: { photodata: dataPlasticine },
                });
              }}>
              {t('hobby.plasticine')}
            </Typography>
          </S.StyleText>
        </S.ImgContainer4>
        <S.ImgContainer5>
          <S.StyledImg src={img} alt="" />
          <S.StyleText>
            <Typography
              variant={SMScreen ? 'body2' : 'h4'}
              fontWeight="900"
              onClick={() => {
                navigate(Routes.galery, {
                  state: { photodata: dataEmbroidery },
                });
              }}>
              {t('hobby.embroidery')}
            </Typography>
          </S.StyleText>
        </S.ImgContainer5>
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Hobby;
