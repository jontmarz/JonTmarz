import { Handler } from '@netlify/functions'
import axios from 'axios'

interface Event {
    httpMethod: string;
    body: string;
}

interface Response {
    statusCode: number;
    body: string;
}

interface RequestBody {
    message: string;
}

const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
    const { message }: RequestBody = JSON.parse(event.body || '{}')

    const systemPrompt = `Eres Lanzador Digital, un asistente de IA experto en ayudar a emprendedores, creadores de contenido, agencias y comunicadores. Guías para crear marca, definir audiencia y publicar contenido estratégico para destacar en el entorno digital. Responde siempre de forma clara, amigable y con ejemplos accionables. Si no sabes la respuesta, dilo con sinceridad.`

    try {
        const res = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 300,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        )

        return {
            statusCode: 200,
            body: JSON.stringify({
                response: res.data.choices[0].message.content
            })
        }

    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
        
    }
}

export { handler }