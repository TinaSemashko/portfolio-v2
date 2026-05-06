import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderBar = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.palette.colorBlue.main};
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  padding-bottom: max(2.5rem, env(safe-area-inset-bottom));
  gap: 1.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorBlue.main} 0%,
    ${({ theme }) => theme.palette.primary.main} 100%
  );
  min-height: calc(100vh - 56px);
  color: ${({ theme }) => theme.palette.secondary.main};
  overflow-y: auto;
`;

export const RoleBadge = styled('div')`
  align-self: center;
  background-color: ${({ theme }) => theme.palette.colorLightBlue.main};
  color: ${({ theme }) => theme.palette.colorBlue.main};
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
`;

export const Title = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 700;
  margin: 0;
`;

export const TechStack = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  max-width: 600px;
`;

export const Chip = styled('span')`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.colorBlue.main};
  padding: 5px 12px;
  border-radius: 14px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const Description = styled(Typography)`
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1.6;
  max-width: 620px;
  margin: 0;
`;

export const Buttons = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 380px;
  margin-top: auto;
`;

export const ActionButton = styled(Button)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.palette.colorLightBlue.main};
    color: ${({ theme }) => theme.palette.colorBlue.main};
    text-transform: uppercase;
    padding: 0.8rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.palette.secondary.main};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    justify-content: flex-start;

    &:hover {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    &.Mui-disabled {
      opacity: 0.45;
      color: ${({ theme }) => theme.palette.colorBlue.main};
      border-color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
