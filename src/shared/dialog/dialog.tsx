import { Dialog } from '@mui/material';
import Carousel from '../../pages/projects/carousel';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './dialog.styled';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  projectName: string;
  carouselBack: boolean;
};

const DialogCarousel: React.FC<ModalProps> = ({ open, handleClose, projectName, carouselBack }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <S.ColorContainer>
        <CloseIcon color="primary" sx={{ fontSize: '2rem' }} onClick={handleClose} />
      </S.ColorContainer>

      <Carousel projectName={projectName} back={carouselBack} />
    </Dialog>
  );
};

export default DialogCarousel;
