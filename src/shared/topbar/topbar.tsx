import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Drawer, IconButton, Typography } from '@mui/material';
import logo from '../../images/Nuvola_France_Ukraine_flags.svg.png';
import { useLocation, useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItems } from '../../constants/menuItems';
import LangButton from '../langButton';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SocialLinks from '../socialLinks';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import * as S from './topbar.styled';

const menuItemsArray = Object.values(MenuItems);
const menuIconsArray = [
  <CottageIcon />,
  <CodeIcon />,
  <WorkHistoryIcon />,
  <SchoolIcon />,
  <AccountCircleIcon />,
  <WhatsAppIcon />,
];

const fontSizeMenu = {
  xxs: '1.2rem',
  xs: '1.6rem',
  sm: '2rem',
  md: '2.3rem',
  lg: '2.4rem',
  xl: '2.7rem',
  xxl: '3rem',
};

const topMargin = {
  xxs: '30vh',
  xs: '25vh',
  sm: '30vh',
  md: '32vh',
  lg: '20vh',
  xl: '10vh',
  xxl: '5vh',
};

const TopBar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item: string): boolean => pathname.includes(item);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'colorBlack.main',
        color: 'primary.main',
        height: '100%',
        border: 'solid 1.2rem',
      }}>
      <S.CloseIconStyle>
        <Typography variant="h5" className="close">
          {t('menu.close')}
        </Typography>
        <CloseIcon sx={{ fontSize: '2rem' }} />
      </S.CloseIconStyle>

      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        {menuItemsArray.map((item, index) => (
          <ListItem key={item} disablePadding>
            <S.StyledListItemButton selected={isSelected(item)}>
              <S.Dot>{menuIconsArray[index]}</S.Dot>
              <ListItemText
                primary={t(`menu.${item}`)}
                onClick={() => navigate(Routes[item as keyof typeof Routes])}
                primaryTypographyProps={{
                  fontSize: fontSizeMenu,
                  pl: 4,
                  color: 'primary.main',
                }}
              />
            </S.StyledListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" sx={{ backgroundColor: 'primary.main', marginTop: topMargin }} />
      <S.Social>
        <SocialLinks directionRow={true} />
      </S.Social>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'transparent',
      }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="absolute"
        sx={{
          backgroundColor: 'secondary.main',
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { lg: 'none' },
            }}>
            <MenuIcon color="primary" />
          </IconButton>
          <S.FlexBox>
            <img src={logo} alt="logo" width="40vw" onClick={() => navigate(Routes.home)} />
            <S.ListBox>
              <List
                sx={{
                  display: {
                    xxs: 'none',
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex',
                  },
                }}>
                {menuItemsArray.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <S.StyledListItemButton
                      selected={isSelected(item)}
                      onClick={() => navigate(Routes[item as keyof typeof Routes])}>
                      <Typography variant="h6">{t(`menu.${item}`)}</Typography>
                    </S.StyledListItemButton>
                  </ListItem>
                ))}
              </List>
            </S.ListBox>

            <LangButton colorPrime={false} selectMode={true} />
          </S.FlexBox>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xxs: 'block',
              xs: 'block',
              sm: 'block',
              md: 'block',
              lg: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xxs: '100%', xs: '100%', sm: '60%' },
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default TopBar;
