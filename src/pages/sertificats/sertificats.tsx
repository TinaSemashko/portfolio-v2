import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { theme } from '../../app/app';
import { useState } from 'react';
import { Carousel3d, CarouselProjectImg } from '../../types/projects';
import DialogCarousel from '../../shared/dialog';

import cert0 from '../../images/Sertificats/cert0.webp';
import cert1 from '../../images/Sertificats/cert1.webp';
import cert2 from '../../images/Sertificats/cert2.webp';
import cert3 from '../../images/Sertificats/cert3.webp';
import cert4 from '../../images/Sertificats/cert4.webp';
import cert5 from '../../images/Sertificats/cert5.webp';
import cert6 from '../../images/Sertificats/cert6.webp';
import cert7 from '../../images/Sertificats/cert7.webp';
import cert8 from '../../images/Sertificats/cert8.webp';
import cert10 from '../../images/Sertificats/cert10.webp';

import * as S from './sertificats.styled';

const itemData: Carousel3d[] | CarouselProjectImg[] = [
  { src: cert0, alt: 'diplôme vlidée' },
  { src: cert1, alt: 'diplôme uk' },
  { src: cert2, alt: 'diplôme fr' },
  { src: cert3, alt: 'diplôme she codes plus' },
  { src: cert4, alt: 'diplôme she codes react' },
  { src: cert5, alt: 'diplôme she codes advanced' },
  { src: cert6, alt: 'diplôme she codes responcive' },
  { src: cert7, alt: 'diplôme SEO' },
  { src: cert8, alt: 'diplôme bdd1' },
  { src: cert10, alt: 'diplôme html' },
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
      <Helmet>
        <title>Certificats et diplômes</title>
        <meta name="description" content="Certificats et diplômes - Full-stack développeur web Il-de-France" />
        <meta property="og:title" content="Certificats et diplômes" />
        <meta property="og:description" content="Certificats et diplômes - Full-stack développeur web Il-de-France" />
        <meta property="og:type" content="website" />
      </Helmet>
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
