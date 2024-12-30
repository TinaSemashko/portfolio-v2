import { Menu } from '@mui/material';
import { CSSObject, Theme, styled } from '@mui/material/styles';

const ExistingStyles = ({ theme }: { theme: Theme }): CSSObject => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 210,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '2vw',
        color: theme.palette.secondary.main,
        marginRight: theme.spacing(1.5),
      },
    },
  },
  '@media (max-width: 750px)': {
    '& .MuiPaper-root': {
      width: '226px',
    },
  },
});

export const ManageList = styled(Menu)`
  ${ExistingStyles}
`;

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
