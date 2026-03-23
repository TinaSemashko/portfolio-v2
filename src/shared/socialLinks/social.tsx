import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as S from './social.styled';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || '';
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || '';
const FACEBOOK_URL = process.env.REACT_APP_FACEBOOK_URL || '';

type Props = {
  directionRow: boolean;
  color?: string;
};

const Social: React.FC<Props> = ({ directionRow, color }) => {
  return (
    <S.SocialLinks directionRow={directionRow}>
      <IconButton
        href={GITHUB_URL}
        title="github"
        aria-label="github"
        target="_blank"
        rel="noopener">
        <S.StyledIcon as={GitHubIcon} customcolor={color} />
      </IconButton>
      <IconButton
        href={LINKEDIN_URL}
        title="linkedin"
        aria-label="linkedin"
        target="_blank"
        rel="noopener">
        <S.StyledIcon as={LinkedInIcon} customcolor={color} />
      </IconButton>
      <IconButton
        href={FACEBOOK_URL}
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
