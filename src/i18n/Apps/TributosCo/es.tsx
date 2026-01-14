export default {
    navbar: {
        home: 'Inicio',
        whatIs: '¿Qué es?',
        whyUse: '¿Por qué usarlo?',
        howToUse: 'Cómo usarlo',
        nextPackages: 'Próximos paquetes',
        about: 'Sobre el autor',
    },
    hero: {
        title: 'Tributos Co',
        subtitle: 'Es un paquete npm diseñado para automatizar cálculos laborales y fiscales en Colombia, ofreciendo una solución modular que brinda a desarrolladores y empresas la precisión, rapidez y cumplimiento normativo necesarios para gestionar salarios, recargos y aportes de manera confiable y eficiente.',
        btn1: 'Ver en npm',
        btn2: 'Ver documentación',
    },
    whatIs: {
        title: 'tributos-co – Cálculos laborales colombianos en una sola línea',
        subtitle: '¿Qué es?',
        description: 'Es un paquete npm que encapsula los cálculos más comunes del sistema laboral colombiano, incluyendo:',
        features: [
            {
                id: 'net-salary',
                title: 'Salario neto y bruto',
                description: 'Cálculo preciso de salario neto después de deducciones y salario bruto con todas las prestaciones.',
            },
            {
                id: 'extra-hours',
                title: 'Horas extras y recargos',
                description: 'Horas extras diurnas, nocturnas, recargos nocturnos, dominicales y festivos según la normativa.',
            },
            {
                id: 'social-benefits',
                title: 'Prestaciones sociales',
                description: 'Prima, cesantías, intereses sobre cesantías y vacaciones calculados automáticamente.',
            },
            {
                id: 'social-security',
                title: 'Seguridad social y parafiscales',
                description: 'Aportes a salud, pensión, ARL, caja de compensación, ICBF y SENA.',
            },
            {
                id: 'withholding',
                title: 'Retención en la fuente',
                description: 'Cálculo de retención en la fuente con deducciones permitidas por ley.',
            },
        ],
        audienceTitle: '¿Para quién es útil?',
        audiences: [
            {
                id: 'developers',
                title: 'Desarrolladores',
                description: 'Que construyen sistemas de nómina, RRHH o facturación.',
            },
            {
                id: 'startups',
                title: 'Startups',
                description: 'Que necesitan automatizar pagos laborales.',
            },
            {
                id: 'consultants',
                title: 'Consultores',
                description: 'Que requieren cálculos rápidos y confiables.',
            },
        ],
    },
    whyUse: {
        title: '¿Por qué usarlo?',
        features: [
            {
                id: 'typescript',
                title: 'TypeScript Completo',
                description: 'Tipado fuerte para evitar errores en cálculos financieros.',
            },
            {
                id: 'updated',
                title: 'Normativa Actualizada 2026',
                description: 'Recargo dominical/festivo del 80% y jornada laboral reducida desde julio 2026.',
            },
            {
                id: 'validations',
                title: 'Validaciones Incluidas',
                description: 'Salario mínimo, auxilio de transporte, salario integral y deducciones.',
            },
            {
                id: 'flexible',
                title: 'Jornada Flexible',
                description: 'Ajuste automático de horas mensuales según la Ley 2101 de 2021.',
            },
            {
                id: 'combinations',
                title: 'Todas las Combinaciones',
                description: 'Extra diurna, extra nocturna, dominical, extra diurna dominical, extra nocturna dominical.',
            },
            {
                id: 'social-benefits',
                title: 'Prestaciones Completas',
                description: 'Cesantías, prima, intereses sobre cesantías y vacaciones.',
            },
        ],
    },
    howToUse: {
        title: 'Cómo usarlo',
        installation: {
            title: 'Instalación',
            command: 'npm install tributos-co',
        },
        examples: [
            {
                id: 'ordinary-hour',
                title: 'Calcular Hora Ordinaria',
                description: 'Obtén el valor de la hora ordinaria basado en el salario mensual.',
                code: `import { calcularHoraOrdinaria } from 'tributos-co'

const salario = 1750905; // SMLMV 2026
const valorHora = calcularHoraOrdinaria(salario)
console.log(valorHora); // 7958.66`,
            },
            {
                id: 'extra-hours',
                title: 'Calcular Horas con Recargos',
                description: 'Calcula horas extras diurnas (+25%), nocturnas (+75%) y dominicales (+80%).',
                code: `import { calcularHoraExtraDiurna, calcularHoraExtraNocturna } from 'tributos-co';

const salario = 2000000;
const horaExtraDiurna = calcularHoraExtraDiurna(salario) // +25%
const horaExtraNocturna = calcularHoraExtraNocturna(salario) // +75%`,
            },
            {
                id: 'social-benefits',
                title: 'Calcular Prestaciones Sociales',
                description: 'Obtén cesantías, prima, intereses y vacaciones automáticamente.',
                code: `import { calcularPrestacionesSociales } from 'tributos-co';

const salario = 2000000;
const prestaciones = calcularPrestacionesSociales(salario);
console.log(prestaciones);`,
            },
        ],
        docsLink: 'Ver documentación completa',
    },
    nextPackages: {
        title: 'Próximos paquetes',
        subtitle: 'En desarrollo:',
        packages: [
            {
                id: 'liquidacion',
                name: 'liquidacion-co',
                description: 'Cálculo de liquidaciones laborales automáticas.',
            },
            {
                id: 'retefuente',
                name: 'retefuente-co',
                description: 'Módulo especializado en retención en la fuente y tarifas progresivas.',
            },
            {
                id: 'aportes',
                name: 'aportes-co',
                description: 'Aportes detallados a salud, pensión, ARL y caja de compensación.',
            },
        ],
    },
    about: {
        title: 'Sobre el autor',
        description: 'Este paquete es desarrollado por John Edwin Torres Martínez, ingeniero de software colombiano con experiencia en automatización, IA aplicada y desarrollo de soluciones para el contexto local.',
        vision: 'Su visión es construir herramientas que resuelvan problemas reales con precisión técnica y sensibilidad territorial.',
        links: {
            linkedin: 'LinkedIn',
            github: 'GitHub',
            instagram: 'Instagram',
        },
    },
}
