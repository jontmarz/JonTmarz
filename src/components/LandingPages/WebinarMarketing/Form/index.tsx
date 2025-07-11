import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, TextField, Button, Typography, Grid } from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha"
import bgForm from "../../../../assets/landingpages/bg-webinar-web-form.webp"
import Calendar from '../Calendar'

interface FormData {
    name: string
    email: string
    phone: string
}

const webinarForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [statusMessage, setStatusMessage] = useState<string | null>(null)
    const [statusCode, setStatusCode] = useState<string | null>(null)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const environment = import.meta.env.VITE_ENVIRONMENT

    // reCAPTCHA callback
    const onReCAPTCHAChange = (token: string | null) => {
        // console.log('reCAPTCHA token:', token); // Verifica si el token se genera
        setRecaptchaToken(token)
    }

    const addMake = async (data: FormData): Promise<void> => {
        // Automatización Make y Google Meet
        const makeWebhook = import.meta.env.VITE_MAKE_WEBHOOK_WEBINAR

        if (makeWebhook) {
            try {
                const res = await fetch(makeWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                }),
                });
            
                // respuesta
                const webhookResult = await res.json()
                console.log('Webhook response:', webhookResult)

            } catch (error) {
                console.error('Error al llamar al webhook:', error)
            }
        }
    }

    const addMailerLite = async (data: FormData): Promise<void> => {
        try {
            const res = await fetch('/.netlify/functions/mailerliteWebinar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json()
            setStatusMessage(result.message)
            setStatusCode(result.code)
            console.log('Resultado de MailerLite:', result)
        } catch (error) {
            console.error('Error al agregar suscriptor a MailerLite:', error)
        }
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (environment === 'production' && !recaptchaToken) {
            // if ( !recaptchaToken ) {
            setStatusMessage('Valida que no eres un Robot'); // Mensaje de error si no hay token
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
        }
        addMake(data)
        addMailerLite(data)
    }

    return (
        <Grid id="webinarForm"
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-8 bg-cover bg-center relative z-0 before:content-[''] before:absolute before:inset-0 before:bg-[#00000F]/70 before:z-[9]"
            sx={{
            backgroundImage: `url(${bgForm})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <Grid item xs={12} md={6} lg={4} className="z-[10]">
                <Box
                    component="form"
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ my: 1, display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <Typography component="h5" gutterBottom sx={{ fontWeight: 700 }}className='text-center text-[#CCA70A] text-uppercase'>
                        WEBINAR EXCLUSIVO EN LÍNEA
                    </Typography>
                    <Typography component="h2" variant="h3" gutterBottom className='text-center text-white font-bold'>
                        ¡Últimos lugares disponibles!
                    </Typography>
                    <Typography component="p" gutterBottom className='text-center text-white font-bold'>
                        No dejes pasar la oportunidad. Reserva ahora y accede a beneficios únicos.
                    </Typography>
                    <TextField
                        {...register("name", { required: true })}
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="none"
                        error={!!errors.name}
                        helperText={errors.name ? 'Campo requerido' : ''}
                    />
                    <TextField
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "El teléfono solo puede contener números",
                            },
                        })}
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        margin="none"
                        error={!!errors.phone}
                        helperText={errors.phone ? 'Campo requerido' : ''}
                    />
                    <TextField
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 
                                'El formato de correo electrónico no es válido'
                            }
                        })}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="none"
                        error={!!errors.email}
                        helperText={errors.email ? 'Campo requerido' : ''}
                    />
                    <Typography component="p" gutterBottom className='text-white font-bold'sx={{ fontSize: 12 }}>
                        Al enviar este formulario, aceptas nuestra <a href="https://jontmarz.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className='text-[#CCA70A] underline'>Política de Privacidad</a>.
                    </Typography>
                    {/* reCAPTCHA */}
                    {environment === 'production' && (
                        <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={onReCAPTCHAChange}
                        />
                    )}
                    <Button variant="contained" color="primary" type="submit" sx={{ maxWidth: '150px' }}>
                        Suscribete
                    </Button>
                    
                    {/* State Message */}
                    {statusMessage &&
                        <Typography component="span" sx={{ color: Number(statusCode) === 200 ? "#CCA70A" : "red", fontSize: 10}}>
                            { statusMessage }
                        </Typography>
                    }
                </Box>
            </Grid>
            <Grid item xs={12} className="z-[10]">
                <Calendar />
            </Grid>
        </Grid>
    )
}

    export default webinarForm