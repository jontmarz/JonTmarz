import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import MailerLite from "@mailerlite/mailerlite-nodejs"
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, TextField, Button, Typography } from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha"
import { useTranslation } from 'react-i18next'

interface FormData {
  from_name: string;
  email_address: string;
  phone_number: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const { t } = useTranslation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const environment = import.meta.env.VITE_ENVIRONMENT

  // reCAPTCHA callback
  const onReCAPTCHAChange = (token: string | null) => {
    // console.log('reCAPTCHA token:', token); // Verifica si el token se genera
    setRecaptchaToken(token);
  };

  const addMailerLite = async (data: FormData): Promise<void> => {
    const apiKey = import.meta.env.VITE_MAILERLITE_API_KEY;
  
    // Inicializar MailerLite
    const mailerLite = new MailerLite({ api_key: apiKey });
  
    // Dividir el nombre completo en palabras
    const nameParts = data.from_name.trim().split(/\s+/);
    let firstName = '';
    let lastName = '';
  
    switch (nameParts.length) {
      case 1:
        firstName = nameParts[0];
        lastName = '';
        break;
      case 2:
        firstName = nameParts[0];
        lastName = nameParts[1];
        break;
      case 3:
        firstName = `${nameParts[0]} ${nameParts[1]}`;
        lastName = nameParts[2];
        break;
      default:
        firstName = `${nameParts[0]} ${nameParts[1]}`;
        lastName = nameParts.slice(2).join(' ');
        break;
    }
  
    const subscriberData = {
      email: data.email_address,
      fields: {
        name: firstName,
        last_name: lastName,
        phone: data.phone_number,
      },
      groups: [] as string[],
    }

    // Agregar el grupo de suscriptores al que se quiere unir el suscriptor
    const groupIds = import.meta.env.VITE_MAILERLITE_GROUPS.split(',')
    for (const groupId of groupIds) {
      if (groupId.trim() !== '') {
        subscriberData.groups.push(groupId.trim())
      }
    }
  
    try {
      // Agregar el suscriptor a cada grupo
        await mailerLite.subscribers.createOrUpdate(subscriberData)
        // console.log(`Subscriber added to groups: ${subscriberData.groups.join(', ')}`);
      
    } catch (error) {
      console.error('Error adding subscriber to MailerLite:', error)
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if ( environment === 'production' && !recaptchaToken ) {
    // if ( !recaptchaToken ) {
      setStatusMessage(t('contact.form.ht.recaptcha')); // Mensaje de error si no hay token
      return
    }

    // Agregar el token de reCAPTCHA al formulario como un campo oculto
    if (formRef.current) {
      
      if (environment === 'production') {
        let recaptchaInput: HTMLInputElement | string = ''
        recaptchaInput = document.createElement('input')
        recaptchaInput.type = 'hidden'
        recaptchaInput.name = 'g-recaptcha-response'
        recaptchaInput.value = recaptchaToken || ''

        formRef.current.appendChild(recaptchaInput)
      }

      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            reset();
            setStatusMessage(t('contact.form.success'));

            // Llamar a addMailerLite después de un envío exitoso
            addMailerLite(data)

            if (recaptchaRef.current) {
              recaptchaRef.current.reset();
            }
            setRecaptchaToken(null);
          },
          (error) => {
            setStatusMessage(`${t('contact.form.error')}: ${error.text}`);
          }
        )
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

      {/* reCAPTCHA */}
      {environment === 'production' && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
      )}
      
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