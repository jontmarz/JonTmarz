export default {
    navbar: {
        home: 'Home',
        whatIs: 'What is it?',
        whyUse: 'Why use it?',
        howToUse: 'How to use',
        nextPackages: 'Next packages',
        about: 'About the author',
    },
    hero: {
        title: 'Tributos Co',
        subtitle: 'npm package designed to automate labor and tax calculations in Colombia, offering a modular solution that provides developers and companies with the precision, speed and regulatory compliance necessary to manage salaries, surcharges and contributions in a reliable and efficient manner.',
        btn1: 'View on npm',
        btn2: 'View documentation',
    },
    whatIs: {
        title: 'tributos-co – Colombian labor calculations in one line',
        subtitle: 'What is it?',
        description: 'It is an npm package that encapsulates the most common calculations of the Colombian labor system, including:',
        features: [
            {
                id: 'net-salary',
                title: 'Net and gross salary',
                description: 'Accurate calculation of net salary after deductions and gross salary with all benefits.',
            },
            {
                id: 'extra-hours',
                title: 'Overtime and surcharges',
                description: 'Day and night overtime, night surcharges, Sunday and holiday surcharges according to regulations.',
            },
            {
                id: 'social-benefits',
                title: 'Social benefits',
                description: 'Bonus, severance, interest on severance and vacations calculated automatically.',
            },
            {
                id: 'social-security',
                title: 'Social security and parafiscal',
                description: 'Contributions to health, pension, ARL, compensation fund, ICBF and SENA.',
            },
            {
                id: 'withholding',
                title: 'Withholding tax',
                description: 'Calculation of withholding tax with deductions allowed by law.',
            },
        ],
        audienceTitle: 'Who is it useful for?',
        audiences: [
            {
                id: 'developers',
                title: 'Developers',
                description: 'Building payroll, HR or billing systems.',
            },
            {
                id: 'startups',
                title: 'Startups',
                description: 'That need to automate labor payments.',
            },
            {
                id: 'consultants',
                title: 'Consultants',
                description: 'Who require fast and reliable calculations.',
            },
        ],
    },
    whyUse: {
        title: 'Why use it?',
        features: [
            {
                id: 'typescript',
                title: 'Full TypeScript',
                description: 'Strong typing to avoid errors in financial calculations.',
            },
            {
                id: 'updated',
                title: '2026 Updated Regulations',
                description: '80% Sunday/holiday surcharge and reduced working hours from July 2026.',
            },
            {
                id: 'validations',
                title: 'Validations Included',
                description: 'Minimum wage, transportation allowance, comprehensive salary and deductions.',
            },
            {
                id: 'flexible',
                title: 'Flexible Schedule',
                description: 'Automatic adjustment of monthly hours according to Law 2101 of 2021.',
            },
            {
                id: 'combinations',
                title: 'All Combinations',
                description: 'Day overtime, night overtime, Sunday, Sunday day overtime, Sunday night overtime.',
            },
            {
                id: 'social-benefits',
                title: 'Complete Benefits',
                description: 'Severance, bonus, interest on severance and vacations.',
            },
        ],
    },
    howToUse: {
        title: 'How to use',
        installation: {
            title: 'Installation',
            command: 'npm install tributos-co',
        },
        examples: [
            {
                id: 'ordinary-hour',
                title: 'Calculate Ordinary Hour',
                description: 'Get the value of the ordinary hour based on monthly salary.',
                code: `import { calcularHoraOrdinaria } from 'tributos-co'

const salario = 1750905; // SMLMV 2026
const valorHora = calcularHoraOrdinaria(salario)
console.log(valorHora); // 7958.66`,
            },
            {
                id: 'extra-hours',
                title: 'Calculate Hours with Surcharges',
                description: 'Calculate day overtime (+25%), night overtime (+75%) and Sunday overtime (+80%).',
                code: `import { calcularHoraExtraDiurna, calcularHoraExtraNocturna } from 'tributos-co';

const salario = 2000000;
const horaExtraDiurna = calcularHoraExtraDiurna(salario) // +25%
const horaExtraNocturna = calcularHoraExtraNocturna(salario) // +75%`,
            },
            {
                id: 'social-benefits',
                title: 'Calculate Social Benefits',
                description: 'Get severance, bonus, interest and vacations automatically.',
                code: `import { calcularPrestacionesSociales } from 'tributos-co';

const salario = 2000000;
const prestaciones = calcularPrestacionesSociales(salario);
console.log(prestaciones);`,
            },
        ],
        docsLink: 'View full documentation',
    },
    nextPackages: {
        title: 'Next packages',
        subtitle: 'In development:',
        packages: [
            {
                id: 'liquidacion',
                name: 'liquidacion-co',
                description: 'Automatic labor settlement calculation.',
            },
            {
                id: 'retefuente',
                name: 'retefuente-co',
                description: 'Specialized module for withholding tax and progressive rates.',
            },
            {
                id: 'aportes',
                name: 'aportes-co',
                description: 'Detailed contributions to health, pension, ARL and compensation fund.',
            },
        ],
    },
    about: {
        title: 'About the author',
        description: 'This package is developed by John Edwin Torres Martínez, a Colombian software engineer with experience in automation, applied AI and development of solutions for the local context.',
        vision: 'His vision is to build tools that solve real problems with technical precision and territorial sensitivity.',
        links: {
            linkedin: 'LinkedIn',
            github: 'GitHub',
            instagram: 'Instagram',
        },
    },
}
