import { useMemo, useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import CastIcon from '@mui/icons-material/Cast';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useTranslation } from 'react-i18next';
import { Carousel3d, CarouselProjectImg } from '../../../types/projects';
import { openLink } from '../../../shared/utils';
import DialogCarousel from '../../../shared/dialog';
import { DataCarousel2D } from '../../dataCarousel2D/dataCarousel2D';
import { DataCarousel2DBack } from '../../dataCarousel2D/dataCarousel2Dback';

import * as S from './projectDetailsDialog.styled';

type Props = {
  open: boolean;
  project: Carousel3d | null;
  onClose: () => void;
};

const ProjectDetailsDialog: React.FC<Props> = ({ open, project, onClose }) => {
  const { t } = useTranslation();
  const [screenshotsOpen, setScreenshotsOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const screenshotsData: CarouselProjectImg[] = useMemo(() => {
    if (!project) return [];
    return showBack
      ? DataCarousel2DBack.filter(el => el.projectName === project.projectName)
      : DataCarousel2D.filter(el => el.projectName === project.projectName);
  }, [project, showBack]);

  const closeScreenshots = (): void => {
    setScreenshotsOpen(false);
    setShowBack(false);
  };

  const openScreenshots = (back: boolean): void => {
    setShowBack(back);
    setScreenshotsOpen(true);
  };

  if (!project) return null;

  const isArchitectural = project.category === 'architectural';
  const techTags = project.descriptions
    ?.split('|')
    .map(tag => tag.trim())
    .filter(Boolean) ?? [];

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen
        aria-label={`${project.projectTitre ?? ''} details`}>
        <S.HeaderBar>
          <IconButton onClick={onClose} aria-label="Close">
            <CloseIcon sx={{ fontSize: '2rem', color: 'secondary.main' }} />
          </IconButton>
        </S.HeaderBar>
        <S.Content>
          {project.role && <S.RoleBadge>{project.role}</S.RoleBadge>}

          <S.Title variant="h4">{project.projectTitre}</S.Title>

          {techTags.length > 0 && (
            <S.TechStack>
              {techTags.map(tag => (
                <S.Chip key={tag}>{tag}</S.Chip>
              ))}
            </S.TechStack>
          )}

          <S.Description variant="body1">
            {t(`projects.${project.projectName}`)}
          </S.Description>

          <S.Buttons>
            {!isArchitectural && (
              <S.ActionButton
                startIcon={<LaunchIcon />}
                onClick={() => openLink(project.linkProject ?? '')}
                disabled={!project.openProject}
                variant="contained">
                {t('carousel2d.button_project')}
              </S.ActionButton>
            )}
            <S.ActionButton
              startIcon={<CastIcon />}
              onClick={() => openScreenshots(false)}
              variant="contained">
              {t('carousel2d.button_screenshots')}
            </S.ActionButton>
            {!isArchitectural && (
              <S.ActionButton
                startIcon={<CastConnectedIcon />}
                onClick={() => openScreenshots(true)}
                variant="contained">
                {t('carousel2d.button_screenshots_back')}
              </S.ActionButton>
            )}
            {project.openVideo && (
              <S.ActionButton
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => openLink(project.linkVideo ?? '')}
                variant="contained">
                {t('carousel2d.button_video')}
              </S.ActionButton>
            )}
          </S.Buttons>
        </S.Content>
      </Dialog>
      <DialogCarousel
        open={screenshotsOpen}
        handleClose={closeScreenshots}
        dataCarousel2D={screenshotsData}
      />
    </>
  );
};

export default ProjectDetailsDialog;
