import { useEffect, useState } from 'react';
import { Link, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Carousel3d, CarouselProjectImg, DataListMenu } from '../../types/projects';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import Carousel from '../../shared/carousel3D/carousel3d';
import { theme } from '../../app/app';
import ProjectsMobile from './projectsMobile';
import LaunchIcon from '@mui/icons-material/Launch';
import CastIcon from '@mui/icons-material/Cast';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import { openLink } from '../../shared/utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import HighlightedText from '../../shared/highlightedText';
import { DataCarousel2D } from '../dataCarousel2D/dataCarousel2D';
import { DataCarousel2DBack } from '../dataCarousel2D/dataCarousel2Dback';
import ListImages from '../../shared/listImages';

import * as S from './projects.styled';

const fontSizeDescription = {
  xxs: '0.5rem',
  xs: '0.5rem',
  sm: '0.6rem',
  md: '0.7rem',
  lg: '0.7rem',
  xl: '0.9rem',
  xxl: '1.1rem',
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [openCarousel, setOpenCarousel] = useState(false);
  const [carouselBack, setCarouselBack] = useState(false);
  const [selectedProjectName, setSelectedProjectName] = useState<string | null>(null);
  const [imageMapList, setImageMapList] = useState<Carousel3d[]>([]);
  const [dataCarousel2D, setDataCarousel2D] = useState<CarouselProjectImg[]>([]);
  const [showCarousel, setshowCarousel] = useState<boolean>(false);
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const lgScreen = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const tempCar = imagesCarousel.map((el: Carousel3d, index: number) => {
      return {
        ...el,
        src: require(`../../images/${el.imageNameList}`),
      };
    });

    setImageMapList(tempCar);
  }, []);

  useEffect(() => {
    const tempCar2D = carouselBack
      ? DataCarousel2DBack?.filter(el => el.projectName === selectedProjectName).map(item => ({
          ...item,
          src: require(`../../images/MyProjects/Back/${item.src}`),
        }))
      : DataCarousel2D?.filter(el => el.projectName === selectedProjectName).map(item => ({
          ...item,
          src: require(`../../images/MyProjects/Front/${item.src}`),
        }));

    setDataCarousel2D(tempCar2D);
  }, [carouselBack, selectedProjectName]);

  const handleClose = (): void => {
    setOpenCarousel(false);
    setCarouselBack(false);
    setSelectedProjectName(null);
  };

  const openCarouselDialog = (projectName: string): void => {
    console.log(projectName);
    setSelectedProjectName(projectName);
    setOpenCarousel(true);
  };

  const dataListMenu = (item: Carousel3d): DataListMenu[] => [
    {
      MenuIcon: LaunchIcon,
      title: t('carousel2d.button_project'),
      variantTypography: 'body1',
      disabled: !item.openProject,
      clickHandler: () => openLink(item.linkProject ?? ''),
    },
    {
      MenuIcon: CastIcon,
      title: t('carousel2d.button_screenshots'),
      variantTypography: 'body1',
      disabled: false,
      clickHandler: () => openCarouselDialog(item.projectName ?? ''),
    },
    {
      MenuIcon: CastConnectedIcon,
      title: t('carousel2d.button_screenshots_back'),
      variantTypography: 'body1',
      disabled: false,
      clickHandler: () => {
        openCarouselDialog(item.projectName ?? '');
        setCarouselBack(true);
      },
    },
  ];

  const handleCarousel = () => {
    setshowCarousel(!showCarousel);
  };

  const wordsWithColors = [
    { word: t('projects.coleur1'), color: `${theme.palette.primary.main}` },
    { word: t('projects.coleur2'), color: `${theme.palette.colorOrange.main}` },
  ];
  console.log(selectedProjectName);
  console.log(DataCarousel2D);
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
        }}>
        {t('projects.title')}
      </Typography>
      <S.Title>
        <GitHubIcon color="primary" sx={{ mr: 1 }} />
        <Link underline="hover" variant="h4" target="_blank" rel="noreferrer" href="https://github.com/TinaSemashko">
          {t('projects.myGIT')}
        </Link>
      </S.Title>
      {smScreen ? (
        <ProjectsMobile />
      ) : (
        <>
          <S.StyledButtonCarousel
            label={showCarousel ? t('projects.list') : t('projects.carousel')}
            onClick={handleCarousel}
          />
          <Typography variant="h6">
            <HighlightedText phrase={t('projects.realProjects')} wordsWithColors={wordsWithColors} />
          </Typography>
          {showCarousel ? (
            <S.CarouselContainer>
              <Carousel />
            </S.CarouselContainer>
          ) : (
            <ListImages
              data={imageMapList}
              cols={lgScreen ? 2 : 3}
              gap={lgScreen ? 5 : 10}
              fontSizeDescription={fontSizeDescription}
              dataListMenu={dataListMenu}
              dialogData={{
                open: openCarousel,
                handleClose,
                dataCarousel2D,
              }}
            />
          )}
        </>
      )}
    </S.MainContainer>
  );
};

export default Projects;
