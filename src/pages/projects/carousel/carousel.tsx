import { useState } from 'react';
import Slider from 'react-slick';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { CarouselProjectImg } from '../../../types/projects';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
`;

type Props = {
  dataCarousel2D: CarouselProjectImg[];
  initialSlide?: number;
};

const SampleNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <S.ArrowWrapper
      className={className}
      style={{ ...style, right: '1.5vw' }}
      onClick={onClick}>
      <ArrowForwardIosIcon />
    </S.ArrowWrapper>
  );
};

const SamplePreviousArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <S.ArrowWrapper
      className={className}
      style={{ ...style, left: '1.5vw' }}
      onClick={onClick}>
      <ArrowBackIosNewIcon />
    </S.ArrowWrapper>
  );
};

const Carousel: React.FC<Props> = ({ dataCarousel2D, initialSlide }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(initialSlide ?? 0);

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true as const,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialSlide ?? 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviousArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const currentItem = dataCarousel2D[currentSlide];
  const caption = currentItem?.description
    ? t(currentItem.description, { defaultValue: '' })
    : '';

  return (
    <S.CarouselContainer>
      <GlobalStyles />
      <S.SliderBox>
        <Slider {...settings} className="Slider">
          {dataCarousel2D?.map((item, index) => (
            <S.ImgCarouselContainer className="ImgCarouselContainer" key={index}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </S.ImgCarouselContainer>
          ))}
        </Slider>
      </S.SliderBox>
      {caption && <S.Caption>{caption}</S.Caption>}
    </S.CarouselContainer>
  );
};

export default Carousel;
