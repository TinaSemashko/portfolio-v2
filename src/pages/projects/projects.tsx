import { useEffect, useState } from 'react';
import { Button, ImageList, ImageListItem, ImageListItemBar, Link, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Carousel3d } from '../../types/projects';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import Carousel from '../../shared/carousel3D/carousel3d';
import { theme } from '../../app/app';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import ProjectsMobile from './projectsMobile';

import * as S from './projects.styled';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [imageMap, setImageMap] = useState<Carousel3d[]>([]);
  const [showCarousel, setshowCarousel] = useState<boolean>(false);
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const tempCar = imagesCarousel.map((el: Carousel3d, index: number) => {
      return {
        ...el,
        src: require(`../../images/${el.imageName}`),
      };
    });

    setImageMap(tempCar);
  }, []);

  const handleCarousel = () => {
    setshowCarousel(!showCarousel);
  };

  const openDescription = (project: Carousel3d): void => {
    navigate(Routes.cartproject, {
      state: { cartproject: { project } },
    });
  };

  return (
    <S.MainContainer>
      <Helmet>
        <title>Projets full stack développeur</title>
        <meta name="description" content="Mes projects Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Mes projects, Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
      </Helmet>
      <Typography
        variant="h1"
        sx={{
          pb: 4,
          color: smScreen ? 'primary.main' : 'colorBlack.main',
          textShadow:
            '0px 3px 0px rgba(84, 83, 83, 0.545),0px 7px 10px rgba(0,0,0,0.15), 0px 10px 2px rgba(0,0,0,0.15), 0px 14px 30px rgba(0,0,0,0.2)',
        }}>
        {t('projects.title')}
      </Typography>

      <Link
        underline="hover"
        variant="h6"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/TinaSemashko"
        sx={{ color: 'colorRed.main', pb: 4 }}>
        {t('projects.myGIT')}
      </Link>

      {smScreen ? (
        <ProjectsMobile />
      ) : (
        <>
          <Button variant="contained" onClick={handleCarousel}>
            {showCarousel ? t('projects.list') : t('projects.carousel')}
          </Button>
          {showCarousel ? (
            <S.CarouselContainer>
              <Carousel />
            </S.CarouselContainer>
          ) : (
            <ImageList cols={mdScreen ? 2 : 3} gap={mdScreen ? 20 : 50} sx={{ width: '95%', height: '100%' }}>
              {imageMap.map(item => (
                <ImageListItem key={item.src} sx={{ cursor: 'pointer' }}>
                  <img
                    srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=248&fit=crop&auto=format`}
                    alt={item.projectName}
                    loading="lazy"
                    onClick={() => openDescription(item)}
                  />
                  <ImageListItemBar
                    title={<Typography variant="h3">{item.projectTitre}</Typography>}
                    // subtitle={
                    //   <Typography variant="subtitle1" component="span" sx={{ width: '50%' }}>
                    //     {item.descriptions}
                    //   </Typography>
                    // }
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </>
      )}
    </S.MainContainer>
  );
};

export default Projects;
