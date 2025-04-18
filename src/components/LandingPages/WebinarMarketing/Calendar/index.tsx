import React from 'react'
import { Button, Typography, Paper, Box } from '@mui/material'
import { CalendarPlus } from 'lucide-react'
import { webinar } from '../../../../config/variables'

interface Speaker {
    name: string
    role?: string
    bio?: string
}

// Función para formatear la fecha como texto en español
const formatDate = (dateArray: number[]): string => {
    const [year, month, day] = dateArray
    const date = new Date(year, month -1, day)
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
};

// Función para convertir a formato ISO 8601 UTC
const getISODate = (dateArray: number[], hour: number): string => {
    const [year, month, day] = dateArray
    const date = new Date(year, month, day)
    date.setHours(hour, 0, 0, 0)
    // Colombia está en UTC-5, ajustamos a UTC
    const utcDate = new Date(date.getTime() + (5 * 60 * 60 * 1000))
    return utcDate.toISOString().replace(".000Z", "Z")
};

const AddToCalendar: React.FC = () => {
    // Asumiendo que webinar.when.date ahora es [2025, 3, 16]
    const dateArray = webinar.when.date as unknown as number[]
    const hour: number = webinar.when.time

    // Fecha formateada para mostrar: "16 de abril de 2025"
    const formattedDate: string = formatDate(dateArray)

    // Aseguramos el tipo de webinar.speakers como Speaker[]
    const speakers: Speaker[] = (webinar.speakers || []) as Speaker[];

    // Extraer información del speaker
    const speaker: Speaker = speakers[0] || { 
        name: (speakers[0] as Speaker)?.name || 'Jon Tmarz', 
        role: (speakers[0] as Speaker)?.role || 'Ingeniero de Software, Desarrollador Web y Especialista en IA', 
    }

    // Valores del webinar
    const title: string = "Lanza tu Negocio con IA y Automatiza tu Crecimiento Digital"
    const meetLink: string = webinar.meetLink || "https://meet.google.com/xxx-xxxx-xxx"
    const details: string = `
    Webinar exclusivo donde aprenderás cómo usar la IA para:
    - Crear contenidos optimizados
    - Generar contenido automatizado
    - Convertir visitantes en clientes
    
    Presentado por: ${(speaker && speaker.name) || 'Jon Tmarz'}
    
    ¡Te esperamos!
  `

    // Formato ISO para fechas (Calculado a partir del array)
    const startUTC: string = getISODate(dateArray, hour);
    const endUTC: string = getISODate(dateArray, hour + 1); // +1 hora para el final

    const startTime: string = startUTC.replace(/[-:]/g, "").replace(".000", "");
    const endTime: string = endUTC.replace(/[-:]/g, "").replace(".000", "");

    const googleCalendarURL: string = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(title)}&dates=${startTime}/${endTime}&location=${encodeURIComponent(meetLink)}&details=${encodeURIComponent(details)}`;

    return (
        <Paper
            elevation={3}
            className="text-white py-8 px-4 md:px-8 relative"
            sx={{ backgroundColor: 'transparent' }}
        >
            <Box className="max-w-3xl mx-auto text-center transform transition duration-300 hover:scale-105" sx={{ border: '1px solid #00000F',
                borderRadius: '8px', p: 2, backgroundColor: '#00000F', boxShadow: '0 0 10px 2px rgba(204, 167, 10, 0.3)' }}>
                <Typography
                    variant="h4"
                    component="h2"
                    className="font-bold text-[#CCA70A] mb-4"
                    sx={{ mb: 1 }}
                >
                    ¡No puedes perdertelo!
                </Typography>

                <Typography variant="body1" className="mb-6">
                    Guarda la fecha en tu calendario para no olvidar este importante evento:
                    <Box component="span" className="block mt-3 text-lg">
                        <strong>🗓️ { formattedDate }</strong> a las{" "}
                        <strong>⏰ {webinar.when.time}:00 hrs </strong>
                    </Box>
                </Typography>

                <Button
                    variant="contained"
                    href={googleCalendarURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<CalendarPlus />}
                    className="bg-[#F4CE2C] hover:bg-[#F4CE2C]/60 text-black px-6 py-2.5 font-semibold"
                    sx={{
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        mt: 1,
                    }}
                >
                    Agregar a mi calendario
                </Button>
            </Box>
        </Paper>
    );
};

export default AddToCalendar