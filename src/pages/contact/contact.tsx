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
  md: '10rem',
  lg: '12rem',
  xl: '14rem',
  xxl: '16rem',
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
          <S.ImgSocial1 src={email} alt="email" width="50rem" />
          <S.TextContainer1 variant="h5" color="secondary">
            Email
          </S.TextContainer1>
          <S.ButtonText1 href="mailto:tina.semashko@gmail.com">
            <Typography
              variant="h5"
              sx={{
                color: 'colorBlack.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              tina.semashko@gmail.com
            </Typography>
          </S.ButtonText1>

          <S.ImgSocial2 src={linkedin} alt="linkedin" width="50rem" />
          <S.TextContainer2 variant="h5" color="secondary">
            LinkedIn
          </S.TextContainer2>
          <S.ButtonText2 href="https://www.linkedin.com/in/tina-semashko/" sx={{ gridColumn: '2', gridRow: '4' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'colorBlack.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              https://www.linkedin.com/in/tina-semashko/
            </Typography>
          </S.ButtonText2>

          <S.ImgSocial3 src={telegram} alt="telegram" width="50rem" />
          <S.TextContainer3 variant="h5" color="secondary">
            Telegram
          </S.TextContainer3>
          <S.ButtonText3 href="https://t.me/SemashkoTina" sx={{ gridColumn: '2', gridRow: '6' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'colorBlack.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              https://t.me/SemashkoTina
            </Typography>
          </S.ButtonText3>
          <S.ImgSocial4 src={whatsapp} alt="whatsapp" />
          <S.TextContainer4 variant="h5" color="secondary">
            WhatsApp
          </S.TextContainer4>
        </S.ButtonContainer>
        <S.QrContainer>
          {' '}
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
