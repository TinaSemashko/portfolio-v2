import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import AfterSubmit from './afterSubmit';
import { useTranslation } from 'react-i18next';

import * as S from './contact.styled';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('mvoljqpq');
  const [formData, setFormData] = useState({
    email: '',
    nom: '',
    message: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    nom: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'nom') {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [name]: /^[A-Za-z]+$/.test(value) || value === '' ? '' : `${t('contact.err_name')}`,
      }));
    } else if (name === 'email') {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [name]: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || value === '' ? '' : `${t('contact.err_email')}`,
      }));
    }

    // Mettre à jour les données du formulaire
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isButtonDisabled =
    state.submitting || // Désactiver pendant la soumission
    Object.values(formData).some(value => value === '') || // Désactiver si un champ est vide
    Object.values(validationErrors).some(error => error !== '');
  if (state.succeeded) {
    return <AfterSubmit />;
  }

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        paddingTop: { xs: '4rem', sm: '4rem', md: '2rem' },
        width: { xs: '90%', sm: '80%' },
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Typography variant="h4" sx={{ color: 'chocolate.main ', fontWeight: '700' }}>
        {t('general.contact_us')}
      </Typography>

      <TextField
        sx={{
          width: '100%',
          marginTop: '1.5rem',
          border: 'solid',
          backgroundColor: 'primary.main',
          '& .MuiInputBase-root.MuiOutlinedInput-root': {
            fontSize: '1rem',
            color: 'primary.main',
          },
          '& .MuiFormLabel-root': {
            color: 'primary.main',
          },
        }}
        id="filled-size-small prenom"
        label="Email"
        name="email"
        type="text"
        size="small"
        variant="outlined"
        value={formData.email}
        onChange={handleInputChange}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: 'red' }} />
      {validationErrors.email && (
        <Typography
          variant="caption"
          sx={{
            marginTop: '0.5rem',
            color: 'red',
          }}>
          {validationErrors.email}
        </Typography>
      )}

      <TextField
        sx={{
          width: '100%',
          marginTop: '1.5rem',
          border: 'solid ',
          backgroundColor: 'primary.main',
          '& .MuiInputBase-root.MuiOutlinedInput-root': {
            fontSize: '1rem',
            color: 'primary.main',
          },
          '& .MuiFormLabel-root': {
            color: 'primary.main',
          },
        }}
        id="filled-size-small nom"
        label={t('contact.name')}
        name="nom"
        type="text"
        size="small"
        variant="outlined"
        value={formData.nom}
        onChange={handleInputChange}
      />
      <ValidationError prefix="Nom" field="nom" errors={state.errors} style={{ color: 'red' }} />
      {validationErrors.nom && (
        <Typography
          color="red"
          variant="caption"
          sx={{
            marginTop: '0.5rem',
          }}>
          {validationErrors.nom}
        </Typography>
      )}

      <TextField
        sx={{
          width: '100%',
          marginTop: '1.2rem',
          border: 'solid ',
          backgroundColor: 'primary.main',
          '& .MuiInputBase-root.MuiOutlinedInput-root': {
            fontSize: '1rem',
            color: 'primary.main',
          },
          '& .MuiFormLabel-root': {
            color: 'primary.main',
          },
        }}
        id="filled-multiline-static message"
        label={t('contact.message')}
        name="message"
        multiline
        rows={8}
        variant="outlined"
        value={formData.message}
        onChange={handleInputChange}
      />

      <Stack
        direction="row"
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}>
        <S.BtnSubmit type="submit" disabled={isButtonDisabled}>
          {t('contact.submit')}
        </S.BtnSubmit>
      </Stack>
    </Box>
  );
};

export default ContactForm;
