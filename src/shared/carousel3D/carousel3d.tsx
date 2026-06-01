import { useEffect, useState } from 'react';
import { CircularProgress, useMediaQuery } from '@mui/material';
import { Carousel3d } from '../../types/projects';
import { imagesCarousel } from './dataCarousel';
import { theme } from '../../app/app';

import * as S from './carousel3d.styled';

interface CarouselParams {
  sidesQuantity: number;
  degKey: number;
  radius: number;
  cellsize: number;
}

const Carousel: React.FC = () => {
  const [animationPause, setAnimationPause] = useState(false);
  const [carouselParams, setCarouselParams] = useState<CarouselParams>();
  const [imageMap, setImageMap] = useState<Carousel3d[]>([]);
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const koeff = mediumScreen ? (smallScreen ? 1.3 : 1.2) : 1;
  const radius = 28 * koeff;

  const makeCarousel = (carouselParams: CarouselParams) => {
    const tempCar = imagesCarousel.map((el, index) => {
      return {
        ...el,
        alt: `Image ${index + 1}`,
        degY: index * carouselParams.degKey,
      };
    });

    setImageMap(tempCar);
  };

  useEffect(() => {
    const sidesQuantity = imagesCarousel.length;
    const paramTemp = {
      sidesQuantity: sidesQuantity,
      degKey: 360 / sidesQuantity,
      radius: radius,
      cellsize: Math.round(2 * radius * Math.tan(Math.PI / sidesQuantity)),
    };
    setCarouselParams(paramTemp);

    if (paramTemp) makeCarousel(paramTemp);
  }, [radius]);

  const sortCarousel = (clickedIndex: number) => {
    if (!carouselParams) return;

    // Reorder the currently displayed slides so the clicked one becomes index 0.
    // On pause the container snaps to rotateY(0deg), where the slide at degY 0
    // (index 0) faces front — so this centers the clicked slide.
    const reordered = [
      ...imageMap.slice(clickedIndex),
      ...imageMap.slice(0, clickedIndex),
    ];

    setImageMap(
      reordered.map((el, index) => ({
        ...el,
        alt: `Image ${index + 1}`,
        degY: index * carouselParams.degKey,
      })),
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnimationPause(prev => !prev);

    if (!animationPause) {
      const clickedIndex = Number((event.target as HTMLElement).id);
      sortCarousel(clickedIndex);
    }
  };

  return (
    <S.MainContainer carouselWith={carouselParams?.cellsize ?? 0}>
      <S.CarouselContainer isAnimationPaused={animationPause}>
        {!imageMap ? (
          <CircularProgress color="secondary" />
        ) : (
          imageMap.map((item, index) => (
            <S.Slide
              key={index}
              degY={item.degY ?? 0}
              radius={carouselParams?.radius ?? 0}
              carouselWith={carouselParams?.cellsize ?? 0}>
              <S.Picture
                carouselWith={carouselParams?.cellsize ?? 0}
                src={item.src}
                alt={item.alt || `Project ${item.projectTitre || index + 1}`}
                id={index.toString()}
                loading="lazy"
                onClick={handleClick}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && handleClick(e as unknown as React.MouseEvent<HTMLImageElement>)}
                role="button"
                aria-label={`View project: ${item.projectTitre || ''}`}
              />
              {/* <S.StyledButtonCarousel label={t('carousel3d.button_project')} onClick={() => openDescription(item)} /> */}
            </S.Slide>
          ))
        )}
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
