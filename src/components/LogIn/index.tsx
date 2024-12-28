import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { api, setToken } from '../../config/axios'
import LoginForm from './LoginForm'
import { Typography, Grid, TextField, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () =>  {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [ loading, setLoading ] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)    

   try {
       const res = await api.post('/auth/login', {
        email: data.email,
        password: data.password
      })

      if (res.data.token) {
        setToken(res.data.token.tokenid)
        Swal.fire({
          title: t('forms.login.success'),
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })

        console.log('token', res.data.token.tokenid);
        
      }
      navigate('/dashboard')
      

    } catch (e) {
      console.error('Error logging in', e)
        
        Swal.fire({
            title: t('forms.login.errors.title'),
            text: e.response?.data?.message || t('forms.login.errors.text'),
            icon: 'error',
            showConfirmButton: false,
            timer: 2000,
        })
    } finally {
      setLoading(false)
    }    
  };

  return (
    <Box
      sx={{
        mt: '4em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 4em)',
      }}
    >
    <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" align="center">{t('forms.login.title')}</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoginForm
                onSubmit={handleSubmit(onSubmit)}
                loading={loading}
                errors={errors}
                register={register}
            />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login

function then(arg0: (res: any) => void) {
  throw new Error('Function not implemented.')
}
