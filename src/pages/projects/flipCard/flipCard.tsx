import AddIcon from '@mui/icons-material/Add';
import { Carousel3d } from '../../../types/projects';

import * as S from './flipCard.styled';

interface CardProps {
  project?: Carousel3d;
  onOpen?: () => void;
}

const FlipCard: React.FC<CardProps> = ({ project, onOpen }) => {
  if (!project) return null;

  const handleActivate = () => {
    onOpen?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <S.MainContainer
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.projectTitre ?? 'project'}`}>
      {project.role && <S.RoleBadge>{project.role}</S.RoleBadge>}
      <S.Picture src={project.src} alt={project.alt ?? ''} loading="lazy" />
      <S.OpenIndicator aria-hidden="true">
        <AddIcon />
      </S.OpenIndicator>
    </S.MainContainer>
  );
};

export default FlipCard;
