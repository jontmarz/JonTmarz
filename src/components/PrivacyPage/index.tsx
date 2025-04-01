import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, FileText, Shield, Mail, HelpCircle, Lightbulb, MoveUp, Info, Cloud, Gavel, Pin, Cookie, Wrench, User, Check, Settings, Smile, Contact } from 'lucide-react'
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { dataContact } from '../../config/variables'
import Footer from '../Footer'

function Sidebar() {
  const policyItems = [
    { title: 'Introducción', icon: <Lightbulb className="w-5 h-5" />, id: 'intro' },
    { title: 'Información que Recopilamos', icon: <FileText className="w-5 h-5" />, id: 'informacion' },
    { title: 'Cómo Utilizamos Su Información', icon: <Info className="w-5 h-5" />, id: 'transferir' },
    { title: 'Compartir de Información', icon: <HelpCircle className="w-5 h-5" />, id: 'compartir' },
    { title: 'Transferencias Internacionales de Datos', icon: <MoveUp className="w-5 h-5" />, id: 'transferir' },
    { title: 'Seguridad de la Información', icon: <Shield className="w-5 h-5" />, id: 'seguridad' },
    { title: 'Retención de Datos', icon: <Cloud className="w-5 h-5" />, id: 'retencion' },
    { title: 'Sus Derechos y Opciones', icon: <Gavel className="w-5 h-5" />, id: 'opciones' },
    { title: 'Comunicaciones de Marketing', icon: <Pin className="w-5 h-5" />, id: 'comunicaciones' },
    { title: 'Política de Cookies', icon: <Cookie className="w-5 h-5" />, id: 'cookies' },
    { title: 'Servicios y Enlaces de Terceros', icon: <Wrench className="w-5 h-5" />, id: 'enlaces' },
    { title: 'Privacidad Infantil', icon: <User className="w-5 h-5" />, id: 'infantil' },
    { title: 'Cambios en Esta Política de Privacidad', icon: <Settings className="w-5 h-5" />, id: 'cambios' },
    { title: 'Legislación Aplicable', icon: <Smile className="w-5 h-5" />, id: 'legislacion' },
    { title: 'Contáctenos', icon: <Contact className="w-5 h-5" />, id: 'contacto' },
  ];

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(8px)',
        color: 'white',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        overflowY: 'auto',
      }}
    >
      <Box sx={{ p: 3 }}>
        <Bot className="w-8 h-8 text-blue-400 mx-auto mb-4" />
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'white', mb: 4 }}>
          Menu
        </Typography>
      </Box>
      <List>
        {policyItems.map((item) => (
          <ListItem
            key={item.title}
            component="a"
            href={`#${item.id}`}
            sx={{
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function PrivacyPolicy() {
  return (
    <>
    <Box className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <Sidebar />
      
      <Box sx={{ ml: '240px', p: 4 }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          <Box sx={{ color: 'white' }}>
            <Typography variant="h2" component="h1" sx={{ mb: 6, textAlign: 'center' }}>
              Política de Privacidad
            </Typography>
            
            <Box component="section" id="intro" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                1. Introducción
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 3 }}>
                Bienvenido a la Política de Privacidad de Jon Tmarz ("nosotros", "nuestro", "nos" o "Jon Tmarz"). En Jon Tmarz, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y compartimos su información cuando visita nuestro sitio web jontmarz.com ("Sitio"), utiliza nuestros servicios de consultoría o educativos, o interactúa con nosotros de cualquier otra manera.
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 3 }}>
                Al utilizar nuestro Sitio y servicios, usted acepta las prácticas descritas en esta Política de Privacidad. Le recomendamos que lea esta política cuidadosamente para comprender cómo tratamos su información personal.
              </Typography>
              
            </Box>
            
            <Box component="section" id="informacion" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                2. Información que Recopilamos
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, ml: 2 }}>
                2.1 Información proporcionada por usted
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 4 }}>
              Podemos recopilar la siguiente información que usted nos proporciona voluntariamente:
              </Typography>
              <List sx={{ ml: 5, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información de contacto:</span> Nombre, dirección de correo electrónico, número de teléfono, dirección postal, y cualquier otra información que proporcione al completar formularios en nuestro Sitio, registrarse para eventos o solicitar nuestros servicios.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información de perfil:</span> Información profesional, como su cargo, empresa, sector, intereses profesionales y experiencia cuando se registra para nuestros servicios de consultoría o educativos.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Contenido generado por el usuario:</span> Comentarios, preguntas, reseñas u otro contenido que publique en nuestro Sitio o nos envíe.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información de pago:</span> Detalles de tarjetas de crédito, información bancaria y dirección de facturación cuando realiza compras a través de nuestro Sitio (esta información es procesada directamente por nuestros proveedores de servicios de pago seguros).</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Comunicaciones:</span> Información proporcionada en correos electrónicos, chats, llamadas u otras comunicaciones con nosotros.</ListItem>
              </List>

              <Typography variant="h5" sx={{ mb: 3, ml: 2 }}>
                2.2 Información recopilada automáticamente
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 3 }}>
              Cuando visita nuestro Sitio, podemos recopilar automáticamente cierta información, como:
              </Typography>
              <List sx={{ ml: 5, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información de uso:</span> Cómo utiliza nuestro Sitio, incluyendo las páginas que visita, el tiempo que pasa en ellas, los enlaces en los que hace clic y otras acciones que realiza.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información del dispositivo:</span> Tipo de dispositivo, sistema operativo, tipo de navegador, configuración de idioma, dirección IP y otros identificadores únicos de dispositivo.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Información del dispositivo:</span>Ubicación geográfica general basada en su dirección IP.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cookies y tecnologías similares:</span> Utilizamos cookies, balizas web y tecnologías similares para recopilar información sobre su actividad, navegador y dispositivo. Para más información, consulte nuestra Política de Cookies.</ListItem>
              </List>
            </Box>

            <Box component="section" id="compartir" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                3. Cómo Utilizamos Su Información
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 3 }}>
                Utilizamos la información recopilada para los siguientes propósitos:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem>•	Proporcionar, mantener y mejorar nuestros servicios de consultoría y educativos relacionados con IA.</ListItem>
                <ListItem>•	Procesar transacciones y enviar notificaciones relacionadas con su cuenta y servicios.</ListItem>
                <ListItem>•	Personalizar su experiencia en nuestro Sitio y adaptar el contenido y las ofertas según sus intereses.</ListItem>
                <ListItem>•	Comunicarnos con usted, responder a sus consultas y proporcionarle asistencia técnica.</ListItem>
                <ListItem>•	Enviarle información promocional, boletines y materiales educativos relacionados con inteligencia artificial y desarrollo web (sujeto a sus preferencias).</ListItem>
                <ListItem>•	Gestionar y mejorar nuestro Sitio, analizar tendencias de uso y actividades de los usuarios.</ListItem>
                <ListItem>•	Proteger la seguridad e integridad de nuestro Sitio y servicios.</ListItem>
                <ListItem>•	Cumplir con obligaciones legales y proteger nuestros derechos e intereses.</ListItem>
              </List>
            </Box>

            <Box component="section" id="compartir" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                4. Compartir de Información
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Podemos compartir su información en las siguientes circunstancias:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Proveedores de servicios:</span> Compartimos información con terceros que nos ayudan a operar nuestro Sitio, conducir nuestro negocio o proporcionar servicios a usted (procesadores de pago, proveedores de hosting, servicios de correo electrónico, etc.).</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Eventos y colaboraciones: </span> Si participa en eventos, webinars o programas educativos organizados con socios, podemos compartir su información con estos socios para facilitar su participación.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cumplimiento legal:</span> Podemos divulgar su información para cumplir con la ley, procesos legales, solicitudes gubernamentales o proteger nuestros derechos legales.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Transferencias comerciales:</span> En caso de fusión, adquisición o venta de activos, su información puede ser transferida como parte de los activos comerciales.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Con su consentimiento:</span> Podemos compartir su información con terceros cuando nos da su consentimiento explícito para hacerlo.</ListItem>
              </List>
              <Typography sx={{ mb: 3, pl: 4 }}>
                No vendemos su información personal a terceros.
              </Typography>
            </Box>

            <Box component="section" id="transferir" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                5. Transferencias Internacionales de Datos
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Operamos globalmente y podemos transferir su información a países fuera de su país de residencia, incluidos países que pueden tener diferentes leyes de protección de datos. Tomamos medidas para garantizar que su información reciba un nivel adecuado de protección en los países donde la procesamos.
              </Typography>
            </Box>

            <Box component="section" id="seguridad" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                6. Seguridad de la Información
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger su información contra acceso no autorizado, pérdida, mal uso o alteración. Sin embargo, ninguna transmisión por Internet o sistema de almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
              </Typography>
            </Box>

            <Box component="section" id="retencion" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                7. Retención de Datos
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que un período de retención más largo sea requerido o permitido por ley. Los criterios utilizados para determinar nuestros períodos de retención incluyen:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem>•	La duración de nuestra relación con usted.</ListItem>
                <ListItem>•	Obligaciones legales a las que estamos sujetos.</ListItem>
                <ListItem>•	Recomendaciones de autoridades de protección de datos.</ListItem>
                <ListItem>•	Nuestros intereses comerciales legítimos.</ListItem>
              </List>
            </Box>

            <Box component="section" id="opciones" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                8. Sus Derechos y Opciones
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Dependiendo de su ubicación, puede tener ciertos derechos respecto a su información personal, incluyendo:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Acceso:</span> Solicitar acceso a la información personal que tenemos sobre usted.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Rectificación: </span> Solicitar la corrección de información incorrecta o incompleta.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Eliminación:</span> Solicitar la eliminación de su información personal bajo ciertas circunstancias.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Portabilidad de datos</span> Solicitar la transferencia de su información a usted o a un tercero.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Oposición:</span> Oponerse al procesamiento de su información personal para ciertos propósitos.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Retirar el consentimiento:</span> Retirar su consentimiento en cualquier momento cuando el procesamiento se base en su consentimiento.</ListItem>
              </List>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Para ejercer estos derechos, póngase en contacto con nosotros utilizando la información proporcionada en la sección "Contáctenos". Si es residente en la Unión Europea, también tiene derecho a presentar una queja ante una autoridad de protección de datos.
              </Typography>
            </Box>

            <Box component="section" id="comunicaciones" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                9. Comunicaciones de Marketing
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Puede optar por no recibir comunicaciones de marketing en cualquier momento haciendo clic en el enlace "cancelar suscripción" en nuestros correos electrónicos o poniéndose en contacto con nosotros directamente. Tenga en cuenta que incluso si opta por no recibir comunicaciones de marketing, aún podemos enviarle mensajes relacionados con el servicio.
              </Typography>
            </Box>

            <Box component="section" id="cookies" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                10. Política de Cookies
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Utilizamos cookies y tecnologías similares para recopilar información sobre su actividad en nuestro Sitio. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro Sitio. Puede configurar su navegador para rechazar todas las cookies o para indicarle cuando se está enviando una cookie. Sin embargo, algunas funciones de nuestro Sitio pueden no funcionar correctamente sin cookies.
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2, fontWeight: 'bold' }}>
                Tipos de cookies que utilizamos:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cookies esenciales:</span> SNecesarias para el funcionamiento del Sitio.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cookies de rendimiento:</span> Nos ayudan a entender cómo interactúan los visitantes con nuestro Sitio.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cookies de funcionalidad:</span> Permiten recordar sus elecciones y proporcionar funciones personalizadas.</ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Cookies de publicidad/seguimiento:</span> Utilizadas para ofrecer publicidad relevante y rastrear su actividad en internet.</ListItem>
              </List>
            </Box>

            <Box component="section" id="enlaces" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                11. Servicios y Enlaces de Terceros
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Nuestro Sitio puede contener enlaces a sitios web de terceros o integrar servicios proporcionados por terceros (como botones de redes sociales, herramientas de IA o servicios de pago). Estas terceras partes pueden recopilar información sobre usted cuando interactúa con sus servicios. No controlamos estos sitios o servicios de terceros, y no somos responsables de sus prácticas de privacidad. Le recomendamos que revise las políticas de privacidad de cualquier sitio web o servicio que visite.
              </Typography>
            </Box>

            <Box component="section" id="infantil" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                12. Privacidad de los Niños
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Nuestro Sitio no está dirigido a niños menores de 16 años y no recopilamos intencionalmente información personal de niños. Si cree que hemos recopilado información de un niño menor de 16 años, póngase en contacto con nosotros para eliminar dicha información.
              </Typography>
            </Box>

            <Box component="section" id="cambios" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                13. Cambios en Esta Política de Privacidad
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de información o requisitos legales. La versión más reciente estará disponible en nuestro Sitio con la fecha de "Última actualización". Le recomendamos que revise esta política periódicamente para mantenerse informado sobre cómo protegemos su información.
              </Typography>
            </Box>

            <Box component="section" id="legislacion" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                14. Legislación Aplicable
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Esta Política de Privacidad se rige por las leyes del [país donde está registrado tu negocio], sin tener en cuenta sus disposiciones sobre conflictos de leyes.
              </Typography>
            </Box>

            <Box component="section" id="contacto" sx={{ mb: 6, scrollMarginTop: '2rem' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                15. Contáctenos
              </Typography>
              <Typography sx={{ color: 'gray.300', mb: 2, ml: 2 }}>
                Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o el procesamiento de su información personal, póngase en contacto con nosotros en:
              </Typography>
              <List sx={{ pl: 4, color: 'gray.300' }}>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Correo electrónico: </span><Link to={`mailto:${dataContact.email}`}>{dataContact.email}</Link></ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	WhatsApp:</span> <Link to={`https://wa.me/${dataContact.wa}`} target="_blank" rel="noopener noreferrer">Jon Tmarz</Link></ListItem>
                <ListItem sx={{display: "block"}}><span className="font-bold text-white">•	Formulario de contacto:</span> <Link to="/#contact">Contacto</Link></ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
    <Footer />
    </>
  );
}

export default PrivacyPolicy