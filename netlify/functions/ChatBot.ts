import { Handler } from '@netlify/functions'
import OpenAI from 'openai' // Actualización de importación
import axios from 'axios'

// OpenAI configuration - actualizada a la API más reciente
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// MailerLite configuration
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_CHATBOT_GROUP || 'ChatBot';

interface ChatRequest {
    message: string
    pageUrl: string
    pageTitle?: string
    formPath?: string
    contactEmail?: string
    email?: string
    name?: string
}

const saveUserToMailerLite = async (userData: { email: string; name?: string }) => {
    try {
        // Log para depuración
        console.log('Intentando guardar usuario en MailerLite:', userData.email);
        
        const response = await axios.post(
            'https://api.mailerlite.com/api/v2/subscribers',
            {
                email: userData.email,
                name: userData.name || '',
                groups: [MAILERLITE_GROUP_ID]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-MailerLite-ApiKey': MAILERLITE_API_KEY
                }
            }
        )
        console.log('Respuesta de MailerLite:', response.data);
        return response.data;
    } catch (error) {
        // Mejorar el logging de errores
        if (axios.isAxiosError(error)) {
            console.error('Error de Axios al guardar usuario en MailerLite:', {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message
            })
        } else {
            console.error('Error desconocido al guardar usuario en MailerLite:', error)
        }
        return null
    }
};

const handler: Handler = async (event, context) => {
    // Añadir headers CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }
    
    // Manejar solicitudes OPTIONS para CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        }
    }
    
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        }
    }

    try {
        // Verificar el body de la solicitud
        if (!event.body) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ message: 'Request body is empty' }),
            }
        }

        // Parse the incoming request body
        const { message, pageUrl, pageTitle, formPath, contactEmail, email, name }: ChatRequest = JSON.parse(event.body);
        
        console.log('Solicitud recibida:', { message, pageUrl, email });

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ message: 'Message is required' }),
            }
        }

        // Save user to MailerLite if email is provided
        if (email) {
            try {
                await saveUserToMailerLite({ email, name });
            } catch (saveError) {
                console.error('Error al guardar en MailerLite, continuando con la respuesta del chatbot:', saveError);
                // Continuamos con la funcionalidad principal aunque falle MailerLite
            }
        }

        // Create prompt based on the current page
        const systemPrompt = `Eres experta en Ingeniera de Software, Marketing Digita e Inteligencia Artificial, además eres asistente de ayuda para mi sitio web. El usuario actualmente está en la página: ${pageUrl}${pageTitle ? ` (${pageTitle})` : ''}. Proporciona ayuda información pertinente y útil basada en este contexto y responde de forma clara, amigable y con ejemplos accionables. Si no sabes la respuesta, sugiere diligenciar el formulario de contacto ${formPath}, enviar un mensaje de email a ${contactEmail} o agendar una llamada aquí: https://calendly.com/jontmarz/30min?back=1.
        REGLAS ESTRICTAS:
        - Solo responderás preguntas relacionadas con:
        * Qué es automatización con IA, cómo funciona la automatización con IA marketing digital e Ingeniería de software.
        * Si te preguntan Estrategias de marketing digital, Planificación de contenidos, definición de marca personal/empresarial o uso de herramientas digitales, los diriges al GPT "Lanzador Digital" en la url: 'https://jontmarz.com/digital-launcher-gpt'.
        * Si te preguntan sobre el curso de automatización con IA, los diriges a la url: 'https://jontmarz.com/mia-course'.
        * Si están interesados en conocer a Jon Tmarz, les sugieres que agenden una llamada o diligencien el formulario de contacto y los envías a la sección de contacto en https://jontmarz.com/#contact.


        - NO responderás preguntas sobre:
        * Información personal
        * Temas inapropiados o fuera de contexto
        * Consejos médicos o legales
        * Información externa no relacionada con marketing digital, IA o arquitectura de software
        Si el usuario pregunta algo *fuera* de estos temas, responde: "Lo siento, solo puedo ayudar con información sobre este sitio web y cómo usar el Lanzador Digital.`

        // Get response from ChatGPT - Actualizado a la API más reciente
        try {
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
            })

            const response = completion.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta.';

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ response }),
            }
        } catch (openaiError) {
            console.error('Error al comunicarse con OpenAI:', openaiError);
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    message: 'Error al comunicarse con el servicio de IA',
                    error: openaiError instanceof Error ? openaiError.message : 'Unknown OpenAI error'
                }),
            }
        }
    } catch (error) {
        console.error('Error procesando la solicitud del chatbot:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : 'Unknown error'
            }),
        }
    }
};

export { handler };
