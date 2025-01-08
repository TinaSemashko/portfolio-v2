import { styled } from '@mui/material/styles';

export const SocialLinks = styled('div')<{ directionRow: boolean }>(({ directionRow }) => ({
  display: 'flex',
  flexDirection: directionRow ? 'row' : 'column',
}));
