import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import { Carousel3d, CarouselProjectImg } from '../../types/projects';
import CloseIcon from '@mui/icons-material/Close';
import { openLink } from '../utils';
import DialogCarousel from '../dialog';
import { DataCarousel2D } from '../../pages/dataCarousel2D/dataCarousel2D';
import { DataCarousel2DBack } from '../../pages/dataCarousel2D/dataCarousel2Dback';

import * as S from './descriptionCarouselContainer.styled';

type Props = {
  project: Carousel3d | null;
  onCloseDescription?: () => void;
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

const DescriptionCarouselContainer: React.FC<Props> = ({ project, onCloseDescription }) => {
  const { t } = useTranslation();
  const [linkProject, setlinkProject] = useState<string | null>('');
  const [openCarousel, setOpenCarousel] = useState(false);
  const [carouselBack, setCarouselBack] = useState(false);
  const [dataCarousel2D, setDataCarousel2D] = useState<CarouselProjectImg[]>([]);

  useEffect(() => {
    if (project) {
      setlinkProject((project && project.linkProject) ?? '');
    }
  }, [project]);

  const handleClose = (): void => {
    setOpenCarousel(false);
    setCarouselBack(false);
  };

  const handleCloseFlip = (): void => {
    onCloseDescription?.();
  };

  useEffect(() => {
    const tempCar2D = carouselBack
      ? DataCarousel2DBack?.filter(el => el.projectName === project?.projectName).map(item => ({
          ...item,
          src: require(`../../images/MyProjects/Back/${item.src}`),
        }))
      : DataCarousel2D?.filter(el => el.projectName === project?.projectName).map(item => ({
          ...item,
          src: require(`../../images/MyProjects/Front/${item.src}`),
        }));

    setDataCarousel2D(tempCar2D);
  }, [carouselBack, project]);

  return (
    <S.Description>
      <CloseIcon
        sx={{
          fontSize: '2rem',
          display: { xxs: 'flex', xs: 'flex', sm: 'none', md: 'none' },
        }}
        onClick={handleCloseFlip}
      />
      <S.DiscriptionCarouselCont>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            pt: '2%',
            pb: '2%',
            width: '90%',
            color: 'secondary.main',
            fontSize: fontSizeH4,
          }}>
          {project?.projectTitre}
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            pt: '2%',
            pb: '2%',
            width: '90%',
            color: 'secondary.main',
            fontSize: fontSizeH4,
          }}>
          {t(`projects.${project?.projectName}`)}
        </Typography>
        <Button
          variant="text"
          onClick={() => openLink(linkProject ?? '')}
          disabled={!(project && project?.openProject)}
          sx={{ cursor: 'pointer' }}>
          <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4, pb: '2%', color: 'secondary.main' }}>
            {t('carousel2d.button_project')}
          </Typography>
        </Button>
        <Button
          variant="text"
          onClick={() => setOpenCarousel(true)}
          disabled={!project}
          sx={{
            cursor: 'pointer',
            display: { xxs: 'flex', xs: 'flex', sm: 'flex', md: 'none' },
            pb: '2%',
            color: 'secondary.main',
          }}>
          <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4 }}>
            {t('carousel2d.button_screenshots')}
          </Typography>
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setOpenCarousel(true);
            setCarouselBack(true);
          }}
          disabled={!project}
          sx={{
            cursor: 'pointer',
            display: { xxs: 'flex', xs: 'flex', sm: 'flex', md: 'none' },
            pb: '2%',
            color: 'secondary.main',
          }}>
          <Typography variant="h4" sx={{ cursor: 'pointer', fontSize: fontSizeH4 }}>
            {t('carousel2d.button_screenshots_back')}
          </Typography>
        </Button>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ paddingTop: '2%', width: '90%', color: 'secondary.main', fontSize: fontSizeH6 }}>
          {project?.descriptions}
        </Typography>
      </S.DiscriptionCarouselCont>
      <DialogCarousel open={openCarousel} handleClose={handleClose} dataCarousel2D={dataCarousel2D} />
    </S.Description>
  );
};

export default DescriptionCarouselContainer;
