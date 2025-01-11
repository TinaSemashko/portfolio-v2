import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as S from './social.styled';

type Props = {
  directionRow: boolean;
  color?: string;
};

const Social: React.FC<Props> = ({ directionRow, color }) => {
  return (
    <S.SocialLinks directionRow={directionRow}>
      <IconButton
        href="https://github.com/TinaSemashko"
        title="github"
        aria-label="github"
        target="_blank"
        rel="noopener">
        <S.StyledIcon as={GitHubIcon} customcolor={color} />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/tina-semashko/"
        title="linkedin"
        aria-label="linkedin"
        target="_blank"
        rel="noopener">
        <S.StyledIcon as={LinkedInIcon} customcolor={color} />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/akateria/"
        title="facebook"
        aria-label="facebook"
        target="_blank"
        rel="noopener">
        <S.StyledIcon as={FacebookIcon} customcolor={color} />
      </IconButton>
    </S.SocialLinks>
  );
};

export default Social;
