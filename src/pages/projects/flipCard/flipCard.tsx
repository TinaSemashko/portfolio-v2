import React, { useState } from 'react';
import DescriptionCarouselContainer from '../../../shared/descriptionCarouselContainer';
import { Carousel3d } from '../../../types/projects';

import * as S from './flipCard.styled';

interface CardProps {
  project?: Carousel3d;
}

const FlipCard: React.FC<CardProps> = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  const flipOpen = () => {
    setFlipped(true);
  };

  const flipClose = () => {
    setFlipped(false);
  };

  const handleClose = () => {
    setFlipped(false);
  };

  return (
    <S.MainContainer
      onMouseEnter={flipOpen}
      onTouchStart={flipOpen}
      onMouseOut={flipClose}
      onTouchEnd={flipClose}
      flipped={flipped}>
      <S.Front>
        <S.Picture src={project?.src} alt={project?.alt} />
      </S.Front>
      <S.Back>
        <DescriptionCarouselContainer project={project ?? null} onCloseDescription={handleClose} />
      </S.Back>
    </S.MainContainer>
  );
};

export default FlipCard;
