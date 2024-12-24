import { useEffect, useState } from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useLocation } from 'react-router';
import Carousel from '../../shared/carousel2D';
import { Carousel3d } from '../../types/projects';
import { Routes } from '../../app/routes';

import * as S from './descriptionProject.styled';

const DescriptionProduit: React.FC = () => {
  const { state } = useLocation();
  const [project, setProject] = useState<Carousel3d | null>(null);

  useEffect(() => {
    if (state && state.hasOwnProperty('cartproject') && state.cartproject.project) {
      setProject(state.cartproject.project as Carousel3d);
    }
  }, [state]);

  return (
    <S.MainContainer>
      <S.BreadcrumbsContainer>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<DoubleArrowIcon fontSize="small" sx={{ color: 'colorRed.main' }} />}>
          <Link underline="hover" color="inherit" href="/">
            <Typography variant="body2" sx={{ color: 'colorRed.main' }}>
              Home
            </Typography>
          </Link>
          <Link underline="hover" color="inherit" href={Routes.projects}>
            <Typography variant="body2" sx={{ color: 'colorRed.main' }}>
              Projects
            </Typography>
          </Link>
          <Typography variant="body2">{project?.projectName}</Typography>
        </Breadcrumbs>
      </S.BreadcrumbsContainer>
      <S.FlexBoxMain>
        <S.GridBox1Titre>
          <S.GridBox1Titre1 />
          <S.GridBox1Titre2>
            <Typography variant="h3" textAlign="left">
              {project?.projectName}
            </Typography>
          </S.GridBox1Titre2>
        </S.GridBox1Titre>
        <S.GridBox2Main>
          <S.GridBox2Main1 />
          <S.CarouselBox>
            <Carousel project={project} />
          </S.CarouselBox>
          <S.GridBox2Main2 />
        </S.GridBox2Main>
      </S.FlexBoxMain>
    </S.MainContainer>
  );
};
export default DescriptionProduit;
