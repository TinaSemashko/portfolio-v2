import { useTranslation } from 'react-i18next';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import FlipCard from './flipCard';

import * as S from './projects.styled';

const ProjectsMobile: React.FC = () => {
  const { t } = useTranslation();

  imagesCarousel.map(el => {
    el.alt = t(`projects.${el.projectName}`);
    return el;
  });

  return (
    <S.MobileContainer>
      {imagesCarousel.map(item => (
        <S.PictureContainer key={item.projectName}>
          <FlipCard project={item} />
        </S.PictureContainer>
      ))}
    </S.MobileContainer>
  );
};

export default ProjectsMobile;
