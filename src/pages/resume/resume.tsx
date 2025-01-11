import { useTranslation } from 'react-i18next';
import Avatar from '../../images/avatar.jpg';
import { Helmet } from 'react-helmet';
import Divider from '@mui/material/Divider';
import { List, ListItem, Typography, useMediaQuery } from '@mui/material';
import parse from 'html-react-parser';
import { arrayExperiences, arrayEducations, arrayCompetences, arrayResume, arrayCourses } from './dataCV';
import CV_PDF from '../../images/resume.pdf';
import { theme } from '../../app/app';
import { Routes } from '../../app/routes';
import { useNavigate } from 'react-router';

import * as S from './resume.styled';
import HighlightedText from '../../shared/highlightedText';
import SocialLinks from '../../shared/socialLinks';

const fontSizeH4 = {
  xxs: '0.7rem',
  xs: '0.8rem',
  sm: '1.0rem',
  md: '1.2rem',
  lg: '1.4rem',
  xl: '1.6rem',
  xxl: '1.6rem',
};

const fontSizeH6 = {
  xxs: '0.5rem',
  xs: '0.5rem',
  sm: '0.8rem',
  md: '0.9rem',
  lg: '0.95rem',
  xl: '1rem',
  xxl: '1rem',
};

const Resume: React.FC = () => {
  const { t } = useTranslation();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const largeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const navigate = useNavigate();

  return (
    <S.MainContainer>
      <Helmet>
        <title>CV full stack développeur</title>
        <meta name="description" content="Mon CV Resume Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Mon CV, Resume , Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
      </Helmet>
      <S.MainGridContainer>
        <S.ResumeContainer>
          <S.PhotoBox>
            <S.Photo src={Avatar} alt="" />
          </S.PhotoBox>
          <S.Title>
            <Typography variant="h3" textAlign="center" sx={{ color: 'colorBlack.main' }}>
              {t('resume.name')}
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="900"
              sx={{
                color: 'primary.main',
                textShadow: '  1px 1px 0 #05174b,1px -1px 0 #05174b,-1px 1px 0 #05174b,-1px -1px 0 #05174b',
              }}>
              {t('resume.title')}
            </Typography>
          </S.Title>
          <S.ButtonCV variant="contained">
            <a href={CV_PDF} target="_blank" rel="noreferrer">
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  zIndex: '100',
                  position: 'relative',
                  color: 'primary.main',
                  textTransform: 'capitalize',
                  fontSize: fontSizeH6,
                }}>
                {t('resume.download')}
              </Typography>
            </a>
          </S.ButtonCV>
          <S.TextBox>
            <List sx={{ listStyleType: 'disc' }}>
              {arrayResume.map(item => (
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  <S.StyledTypographyResume variant="h6">
                    <HighlightedText
                      phrase={t(`resume.${item}`)}
                      highlightWords={{
                        words: t(`resume.highlitingWords`),
                        color: 'crimson',
                      }}
                    />
                  </S.StyledTypographyResume>
                </ListItem>
              ))}
            </List>
          </S.TextBox>
        </S.ResumeContainer>
      </S.MainGridContainer>
      <Divider />
      <S.FlexInformationContainer>
        <S.Line>
          <SocialLinks directionRow={true} color="secondary.main" />
        </S.Line>
        <S.GridExpCompetences>
          <S.Experience>
            <S.ExpTitle>
              <Typography variant="h3">{t('resume.experience')}</Typography>
            </S.ExpTitle>
            {arrayExperiences.map(item => (
              <S.ExpMain>
                <S.SectionDates>
                  <Typography variant="h4" fontWeight="900" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.dateEx)}
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.post)}
                  </Typography>
                </S.SectionDates>
                <S.SectionPoint>
                  <S.Circle />
                  <Divider
                    orientation="vertical"
                    sx={{
                      borderColor: 'primary.main',
                      mt: -3,
                    }}
                  />
                </S.SectionPoint>
                <S.SectionOrganisation>
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4, fontWeight: '700' }}>
                    {t(item.nameOrg)}
                  </Typography>
                  {largeScreen && <br />}
                  <Typography variant="h6" sx={{ fontSize: fontSizeH6 }}>
                    {parse(t(item.exp))}
                  </Typography>
                </S.SectionOrganisation>
              </S.ExpMain>
            ))}
          </S.Experience>
          {largeScreen && (
            <S.SectionCompetances>
              <S.ExpTitle>
                <Typography variant="h3">{t('resume.competence')}</Typography>
              </S.ExpTitle>
              <List sx={{ listStyleType: 'disc' }}>
                {arrayCompetences.map(item => (
                  <Typography variant="h5" lineHeight="1.7">
                    <ListItem disablePadding sx={{ display: 'list-item' }}>
                      {t(`competences.${item}`)}
                    </ListItem>
                  </Typography>
                ))}
              </List>
            </S.SectionCompetances>
          )}
        </S.GridExpCompetences>
      </S.FlexInformationContainer>
      {mediumScreen && (
        <S.SectionCompetances>
          <S.ExpTitle>
            <Typography variant="h3">{t('resume.competence')}</Typography>
          </S.ExpTitle>
          <List sx={{ listStyleType: 'disc' }}>
            {arrayCompetences.map(item => (
              <Typography variant="h5" lineHeight="1.7" sx={{ fontSize: fontSizeH4 }}>
                <ListItem disablePadding sx={{ display: 'list-item' }}>
                  {t(`competences.${item}`)}
                </ListItem>
              </Typography>
            ))}
          </List>
        </S.SectionCompetances>
      )}

      {largeScreen && <S.Empty />}
      <S.FlexInformationContainer>
        <S.GridEducLangueges>
          <S.Education>
            <S.ExpTitle>
              <Typography variant="h3">{t('resume.education')}</Typography>
            </S.ExpTitle>
            {arrayEducations.map(item => (
              <S.EducMain>
                <S.SectionDates>
                  <Typography variant="h4" fontWeight="900" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.dataEd)}
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.nameOrg)}
                  </Typography>
                </S.SectionDates>
                <S.SectionPoint>
                  <S.Circle />
                  <Divider
                    orientation="vertical"
                    sx={{
                      borderColor: 'primary.main',
                      mt: -3,
                    }}
                  />
                </S.SectionPoint>
                <S.SectionOrganisation>
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4, fontWeight: '700' }}>
                    {t(item.nameEd)}
                  </Typography>
                </S.SectionOrganisation>
              </S.EducMain>
            ))}
            <S.CoursesTitle>
              <Typography variant="h3">{t('education.courses')}</Typography>
            </S.CoursesTitle>
            <S.Courses>
              {arrayCourses.map(item => (
                <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                  <li>{t(`education.${item}`)}</li>
                </Typography>
              ))}
            </S.Courses>
          </S.Education>
          {largeScreen && (
            <S.SectionLangueges>
              <S.ExpTitle>
                <Typography variant="h3">{t('resume.language')}</Typography>
              </S.ExpTitle>
              <List sx={{ listStyleType: 'disc' }}>
                <Typography variant="h5" lineHeight="1.7">
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    {t('languages.en')}
                  </ListItem>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    {t('languages.fr')}
                  </ListItem>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    {t('languages.ukr')}
                  </ListItem>
                  <ListItem disablePadding sx={{ display: 'list-item' }}>
                    {t('languages.ru')}
                  </ListItem>
                </Typography>
              </List>
            </S.SectionLangueges>
          )}
        </S.GridEducLangueges>
      </S.FlexInformationContainer>
      {mediumScreen && (
        <S.SectionLangueges>
          <S.ExpTitle>
            <Typography variant="h3">{t('resume.language')}</Typography>
          </S.ExpTitle>
          <List sx={{ listStyleType: 'disc' }}>
            <Typography variant="h5" lineHeight="1.7" sx={{ fontSize: fontSizeH4 }}>
              <ListItem disablePadding sx={{ display: 'list-item' }}>
                {t('languages.en')}
              </ListItem>
              <ListItem disablePadding sx={{ display: 'list-item' }}>
                {t('languages.fr')}
              </ListItem>
              <ListItem disablePadding sx={{ display: 'list-item' }}>
                {t('languages.ukr')}
              </ListItem>
              <ListItem disablePadding sx={{ display: 'list-item' }}>
                {t('languages.ru')}
              </ListItem>
            </Typography>
          </List>
        </S.SectionLangueges>
      )}
      <S.Empty />
      <S.Hobby>
        <S.SectionHobbyMain
          onClick={() => {
            navigate(Routes.hobby);
            window.scrollTo(0, 0);
          }}>
          <S.StyledTypography variant="h3">{t('resume.hobby')}</S.StyledTypography>
        </S.SectionHobbyMain>
        <S.SectionHobby1>
          <Typography variant="h4">{t('hobby.voyages')}</Typography>
        </S.SectionHobby1>
        <S.SectionHobby2>
          <Typography variant="h4">{t('hobby.yoga')}</Typography>
        </S.SectionHobby2>
        <S.SectionHobby3>
          <Typography variant="h4">{t('hobby.bricolage')}</Typography>
        </S.SectionHobby3>
        <S.SectionHobby4>
          <Typography variant="h4">{t('hobby.lecture')}</Typography>
        </S.SectionHobby4>
        <S.SectionHobby5>
          <Typography variant="h4">{t('hobby.guitare')}</Typography>
        </S.SectionHobby5>
      </S.Hobby>
    </S.MainContainer>
  );
};

export default Resume;
