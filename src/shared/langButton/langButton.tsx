import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import lamp1 from '../../images/lamp.webp';

import * as S from './langButton.styled';

const languages: string[] = ['en', 'fr', 'uk'];
const langAlias: string[] = ['English', 'Français', 'Українська'];

type Props = {
  colorPrime: boolean;
  iconWithoutSlash?: boolean;
  selectMode: boolean;
};

export const LangButton: React.FC<Props> = ({ colorPrime, iconWithoutSlash = false, selectMode }) => {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('');
  const changeCurrentLanguage = (language: string): void => {
    i18n.changeLanguage(language).catch(error => {
      if (error instanceof Error) {
        /* eslint-disable no-console */
        console.log(error.message);
        /* eslint-enable no-console */
      }
    });
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    setSelectedLang(event.target.value as string);
    changeCurrentLanguage(newLanguage);
  };

  return (
    <S.MainContainer>
      {selectMode ? (
        <Box sx={{ width: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">
              <Typography variant="h6">{t('main.lang')}</Typography>
            </InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={selectedLang}
              label="Lang"
              onChange={handleLanguageChange}
              sx={{
                '&.MuiOutlinedInput-root': { fontSize: '1rem' },
              }}>
              {languages.map((item, index) => (
                <MenuItem value={item} key={item}>
                  <Typography variant="body1" color="textPrimary">
                    {langAlias[index]}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ) : (
        <Button
          variant="text"
          sx={{
            width: 'fit-content',
            paddingLeft: '0px',
            paddingRight: '0px',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.2rem',
            }}>
            <S.List colorPrime={colorPrime} iconWithoutSlash={iconWithoutSlash}>
              {languages.map((item, index) => (
                <li key={index}>
                  <S.LangGridContainer key={index}>
                    <S.Lamp colorPrime={colorPrime} src={lamp1} alt="" />
                    <S.LanguageButton selected={i18n.language === item} onClick={() => changeCurrentLanguage(item)}>
                      {item}
                    </S.LanguageButton>
                  </S.LangGridContainer>
                </li>
              ))}
            </S.List>
          </Typography>
        </Button>
      )}
    </S.MainContainer>
  );
};

export default LangButton;
