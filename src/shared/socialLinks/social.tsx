import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as S from './social.styled';

const Social: React.FC = () => {
  return (
    <S.SocialLinks>
      <IconButton
        href="https://github.com/TinaSemashko"
        title="github"
        aria-label="github"
        target="_blank"
        rel="noopener">
        <GitHubIcon color="secondary" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/tina-semashko/"
        title="linkedin"
        aria-label="linkedin"
        target="_blank"
        rel="noopener">
        <LinkedInIcon color="secondary" />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/akateria/"
        title="facebook"
        aria-label="facebook"
        target="_blank"
        rel="noopener">
        <FacebookIcon color="secondary" />
      </IconButton>
    </S.SocialLinks>
  );
};

export default Social;
