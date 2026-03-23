import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import watsappQr from '../../images/watsapp-qr.png';
import ContactForm from './contactForm';
import email from '../../images/email.webp';
import linkedin from '../../images/linkedin.webp';
import telegram from '../../images/telegram.webp';
import whatsapp from '../../images/whatsapp.webp';
import { useTranslation } from 'react-i18next';

import { fontSizes } from '../../constants/responsiveFontSizes';

import * as S from './contact.styled';

const fontSizeTitle = fontSizes.contactTitle;
const fontSizeContact = fontSizes.contactInfo;

const CONTACT_EMAIL = process.env.REACT_APP_EMAIL || '';
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL || '';
const TELEGRAM_URL = process.env.REACT_APP_TELEGRAM_URL || '';
const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '';

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
        <meta property="og:title" content="Contacts full stack développeur" />
        <meta property="og:description" content="Contacts Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:type" content="website" />
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
          <S.LinkSocial1 href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={email} alt="email" width="50rem" />
          </S.LinkSocial1>
          <S.TextContainer1 variant="h5" color="colorGray.main">
            --Email--
          </S.TextContainer1>
          <S.ButtonText1 href={`mailto:${CONTACT_EMAIL}`}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              {CONTACT_EMAIL}
            </Typography>
          </S.ButtonText1>

          <S.LinkSocial2 href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={linkedin} alt="linkedin" width="50rem" />
          </S.LinkSocial2>
          <S.TextContainer2 variant="h5" color="colorGray.main">
            --LinkedIn--
          </S.TextContainer2>
          <S.ButtonText2 href={LINKEDIN_URL} sx={{ gridColumn: '2', gridRow: '4' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              {LINKEDIN_URL}
            </Typography>
          </S.ButtonText2>

          <S.LinkSocial3 href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={telegram} alt="telegram" width="50rem" />
          </S.LinkSocial3>
          <S.TextContainer3 variant="h5" color="colorGray.main">
            --Telegram--
          </S.TextContainer3>
          <S.ButtonText3 href={TELEGRAM_URL} sx={{ gridColumn: '2', gridRow: '6' }}>
            <Typography
              variant="h5"
              sx={{
                color: 'secondary.main',
                textTransform: 'none',
                fontSize: fontSizeContact,
                textAlign: 'center',
              }}>
              {TELEGRAM_URL}
            </Typography>
          </S.ButtonText3>

          <S.LinkSocial4 href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <S.ImgSocial src={whatsapp} alt="whatsapp" />
          </S.LinkSocial4>
          <S.TextContainer4 variant="h5" color="colorGray.main">
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
