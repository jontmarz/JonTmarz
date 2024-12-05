import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, TextField, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

interface FormData {
  from_name: string;
  email_address: string;
  phone_number: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  // console.log(`Service: ${import.meta.env.VITE_SERVICE_ID}`, `Template: ${import.meta.env.VITE_TEMPLATE_ID}`, `Public Key: ${import.meta.env.VITE_PUBLIC_KEY}`)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    
    if (formRef.current) {
      
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            reset()
            setStatusMessage(t('contact.form.success'))
          },
          (error) => {
            setStatusMessage(t('contact.form.error'), error.text)
          }
        )

    } else {
      console.log('Error: Form not found');
      
    }
  }

  return (
    <Box
      component= "form"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mb: '2em', display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography component="p" gutterBottom className='text-center'>
        {t('contact.text')}
      </Typography>
    
      {/* Name field */}
      <TextField
        label={t('contact.form.name')}
        {...register('from_name', { required: true })}
        fullWidth
      />
      {errors.from_name && <Typography component="span" sx={{color: "red", fontSize: 10}}>{t('contact.form.ht.name')}</Typography>}
    
      {/* Email field */}
      <TextField
        label={t('contact.form.email')}
        {...register('email_address', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t('contact.form.ht.emailvalid')
          }
        })}
        fullWidth
      />
      {errors.email_address && <Typography component="span" sx={{color: "red", fontSize: 10}}>{t('contact.form.ht.email')}</Typography>}
    
      {/* Phone field */}
      <TextField
        label={t('contact.form.phone')}
        {...register('phone_number', {
          required: true,
          pattern: {
            value: /^[0-9]+$/,
            message: "El teléfono solo puede contener números",
          }
        })}
        fullWidth
      />
      {errors.phone_number && <Typography component="span" sx={{color: "red", fontSize: 10}}>{t('contact.form.ht.phone')}</Typography>}
    
      {/* Message field */}
      <TextField
        label={t('contact.form.message')}
        {...register('message', { required: true })}
        multiline
        rows={4}
        fullWidth
      />
      {errors.message && <Typography component="span" sx={{color: "red", fontSize: 10}}>{t('contact.form.ht.message')}</Typography>}
      
        {/* Submit button */}
      <Button variant="contained" color="primary" type="submit" sx={{ maxWidth: '150px' }}>
        {t('contact.form.button')}
      </Button>

      {/* State Message */}
      {statusMessage &&
        <Typography component="span" sx={{ color: statusMessage === t('contact.form.success') ? "#CCA70A" : "red", fontSize: 10}}>
          {statusMessage}
        </Typography>
      }
    </Box>
  );
};
  
  export default ContactForm