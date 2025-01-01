import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import * as S from './modalBar.styled';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  modalMessage: string;
};

const TransitionsModal: React.FC<ModalProps> = ({ open, handleClose, modalMessage }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: S.StyledBackdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <S.BoxContainer>
            <Typography variant="h4" component="h2" id="transition-modal-title">
              {modalMessage}
            </Typography>
          </S.BoxContainer>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
