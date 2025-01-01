import { useEffect, useState } from 'react';
import { ImageList, Link, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Carousel3d, DataListMenu } from '../../types/projects';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import Carousel from '../../shared/carousel3D/carousel3d';
import { theme } from '../../app/app';
import ProjectsMobile from './projectsMobile';
import LaunchIcon from '@mui/icons-material/Launch';
import CastIcon from '@mui/icons-material/Cast';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import ContextMenuButton from '../../shared/contextMenuButton';
import { openLink } from '../../shared/utils';
import DialogCarousel from '../../shared/dialog';
import GitHubIcon from '@mui/icons-material/GitHub';
import HighlightedText from '../../shared/highlightedText';

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

  const handleClose = (): void => {
    setOpenCarousel(false);
    setCarouselBack(false);
    setSelectedProjectName(null);
  };

  const openCarouselDialog = (projectName: string): void => {
    setSelectedProjectName(projectName);
    setOpenCarousel(true);
  };

  const dataListMenu = (item: Carousel3d): DataListMenu[] => [
    {
      MenuIcon: LaunchIcon,
      title: t('carousel2d.button_project'),
      variantTypography: 'body1',
      disabled: !item.openProject,
      clickHandler: () => openLink(item.linkProject),
    },
    {
      MenuIcon: CastIcon,
      title: t('carousel2d.button_screenshots'),
      variantTypography: 'body1',
      disabled: false,
      clickHandler: () => openCarouselDialog(item.projectName),
    },
    {
      MenuIcon: CastConnectedIcon,
      title: t('carousel2d.button_screenshots_back'),
      variantTypography: 'body1',
      disabled: false,
      clickHandler: () => {
        openCarouselDialog(item.projectName);
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
            <ImageList
              variant="masonry"
              cols={lgScreen ? 2 : 3}
              gap={lgScreen ? 5 : 10}
              sx={{
                width: '90%',
                height: '100%',
                border: 'solid',
                borderColor: 'beige.main',
                p: 1.5,
              }}>
              {imageMapList.map(item => (
                <S.StyledListItem key={item.src}>
                  <S.ThreeDotsBox>
                    <ContextMenuButton dataListMenu={dataListMenu(item)} orientation="horizontal" />
                  </S.ThreeDotsBox>
                  <S.StyledImage
                    className="styled-image"
                    commercial={item.commercial}
                    srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=248&fit=crop&auto=format`}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <S.Description className="description">
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: fontSizeDescription,
                      }}>
                      {item.projectTitre}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: fontSizeDescription,
                      }}>
                      {t(`projects.${item.projectName}`)}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: fontSizeDescription,
                      }}>
                      {item.descriptions}
                    </Typography>
                  </S.Description>
                </S.StyledListItem>
              ))}
              <DialogCarousel
                open={openCarousel}
                handleClose={handleClose}
                carouselBack={carouselBack}
                projectName={selectedProjectName || ''}
              />
            </ImageList>
          )}
        </>
      )}
    </S.MainContainer>
  );
};

export default Projects;
