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
