import { styled } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';

export const SocialLinks = styled('div')<{ directionRow: boolean }>(({ directionRow }) => ({
  display: 'flex',
  flexDirection: directionRow ? 'row' : 'column',
}));

export const StyledIcon = styled(SvgIcon)<{ customcolor?: string }>`
  color: ${({ customcolor, theme }) => customcolor || theme.palette.primary.main};
  font-size: 1.5rem;
`;
