import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')`
  width: 100%;
  height: 100vh;
  background: linear-gradient(315deg, var(--primary-color-opacity), var(--secondary-color-opacity));
`;

export const CloseIconStyle = styled('div')`
  display: flex;
  justify-content: end;
  align-items: center;

  .close {
    text-transform: capitalize;
    opacity: 0;
    font-weight: 400;

    @media (max-width: 750px) {
      font-size: 4vw;
    }
  }

  &:hover .close {
    cursor: pointer;
    opacity: 1;

    -webkit-animation: slide-top 0.5s ease-out both;
    animation: slide-top 0.5s ease-out both;

    /*
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
`;

export const ListBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

export const FlexBox = styled(ListBox)`
  width: 100%;
`;

export const StyledListItemButton = styled(ListItemButton)`
  text-transform: uppercase;

  --b: 0.1em; /* the thickness of the line */
  --c: ${({ theme }) => theme.palette.colorOrange.main};
  --c1: ${({ theme }) => theme.palette.colorBlack.main};

  color: #0000;
  padding-block: var(--b);
  background: linear-gradient(var(--c) 50%, var(--c1) 0) 0% calc(100% - var(--_p, 0%)) / 100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b) no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.3s var(--_s, 0s) linear, background-size 0.3s calc(0.3s - var(--_s, 0s));

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.colorBlack.main};
    background-color: transparent;
    box-shadow: 0px 4px 4px #291e1e;
  }

  &:hover {
    --_p: 100%;
    --_s: 0.3s;
  }
`;

export const Dot = styled(ListBox)`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Social = styled(ListBox)`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
