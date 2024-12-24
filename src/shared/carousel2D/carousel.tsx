import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../app/app';
import { Carousel3d } from '../../types/projects';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { DataCarousel2D } from '../../pages/descriptionProjects/dataCarousel2D';
import { DataCarousel2DBack } from '../../pages/descriptionProjects/dataCarousel2Dback';

import * as S from './carousel.styled';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GlobalStyles = createGlobalStyle`
  .slick-arrow.slick-next:before,
  .slick-arrow.slick-prev:before {
    content: "";
  }
  .slick-dots {
            display: flex !important;
            justify-content: space-evenly;
            bottom: 5vh !important;
            margin-left:-1.5vw;
            @media (max-width: 1400px) {
                 bottom: 7vh !important;
              }
            @media (max-width: 1200px) {
                 bottom: 10vh !important;
            }
            @media (max-width: 960px) {
                 bottom: 15vh !important;
                 margin-left:-2vw;
            }
        }
`;

type Props = {
  project: Carousel3d | null;
};

const fontSizeH6 = {
  xxs: '0.5rem',
  xs: '0.7rem',
  sm: '0.8rem',
  md: '0.9rem',
  lg: '0.95rem',
  xl: '1rem',
  xxl: '1rem',
};

const fontSizeH4 = {
  xxs: '0.6rem',
  xs: '0.7rem',
  sm: '1rem',
  md: '1.2rem',
  lg: '1.4rem',
  xl: '1.8rem',
  xxl: '2rem',
};

const Carousel: React.FC<Props> = ({ project }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [linkProject, setlinkProject] = useState<string | null>('');
  const [linkGit, setlinkGit] = useState<string | null>('');
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [carouselBack, setCarouselBack] = useState(false);

  const SampleNextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={true}
        style={{
          ...style,
          right: '4vw',
        }}
        onClick={onClick}>
        <S.ArrowRightIcon />
      </S.ArrowWrapper>
    );
  };

  const SamplePrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={true}
        style={{
          ...style,
          left: '4vw',
        }}
        onClick={onClick}>
        <S.ArrowLeftIcon />
      </S.ArrowWrapper>
    );
  };

  useEffect(() => {
    if (project) {
      setlinkProject(project && project.linkProject);
      setlinkGit(project && project?.linkGit);
    }
  }, [project]);

  const settings = {
    // customPaging: function (i: number) {
    //   const imageMap = carouselBack ? DataCarousel2DBack : DataCarousel2D;
    //   const selectedImage = imageMap && (imageMap[i] || imageMap[0]);
    //   const src = `${require(`../../images/MyProjects/${selectedImage?.src}`)}`;
    //   const alt = selectedImage?.alt;
    //   return (
    //     // eslint-disable-next-line jsx-a11y/anchor-is-valid
    //     <a>
    //       <img src={src} alt={alt} width="50vw" height="50vh" style={{ border: 'solid #ffffff' }} loading="lazy" />
    //     </a>
    //   );
    // },

    dots: mediumScreen ? false : false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const changerFrontCode = () => {
    setCarouselBack(!carouselBack);
  };

  const openLink = (link: string) => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const openVideo = () => {
    if (project && project?.projectName === 'TeamChallenge') openLink(project.linkVideo);
    else
      navigate(Routes.videopage, {
        state: { projectcard: { project } },
      });
  };

  return (
    <S.CarouselContainer showDescription={true}>
      <GlobalStyles />
      <S.FlexBox>
        <S.SliderBox>
          <Slider {...settings} className="Slider">
            {carouselBack
              ? DataCarousel2DBack?.filter(el => el.projectName === project?.projectName).map((item, index) => (
                  <S.ImgCarouselContainer slidesMoreOne={true} className="ImgCarouselContainer" key={index}>
                    <img src={require(`../../images/MyProjects/Back/${item.src}`)} alt={item.alt} width="100%" />
                  </S.ImgCarouselContainer>
                ))
              : DataCarousel2D?.filter(el => el.projectName === project?.projectName).map((item, index) => (
                  <S.ImgCarouselContainer slidesMoreOne={true} className="ImgCarouselContainer" key={index}>
                    <img src={require(`../../images/MyProjects/Front/${item.src}`)} alt={item.alt} width="100%" />
                  </S.ImgCarouselContainer>
                ))}
          </Slider>
        </S.SliderBox>
        <S.Description>
          <S.DiscriptionCarouselCont openABS={!carouselBack}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                pt: '2%',
                pb: '2%',
                width: '90%',
                fontSize: fontSizeH6,
              }}>
              {t(`projects.${project?.projectName}`)}
            </Typography>

            <Button
              variant="text"
              onClick={() => openLink(linkProject ?? '')}
              disabled={!(project && project?.openProject)}
              color="secondary"
              sx={{ cursor: 'pointer' }}>
              <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4 }}>
                {t('carousel2d.button_project')}
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => openLink(linkGit ?? '')}
              disabled={!(project && project?.openGit)}
              color="secondary">
              <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4 }}>
                {t('carousel2d.button_git')}
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => openVideo()}
              disabled={!(project && project?.openVideo)}
              color="secondary"
              sx={{ cursor: 'pointer' }}>
              <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4 }}>
                {t('carousel2d.button_video')}
              </Typography>
            </Button>

            <S.FlexBoxButton
              onClick={() => {
                navigate(Routes.projects);
              }}>
              <AssignmentReturnIcon />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography variant="body1" sx={{ fontSize: fontSizeH6 }}>
                {t('projects.return')}
              </Typography>
            </S.FlexBoxButton>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ paddingTop: '5%', width: '90%', color: '#a1a1a1', fontSize: fontSizeH6 }}>
              {project?.descriptions}
            </Typography>
          </S.DiscriptionCarouselCont>
          <S.ButtonSwitchABS onClick={changerFrontCode}>
            <Typography variant="h5">
              {carouselBack ? t('carousel2d.button_front') : t('carousel2d.button_code')}
            </Typography>
          </S.ButtonSwitchABS>
        </S.Description>
      </S.FlexBox>
    </S.CarouselContainer>
  );
};

export default Carousel;
