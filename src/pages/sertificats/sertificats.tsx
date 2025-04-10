import { useMediaQuery } from '@mui/material';
import { theme } from '../../app/app';
import { useState } from 'react';
import { Carousel3d, CarouselProjectImg } from '../../types/projects';
import DialogCarousel from '../../shared/dialog';

import * as S from './sertificats.styled';

const itemData: Carousel3d[] | CarouselProjectImg[] = [
  {
    src: require(`../../images/Sertificats/cert0.webp`),
    alt: 'diplôme vlidée',
  },
  {
    src: require(`../../images/Sertificats/cert1.webp`),
    alt: 'diplôme uk',
  },
  {
    src: require(`../../images/Sertificats/cert2.webp`),
    alt: 'diplôme fr',
  },
  {
    src: require(`../../images/Sertificats/cert3.webp`),
    alt: 'diplôme she codes plus',
  },
  {
    src: require(`../../images/Sertificats/cert4.webp`),
    alt: 'diplôme she codes react',
  },
  {
    src: require(`../../images/Sertificats/cert5.webp`),
    alt: 'diplôme she codes advanced',
  },
  {
    src: require(`../../images/Sertificats/cert6.webp`),
    alt: 'diplôme she codes responcive',
  },
  {
    src: require(`../../images/Sertificats/cert7.webp`),
    alt: 'diplôme SEO',
  },
  {
    src: require(`../../images/Sertificats/cert8.webp`),
    alt: 'diplôme bdd1',
  },
  {
    src: require(`../../images/Sertificats/cert10.webp`),
    alt: 'diplôme html',
  },
];

const Sertificats: React.FC = () => {
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [openCarousel, setOpenCarousel] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const handleClose = (): void => {
    setOpenCarousel(false);
  };

  return (
    <S.MainContainer>
      <S.StyledImageList
        cols={matchDownSm ? 1 : matchDownMd ? 2 : 3}
        gap={matchDownSm ? 5 : matchDownMd ? 5 : 20}
        sx={{ p: { xxs: 2, xs: 2, sm: 4, md: 10 } }}>
        {itemData.map((item, index) => (
          <S.StyledImageListItem key={item.src} sx={{ cursor: 'pointer' }}>
            <S.StyledImage
              id={`imgBox${index}`}
              srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?w=248&fit=crop&auto=format`}
              alt={item.alt}
              loading="lazy"
              onClick={() => {
                setInitialSlide(index);
                setOpenCarousel(true);
              }}
            />
          </S.StyledImageListItem>
        ))}
      </S.StyledImageList>
      <DialogCarousel
        open={openCarousel}
        handleClose={handleClose}
        dataCarousel2D={itemData}
        initialSlide={initialSlide}
      />
    </S.MainContainer>
  );
};

export default Sertificats;
