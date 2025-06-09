import { Handler } from '@netlify/functions'
import OpenAI from 'openai'
import axios from 'axios'

// Validate environment variables at startup
const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY
const MAILERLITE_API_KEY = process.env.VITE_MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.VITE_MAILERLITE_CHATBOT_GROUP || 'ChatBot'

// Log environment variable status (without exposing actual values)
console.log('Environment variables check:', { 
  OPENAI_API_KEY: OPENAI_API_KEY ? 'Set' : 'Missing',
  MAILERLITE_API_KEY: MAILERLITE_API_KEY ? 'Set' : 'Missing',
  MAILERLITE_GROUP_ID: MAILERLITE_GROUP_ID
});

// OpenAI configuration - with validation
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  timeout: 8000, // 8 seconds timeout (Netlify functions have 10s limit)
})

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
        console.log('Intentando guardar usuario en MailerLite:', userData.email);
        
        if (!MAILERLITE_API_KEY) {
            console.error('MAILERLITE_API_KEY no está configurado');
            return null;
        }

        if(userData.email !== 'test@test.com') {
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
                    },
                    timeout: 5000 // 5 seconds timeout
                }
            )
            console.log('Respuesta de MailerLite:', response.data)
            return response.data
        }
        
    } catch (error) {
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
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }
    
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        }
    }
    
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        }
    }

    try {
        if (!event.body) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ message: 'Request body is empty' }),
            }
        }

        const { message, pageUrl, pageTitle, formPath, contactEmail, email, name }: ChatRequest = JSON.parse(event.body);
        
        console.log('Solicitud recibida:', { message, pageUrl, email })        

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ message: 'Message is required' }),
            }
        }

        if (email) {
            try {
                await saveUserToMailerLite({ email, name });
            } catch (saveError) {
                console.error('Error al guardar en MailerLite, continuando con la respuesta del chatbot:', saveError);
            }
        }

        const siteKeywords = "automatización IA, marketing digital, ingeniería de software, consultoría Jon Tmarz, curso Marketing con IA, Lanzador Digital GPT"
        const siteSummary = "John Edwin Torres, también conocido como Jon Tmarz ofrece servicios de consultoría en IA y desarrollo, cursos de inteligencia artificial para aprender a automatizar tareas, y la herramienta Lanzador Digital para marketing. El sitio contiene artículos de blog sobre estos temas y formas de contacto."

        const systemPrompt = `Eres un agente de soporte experto para el sitio web de John Edwin Torres Martínez (Jon Tmarz). El sitio trata sobre: ${siteKeywords}. Un resumen del contenido es: ${siteSummary}.
        El usuario está actualmente en la página: ${pageUrl}${pageTitle ? ` (${pageTitle})` : ''}.

        Tu misión principal es responder preguntas basándote PRIMERO en la información contextual de la página actual (${pageTitle}) si es relevante, LUEGO en el conocimiento general sobre los temas del sitio. Si la información no se encuentra en el sitio o en tu conocimiento base sobre los temas de Jon Tmarz, o si la pregunta es muy específica y requiere buscar, sugiere amablemente las opciones de contacto: formulario en ${formPath}, email a ${contactEmail}, o agendar llamada en https://calendly.com/jontmarz/30min?back=1.

        Cuando respondas, intenta referenciar (si es posible y natural) que la información proviene del sitio o de un área específica. Por ejemplo: "Según la información en la página de servicios, Jon Tmarz se especializa en..." o "En nuestro blog, encontrarás más detalles sobre..."

        SI LA PREGUNTA DEL USUARIO PUEDE SER RESPONDIDA CON INFORMACIÓN PRESENTE EN EL SITIO WEB DE JON TMARZ, PRIORITIZA ESA INFORMACIÓN.
        Si no tienes la información específica del sitio para una pregunta válida (relacionada con IA, marketing, ing. software de Jon Tmarz), usa tu conocimiento general como experto en esos campos, pero siempre en el contexto de los servicios y productos de Jon Tmarz.

        REGLAS DE CONVERSACIÓN:

        1.  **Temas Principales sobre los que PUEDES informar directamente:**
            *   **Sobre "Lanzador Digital":** Explica qué es, para qué sirve y cómo puede ayudar a los usuarios con su marketing y contenido digital. Puedes mencionar brevemente que es un GPT especializado y su URL es 'https://jontmarz.com/digital-launcher-gpt' para más detalles o para usarlo.
            *   **Automatización con IA:** Explica qué es, cómo funciona, y sus aplicaciones en marketing digital e ingeniería de software.
            *   **Sobre Jon Tmarz:** Si preguntan específicamente por Jon Tmarz o sus servicios de consultoría, puedes mencionar su experiencia y sugerir que agenden una llamada (https://calendly.com/jontmarz/30min?back=1) o usen el formulario de contacto (${formPath}) para consultas personalizadas. La información de contacto principal está en https://jontmarz.com/#contact.

        2.  **Redirecciones Específicas:**
            *   **Estrategias de marketing digital, planificación de contenidos, marca personal/empresarial, uso de herramientas digitales:** Si la pregunta es sobre *cómo hacer estas cosas o buscando consejos detallados*, redirígelos al GPT "Lanzador Digital" en 'https://jontmarz.com/digital-launcher-gpt', explicando que es la herramienta especializada para ello.
            *   **Curso de automatización con IA (Automatización de marketing con IA):** Si preguntan sobre este curso específico, dirígelos a 'https://jontmarz.com/mia-course'.

        3.  **Manejo de Preguntas Fuera de Alcance:**
            *   **NO respondas sobre:** Información personal tuya (como IA), temas inapropiados, consejos médicos/legales, o información externa no relacionada directamente con los servicios, productos o expertise de Jon Tmarz (IA, Marketing Digital, Ing. de Software).
            *   **Si una pregunta está claramente fuera de los temas mencionados arriba (temas principales y redirecciones),** responde amablemente: "Lo siento, mi especialidad es ayudarte con información sobre los servicios de Jon Tmarz, la automatización con IA, el marketing digital, y el uso de herramientas como Lanzador Digital. ¿Podrías reformular tu pregunta o consultar sobre alguno de estos temas?"

        Sé siempre profesional y busca ser lo más útil posible dentro de tu rol definido.
        El objetivo es guiar al usuario hacia los recursos correctos o el contacto adecuado.`

        if (!OPENAI_API_KEY) {
            console.error('OPENAI_API_KEY no está configurado');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ 
                    message: 'Error de configuración del servidor',
                    error: 'API key not configured'
                }),
            }
        }

        try {
            console.log('Enviando solicitud a OpenAI...');
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
            });

            console.log('Respuesta recibida de OpenAI');
            const response = completion.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta.';

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ response }),
            }
        } catch (openaiError) {
            console.error('Error al comunicarse con OpenAI:', 
                openaiError instanceof Error ? 
                {message: openaiError.message, name: openaiError.name, stack: openaiError.stack} : 
                openaiError
            );
            
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
        console.error('Error general en ChatBot:', 
            error instanceof Error ? 
            {message: error.message, name: error.name, stack: error.stack} : 
            error
        );
        
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
