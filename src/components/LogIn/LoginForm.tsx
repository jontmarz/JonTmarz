import React from 'react'
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Typography, TextField, Grid, Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

type FormData = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  loading: boolean
  errors: FieldErrors<FormData>
  register: UseFormRegister<FormData>
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, errors, register }) => {
    const { t } = useTranslation()

    return (
        <Box
            onSubmit={onSubmit}
            component="form"
            className="login"
            sx={{ display: 'grid', grap: 2, width: { xs: '100%', md: '80%'} }}
          >
            {/* Username */}
            <TextField
              type="email"
              label={t('forms.login.email')}
              variant="outlined"
              className="email"
              sx={{ mb: 3 }}
              {...register("email", { required: true })}
              error={!!errors.email}
              helperText={errors.email && t('forms.login.errors.email')}
            />

            {/* Password */}
            <TextField
              type="password"
              label={t('forms.login.password')}
              variant="outlined"
              className="password"
              {...register("password", { required: true })}
              error={!!errors.password}
              helperText={errors.password && t('forms.login.errors.password')}
            />
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                >
                  {t('forms.login.submit')}
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Button
                  variant="contained"
                  color="secondary"
                >
                  <Link to="/signup">{t('forms.login.signup')}</Link>
                </Button> */}
              </Grid>
            </Grid>
        </Box>
    )
}

export default LoginForm