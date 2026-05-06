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
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { openLink } from '../../shared/utils';
import GitHubIcon from '@mui/icons-material/GitHub';
import { DataCarousel2D } from '../dataCarousel2D/dataCarousel2D';
import { DataCarousel2DBack } from '../dataCarousel2D/dataCarousel2Dback';
import ListImages from '../../shared/listImages';

import { fontSizes } from '../../constants/responsiveFontSizes';

import * as S from './projects.styled';

const fontSizeDescription = fontSizes.projectDescription;

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
    const tempCar = imagesCarousel.map((el: Carousel3d) => {
      return {
        ...el,
        src: el.srcList || el.src,
      };
    });

    setImageMapList(tempCar);
  }, []);

  useEffect(() => {
    const tempCar2D = carouselBack
      ? DataCarousel2DBack?.filter(el => el.projectName === selectedProjectName)
      : DataCarousel2D?.filter(el => el.projectName === selectedProjectName);

    setDataCarousel2D(tempCar2D);
  }, [carouselBack, selectedProjectName]);

  const handleClose = (): void => {
    setOpenCarousel(false);
    setCarouselBack(false);
    setSelectedProjectName(null);
  };

  const openCarouselDialog = (projectName: string): void => {
    setSelectedProjectName(projectName);
    setOpenCarousel(true);
  };

  const dataListMenu = (item: Carousel3d): DataListMenu[] => {
    const isArchitectural = item.category === 'architectural';
    const items: DataListMenu[] = [];

    if (item.openProject) {
      items.push({
        MenuIcon: LaunchIcon,
        title: t('carousel2d.button_project'),
        variantTypography: 'body1',
        disabled: false,
        clickHandler: () => openLink(item.linkProject ?? ''),
      });
    }

    items.push({
      MenuIcon: CastIcon,
      title: t('carousel2d.button_screenshots'),
      variantTypography: 'body1',
      disabled: false,
      clickHandler: () => openCarouselDialog(item.projectName ?? ''),
    });

    if (!isArchitectural) {
      items.push({
        MenuIcon: CastConnectedIcon,
        title: t('carousel2d.button_screenshots_back'),
        variantTypography: 'body1',
        disabled: false,
        clickHandler: () => {
          openCarouselDialog(item.projectName ?? '');
          setCarouselBack(true);
        },
      });
    }

    if (item.openVideo) {
      items.push({
        MenuIcon: PlayCircleOutlineIcon,
        title: t('carousel2d.button_video'),
        variantTypography: 'body1',
        disabled: false,
        clickHandler: () => openLink(item.linkVideo ?? ''),
      });
    }

    return items;
  };

  const handleCarousel = () => {
    setshowCarousel(!showCarousel);
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
        <meta property="og:title" content="Projets full stack développeur" />
        <meta property="og:description" content="Mes projects Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Typography
        variant="h1"
        sx={{
          pb: 4,
          color: 'colorBlack.main',
        }}>
        {t('projects.title')}
      </Typography>
      <S.Title>
        <GitHubIcon sx={{ mr: 1, color: 'colorBlack.main' }} />
        <Link
          underline="hover"
          variant="h4"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TinaSemashko"
          sx={{ color: 'colorBlack.main' }}>
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
