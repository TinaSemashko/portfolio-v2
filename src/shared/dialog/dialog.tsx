import { Dialog } from '@mui/material';
import Carousel from '../../pages/projects/carousel';
import CloseIcon from '@mui/icons-material/Close';
import { CarouselProjectImg } from '../../types/projects';

import * as S from './dialog.styled';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  dataCarousel2D: CarouselProjectImg[];
};

const DialogCarousel: React.FC<ModalProps> = ({ open, handleClose, dataCarousel2D }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <S.ColorContainer>
        <CloseIcon color="primary" sx={{ fontSize: '2rem' }} onClick={handleClose} />
      </S.ColorContainer>

      <Carousel dataCarousel2D={dataCarousel2D} />
    </Dialog>
  );
};

export default DialogCarousel;
