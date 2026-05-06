import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')`
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.palette.colorTeal.main};
    outline-offset: 2px;
  }
`;

export const Picture = styled('img')`
  border-style: ridge;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 100%;
  display: block;
`;

export const RoleBadge = styled('div')`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ theme }) => theme.palette.colorLightBlue.main};
  color: ${({ theme }) => theme.palette.colorBlue.main};
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  letter-spacing: 0.02em;
  z-index: 2;
  pointer-events: none;
`;

export const OpenIndicator = styled('div')`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  z-index: 2;
  pointer-events: none;

  & svg {
    font-size: 1.6rem;
  }
`;
