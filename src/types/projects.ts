import { SvgIconTypeMap, TypographyVariant } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type Carousel3d = {
  imageName: string;
  src: string;
  descriptions: string;
  linkGit: string;
  linkProject: string;
  linkVideo: string;
  degY: number;
  alt: string;
  projectName: string;
  projectTitre: string;
  openProject: boolean;
  openGit: boolean;
  openVideo: boolean;
  imageNameList: string;
  commercial: boolean;
};

export type CarouselImg = {
  description: string;
  src: string;
  alt: string;
  general: boolean;
};

export type CarouselProjectImg = {
  imageName: string;
  description: string;
  general: boolean;
  src: string;
  alt: string;
  projectName: string;
};

export interface DataListMenu {
  MenuIcon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  title: string;
  variantTypography: TypographyVariant;
  disabled: boolean;
  clickHandler: () => void;
}
