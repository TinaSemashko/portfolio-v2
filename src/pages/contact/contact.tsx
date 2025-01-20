import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import watsappQr from '../../images/watsapp-qr.png';
import ContactForm from './contactForm';
import email from '../../images/email.webp';
import linkedin from '../../images/linkedin.webp';
import telegram from '../../images/telegram.webp';
import whatsapp from '../../images/whatsapp.webp';
import { useTranslation } from 'react-i18next';

import * as S from './contact.styled';

const fontSizeTitle = {
  xxs: '2rem',
  xs: '3rem',
  sm: '5rem',
  md: '7rem',
  lg: '9rem',
  xl: '10rem',
  xxl: '12rem',
};

const fontSizeContact = {
  xxs: '0.9rem',
  xs: '1rem',
  sm: '1rem',
  md: '0.9rem',
  lg: '1rem',
  xl: '1.2rem',
  xxl: '1.2rem',
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

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
      <S.GridContainer>
        <S.Titre
          variant="h1"
          sx={{
            fontSize: fontSizeTitle,
          }}>
          {t('general.contact_us')}
        </S.Titre>

        <S.ColorContainer />
        <S.ButtonContainer>
          <S.LinkSocial1 href="mailto:tina.semashko@gmail.com" target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={email} alt="email" width="50rem" />
          </S.LinkSocial1>
          <S.TextContainer1 variant="h5" color="beige.main">
            --Email--
          </S.TextContainer1>
          <S.ButtonText1 href="mailto:tina.semashko@gmail.com">
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              tina.semashko@gmail.com
            </Typography>
          </S.ButtonText1>

          <S.LinkSocial2 href="https://www.linkedin.com/in/tina-semashko/" target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={linkedin} alt="linkedin" width="50rem" />
          </S.LinkSocial2>
          <S.TextContainer2 variant="h5" color="beige.main">
            --LinkedIn--
          </S.TextContainer2>
          <S.ButtonText2 href="https://www.linkedin.com/in/tina-semashko/" sx={{ gridColumn: '2', gridRow: '4' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              https://www.linkedin.com/in/tina-semashko/
            </Typography>
          </S.ButtonText2>

          <S.LinkSocial3 href="https://t.me/SemashkoTina" target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={telegram} alt="telegram" width="50rem" />
          </S.LinkSocial3>
          <S.TextContainer3 variant="h5" color="beige.main">
            --Telegram--
          </S.TextContainer3>
          <S.ButtonText3 href="https://t.me/SemashkoTina" sx={{ gridColumn: '2', gridRow: '6' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              https://t.me/SemashkoTina
            </Typography>
          </S.ButtonText3>

          <S.LinkSocial4 href="https://wa.me/33651870542" target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={whatsapp} alt="whatsapp" />
          </S.LinkSocial4>
          <S.TextContainer4 variant="h5" color="beige.main">
            --WhatsApp--
          </S.TextContainer4>
        </S.ButtonContainer>

        <S.QrContainer>
          <S.QrImg src={watsappQr} alt="whatsapp-qr" />
        </S.QrContainer>

        <S.FormContainer>
          <ContactForm />
        </S.FormContainer>
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Contact;
