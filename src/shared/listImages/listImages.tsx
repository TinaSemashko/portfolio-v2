import Typography from '@mui/material/Typography';
import ContextMenuButton from '../contextMenuButton';
import DialogCarousel from '../dialog';
import { Carousel3d, CarouselProjectImg, DataListMenu } from '../../types/projects';

import * as S from './listImages.styled';
import { useTranslation } from 'react-i18next';

type ModalProps = {
  data: Carousel3d[];
  cols?: number;
  gap?: number;
  styles?: React.CSSProperties;
  fontSizeDescription?: Record<string, string>;
  dataListMenu?: (item: Carousel3d) => DataListMenu[];
  dialogData?: {
    open: boolean;
    handleClose: () => void;
    dataCarousel2D: CarouselProjectImg[];
  };
};

const ListImages: React.FC<ModalProps> = ({
  data,
  cols = 3,
  gap = 10,
  styles,
  fontSizeDescription,
  dataListMenu,
  dialogData,
}) => {
  const { t } = useTranslation();
  return (
    <S.StyledImageList variant="masonry" cols={cols} gap={gap}>
      {data.map(item => (
        <S.StyledListItem key={item.src}>
          {dataListMenu && (
            <S.ThreeDotsBox>
              <ContextMenuButton dataListMenu={dataListMenu(item)} orientation="horizontal" />
            </S.ThreeDotsBox>
          )}
          <S.StyledImage
            className="styled-image"
            commercial={item.commercial ?? false}
            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.src}?w=248&fit=crop&auto=format`}
            alt={item.alt}
            loading="lazy"
          />
          <S.Description className="description">
            <Typography variant="body1" sx={{ fontSize: fontSizeDescription }}>
              {item.projectTitre}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: fontSizeDescription, color: 'colorOrange.main' }}>
              {t(`projects.${item.projectName}`)}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: fontSizeDescription }}>
              {item.descriptions}
            </Typography>
          </S.Description>
        </S.StyledListItem>
      ))}
      {dialogData && (
        <DialogCarousel
          open={dialogData.open}
          handleClose={dialogData.handleClose}
          dataCarousel2D={dialogData.dataCarousel2D}
        />
      )}
    </S.StyledImageList>
  );
};

export default ListImages;
