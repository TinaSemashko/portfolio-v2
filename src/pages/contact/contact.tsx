import { Button, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { theme } from '../../app/app';
import ContactForm from './contactForm';
import email from '../../images/email.webp';
import linkedin from '../../images/linkedin.webp';
import telegram from '../../images/telegram.webp';

import * as S from './contact.styled';

const fontSizeContact = {
  xs: '0.5rem',
  sm: '0.8rem',
  md: '0.9rem',
  lg: '1rem',
  xl: '1.2rem',
};

const Contact: React.FC = () => {
  const mediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <S.MainContainer>
      <Helmet>
        <title>Contacts full stack développeur</title>
        <meta name="description" content="Contacts Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Contacts, Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
      </Helmet>
      <S.LeftContainer>
        <ContactForm />
      </S.LeftContainer>
      <S.RightContainer>
        <S.RightBackgroundContainer />
        <S.LefttBackgroundContainer />
        <S.CardBox>
          <S.Card1>
            <Button href="mailto:tina.semashko@gmail.com" sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src={email} alt="email" width="50rem" />
              <Typography
                variant="body2"
                sx={{
                  color: 'colorGrey.main',
                  textTransform: 'none',
                  fontSize: fontSizeContact,
                }}>
                tina.semashko@ {mediumScreen && <br />}gmail.com
              </Typography>
            </Button>
          </S.Card1>
          <S.Card2 />
          <S.Card3>
            <Button href="https://www.linkedin.com/in/tina-semashko/" sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src={linkedin} alt="linkedin" width="50rem" />
              <Typography
                variant="body2"
                sx={{
                  color: 'colorGrey.main',
                  textTransform: 'none',
                  fontSize: fontSizeContact,
                }}>
                @tina-semashko
              </Typography>
            </Button>
          </S.Card3>
          <S.Card4 />
          <S.Card5>
            <Button href="https://t.me/SemashkoTina" sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src={telegram} alt="telegram" width="50rem" />
              <Typography
                variant="body2"
                sx={{
                  color: 'colorGrey.main',
                  textTransform: 'none',
                  fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '0.9rem',
                    lg: '1rem',
                    xl: '1.2rem',
                  },
                }}>
                @Semashko{mediumScreen && <br />}Tina
              </Typography>
            </Button>
          </S.Card5>
          <S.Card6 />
        </S.CardBox>
      </S.RightContainer>
    </S.MainContainer>
  );
};

export default Contact;
