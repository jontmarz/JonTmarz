import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import MailerLite from '@mailerlite/mailerlite-nodejs'

interface FormData {
  from_name: string
  email_address: string
  phone_number: string
  inquiry_type: string
  message: string
}

interface SubscriberData {
  email: string
  fields: {
    name: string
    last_name: string
    phone: string
    inquiry: string
    message: string
  };
  groups: string[]
}

const simulateMailerLite = async (subscriberData: SubscriberData): Promise<void> => {
  console.log('Simulating MailerLite API call with data:', subscriberData);
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Simulation complete: Subscriber added/updated successfully.');
};

export const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {
  try {
    // Asegurarse de que la petición sea POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing body' }),
      };
    }

    // Parsear los datos del formulario
    const data: FormData = JSON.parse(event.body);

    // Procesar el nombre para separar firstName y lastName
    const nameParts = data.from_name.trim().split(/\s+/);
    let firstName = '';
    let lastName = '';

    if (nameParts.length === 1) {
      firstName = nameParts[0]
    } else if (nameParts.length === 2) {
      firstName = nameParts[0]
      lastName = nameParts[1]
    } else {
      firstName = `${nameParts[0]} ${nameParts[1]}`
      lastName = nameParts.slice(2).join(' ')
    }

    // Configurar el suscriptor
    const subscriberData: SubscriberData = {
      email: data.email_address,
      fields: {
        name: firstName,
        last_name: lastName,
        phone: data.phone_number,
        inquiry: data.inquiry_type,
        message: data.message,
      },
      groups: process.env.VITE_MAILERLITE_GROUPS
        ? process.env.VITE_MAILERLITE_GROUPS.split(',').map((g) => g.trim())
        : [],
    };

    // Obtener la API key de MailerLite desde las variables de entorno
    const apiKey = process.env.VITE_MAILERLITE_API_KEY;

    if (process.env.VITE_ENVIRONMENT === 'development' || !apiKey) {
      console.warn('Missing MailerLite API key. Running in simulation mode.');
      await simulateMailerLite(subscriberData);
    } else {
      const mailerLite = new MailerLite({ api_key: apiKey });

      // Agregar o actualizar el suscriptor
      await mailerLite.subscribers.createOrUpdate(subscriberData);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscriber added successfully' }),
    };
  } catch (error: any) {
    console.error('Error en la función MailerLite:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || 'Internal Server Error',
      }),
    };
  }
};
