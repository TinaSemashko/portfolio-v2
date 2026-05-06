import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import { Carousel3d } from '../../types/projects';
import FlipCard from './flipCard';
import ProjectDetailsDialog from './projectDetailsDialog';

import * as S from './projects.styled';

const ProjectsMobile: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Carousel3d | null>(null);

  const projects = imagesCarousel.map(el => ({
    ...el,
    alt: t(`projects.${el.projectName}`),
  }));

  return (
    <>
      <S.MobileContainer>
        {projects.map(item => (
          <S.PictureContainer key={item.projectName}>
            <FlipCard project={item} onOpen={() => setSelectedProject(item)} />
          </S.PictureContainer>
        ))}
      </S.MobileContainer>
      <ProjectDetailsDialog
        open={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsMobile;
