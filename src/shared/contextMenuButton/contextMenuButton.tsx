import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DataListMenu } from '../../types/projects';

import * as S from './contextMenuButton.styled';

type Props = {
  dataListMenu: DataListMenu[];
  orientation?: 'vertical' | 'horizontal';
};

const ContextMenuButton: React.FC<Props> = ({ dataListMenu, orientation = 'vertical' }) => {
  const [anchorElement, setAnchorElement] = useState<null | SVGSVGElement>(null);
  const open = !!anchorElement;

  const handleClick = (event: React.MouseEvent<SVGSVGElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseModal = (): void => {
    setAnchorElement(null);
  };

  return (
    <S.ButtonContainer>
      {orientation === 'vertical' ? <MoreVertIcon onClick={handleClick} /> : <MoreHorizIcon onClick={handleClick} />}
      <S.ManageList
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorElement}
        open={open}
        onClose={handleCloseModal}>
        {dataListMenu.map(item => (
          <MenuItem
            disableRipple
            color="secondary.main"
            key={item.title}
            onClick={item.clickHandler}
            disabled={item.disabled}>
            <item.MenuIcon fontSize="large" color="secondary" />
            <Typography variant={item.variantTypography} textTransform="capitalize">
              {item.title}
            </Typography>
          </MenuItem>
        ))}
      </S.ManageList>
    </S.ButtonContainer>
  );
};

export default ContextMenuButton;
