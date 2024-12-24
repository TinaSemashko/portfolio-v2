import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../app/app';
import { useState } from 'react';

import * as S from './sertificats.styled';

const itemData = [
  {
    src: 'cert0.webp',
    alt: 'diplom',
  },
  {
    src: 'cert1.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert2.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert3.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert4.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert5.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert6.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert7.webp',
    alt: 'diplom uk',
  },
  {
    src: 'cert8.webp',
    alt: 'diplom uk',
  },
];

const Sertificats: React.FC = () => {
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownXXL = useMediaQuery(theme.breakpoints.down('xxl'));
  const [zoomedImage, setZoomedImage] = useState<boolean>(false);

  const handleImageClick = (index: number) => {
    const itemImg = document.querySelector(`#imgBox${index}`);
    const allImages = document.querySelectorAll('.imgBox');
    const body = document.querySelector('body');

    if (!zoomedImage && !matchDownSm) {
      (itemImg as HTMLElement)?.animate([{ transform: matchDownXXL ? 'scale(0.95)' : 'scale(0.7)' }], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards',
      });

      (itemImg as HTMLElement)?.setAttribute(
        'style',
        `position: fixed; top: -15%; left: 0; z-index: 100; transition: all 0.5s ease; transform-origin: center;`,
      );

      matchDownXXL &&
        (itemImg as HTMLElement)?.setAttribute(
          'style',
          `position: fixed; top: -10%; left: 0; z-index: 100; transition: all 0.5s ease; transform-origin: center;`,
        );

      matchDownMd &&
        (itemImg as HTMLElement)?.setAttribute(
          'style',
          `position: fixed; top: 20%; left: 0; z-index: 100; transition: all 0.5s ease; transform-origin: center;`,
        );

      allImages.forEach((img, imgIndex) => {
        if (imgIndex !== index) {
          (img as HTMLElement).style.opacity = '0';
          (img as HTMLElement).style.transition = 'opacity 0.5s ease';
        }
      });

      (body as HTMLElement).style.overflow = 'hidden';
    } else {
      (itemImg as HTMLElement)?.animate([{ transform: 'translate(0, 0) scale(1)' }], {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards',
      });

      (itemImg as HTMLElement)?.removeAttribute('style');

      allImages.forEach(img => {
        (img as HTMLElement).style.opacity = '1';
      });

      (body as HTMLElement).style.overflow = 'auto';
    }

    setZoomedImage(!zoomedImage);
  };

  return (
    <S.MainContainer>
      <ImageList
        cols={matchDownSm ? 1 : matchDownMd ? 2 : 3}
        gap={matchDownSm ? 10 : matchDownMd ? 20 : 50}
        sx={{ p: { xxs: 2, xs: 2, sm: 4, md: 10 } }}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.src} sx={{ cursor: 'pointer' }}>
            <img
              id={`imgBox${index}`}
              className="imgBox"
              srcSet={require(`../../images/Sertificats/${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`)}
              src={require(`../../images/Sertificats/${item.src}?w=164&h=164&fit=crop&auto=format`)}
              alt={item.alt}
              loading="lazy"
              onClick={() => handleImageClick(index)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* {!zoomedImage && <FonFooter />} */}
    </S.MainContainer>
  );
};

export default Sertificats;
