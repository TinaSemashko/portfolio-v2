import Slider from 'react-slick';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../../app/app';
import { DataCarousel2D } from '../../descriptionProjects/dataCarousel2D';
import { DataCarousel2DBack } from '../../descriptionProjects/dataCarousel2Dback';
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
  projectName?: string;
  back?: boolean;
};

const Carousel: React.FC<Props> = ({ projectName, back }) => {
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const SampleNextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;

    return (
      <S.ArrowWrapper
        className={className}
        style={{
          ...style,
          right: mediumScreen ? '8vw' : '-8vw',
        }}
        onClick={onClick}>
        <ArrowForwardIosIcon />
      </S.ArrowWrapper>
    );
  };

  const SamplePreviosArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;

    return (
      <S.ArrowWrapper
        className={className}
        style={{
          ...style,
          left: mediumScreen ? '8vw' : '-8vw',
        }}
        onClick={onClick}>
        <ArrowBackIosNewIcon />
      </S.ArrowWrapper>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePreviosArrow />,
  };

  return (
    <S.CarouselContainer>
      <GlobalStyles />
      <S.FlexBox>
        <S.SliderBox>
          <Slider {...settings} className="Slider">
            {back
              ? DataCarousel2DBack?.filter(el => el.projectName === projectName).map((item, index) => (
                  <S.ImgCarouselContainer className="ImgCarouselContainer" key={index}>
                    <img src={require(`../../../images/MyProjects/Back/${item.src}`)} alt={item.alt} width="100%" />
                  </S.ImgCarouselContainer>
                ))
              : DataCarousel2D?.filter(el => el.projectName === projectName).map((item, index) => (
                  <S.ImgCarouselContainer className="ImgCarouselContainer" key={index}>
                    <img src={require(`../../../images/MyProjects/Front/${item.src}`)} alt={item.alt} width="100%" />
                  </S.ImgCarouselContainer>
                ))}
          </Slider>
        </S.SliderBox>
      </S.FlexBox>
    </S.CarouselContainer>
  );
};

export default Carousel;
