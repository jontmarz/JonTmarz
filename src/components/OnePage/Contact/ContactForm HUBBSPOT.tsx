import React, { useEffect, useState } from 'react'
import { Box, Typography, Alert, Link, TextField, Button, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './hsForm.css'

declare global {
  interface Window {
    hbspt: any;
  }
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const [useAlternativeForm, setUseAlternativeForm] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const scriptUrl = 'https://js.hsforms.net/forms/v2.js'

    const loadForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "49505287",
          formId: "b37bad11-5eea-4ff5-a118-0fb1f9e1c782",
          target: "#hubspotForm",
          css: '',
          cssClass: 'mi-hs-form',
          inlineEmbed: ''
        })
        return
      }
    }

    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      
      try {
        const script = document.createElement('script')
        script.src = scriptUrl
        script.async = true
        script.onload = loadForm
        script.onerror = () => {
          console.error('Failed to load HubSpot script')
          setUseAlternativeForm(true)
        }
        document.body.appendChild(script)
      } catch (error) {
        console.error('Error loading HubSpot form:', error)
        setUseAlternativeForm(true)
      }
    } else {
      loadForm()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (useAlternativeForm) {
    return (
      <Box sx={{ mb: '2em' }} className="contactForm">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              required
              name="name"
              label={t('contact.name')}
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              name="email"
              type="email"
              label={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              name="phone"
              type="tel"
              label={t('contact.phone')}
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              name="message"
              label={t('contact.message')}
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              fullWidth
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              fullWidth
            >
              {t('contact.submit')}
            </Button>
          </Stack>
        </form>
      </Box>
    )
  }

  return (
    <Box sx={{ mb: '2em' }}>
      <Typography component="p" gutterBottom className='text-center'>
        {t('contact.text')}
      </Typography>
      <div id="hubspotForm" style={{ minHeight: '400px' }} />
      <Alert severity="info" sx={{ mt: 2 }}>
        <Typography variant="body2">
          {t('contact.alternativeContact')}{' '}
          <Link href="mailto:help@jontmarz.com">
            help@jontmarz.com
          </Link>
        </Typography>
      </Alert>
    </Box>
  )
}

export default ContactForm
