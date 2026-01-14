export default {
    navbar: {
        home: 'Home',
        whatIs: 'What is it?',
        audience: 'Who is it for?',
        whyMatters: 'Why it matters?',
        howItWorks: 'How it works?',
        faq: 'Questions',
        tryIt: 'Try it',
    },
    hero: {
        title: 'Smart quotes, frictionless.',
        subtitle: 'Automate the generation of technical proposals and budgets with AI, conversational flows and Koda App as the decision core.',
        btn1: 'Request an automated quote',
        btn2: 'See how it works',
        disclaimer: 'Fast, personalized and professional responses in minutes'
    },
    whatIs: {
        title: "What is <span class=\"text-[#00AAFF]\">this system</span>?",
        intro: "Koda App is not just an application.",
        description: "It's the heart of an automation system that transforms how technology service proposals are generated.",
        sectionTitle: "How does it work?",
        steps: [
            {
                id: "conversation",
                title: "Initial conversation",
                description: "A chatbot on Telegram or WhatsApp or browser receives the customer's problem or need."
            },
            {
                id: "processing",
                title: "Intelligent processing",
                description: "A flow in n8n, powered by AI, interprets the requirement and queries Koda App to identify what solutions I can offer."
            },
            {
                id: "proposal",
                title: "Automatic proposal",
                description: "In minutes, the client receives a personalized PDF with:",
                items: [
                    "Project objectives",
                    "Technical scope",
                    "Estimated budget",
                    "Delivery time"
                ]
            }
        ]
    },
    whyMatters: {
        title: "Why does it matter?",
        benefits: [
            {
                id: "time",
                icon: "⏱️",
                title: "Save time",
                description: "No endless emails or unnecessary meetings."
            },
            {
                id: "ai",
                icon: "🧠",
                title: "AI applied with human judgment",
                description: "The responses are not generic, they are based on my real experience as a developer."
            },
            {
                id: "proposals",
                icon: "📄",
                title: "Clear and actionable proposals",
                description: "Each document is a roadmap, not just a quote."
            },
            {
                id: "experience",
                icon: "🤝",
                title: "Improve customer experience",
                description: "Fast, personalized and professional responses."
            }
        ]
    },
    services: {
        title: "What type of <span class=\"text-[#00AAFF]\">services</span> can I automate?",
        list: [
            "Web and mobile application development",
            "Process automation with n8n, Make, Power Automate",
            "API and system integration",
            "Implementation of chatbots and AI assistants",
            "Optimization of operational and commercial flows",
            "Technical consulting in architecture and scalability"
        ]
    },
    audience: {
        title: "Who is it for?",
        description: "Koda App is designed to boost the efficiency of different professional profiles.",
        audiences: [
            {
                id: "entrepreneurs",
                title: "Tech Entrepreneurs",
                description: "Who want to automate the quoting process and focus on developing projects."
            },
            {
                id: "agencies",
                title: "Development Agencies",
                description: "Looking to scale their commercial process without investing more time in manual proposals."
            },
            {
                id: "freelancers",
                title: "Freelancers",
                description: "Who need to respond quickly to potential clients with professional proposals."
            },
            {
                id: "consultants",
                title: "Technical Consultants",
                description: "Who require generating detailed budgets based on their experience."
            }
        ]
    },
    howItWork: {
        title: "How Does It Work?",
        description: "With Koda App, getting an automated quote has never been easier.",
        steps: [
            {
                label: "Client starts conversation",
                description: "Through WhatsApp, Telegram or web form, the client describes their need."
            },
            {
                label: "AI processes and queries Koda App",
                description: "An automated flow interprets the requirement and queries Koda App's knowledge base."
            },
            {
                label: "Generates personalized proposal",
                description: "In minutes, a PDF is generated with objectives, scope, budget and delivery time."
            }
        ],
        btnText: "Request Quote"
    },
    faq: {
        title: "Frequently Asked Questions",
        description: "Everything you need to know about Koda App",
        questions: [
            {
                question: "Do I need technical knowledge to use Koda App?",
                answer: "No, the system is designed to be used intuitively. You just need to describe your project and the system does the rest."
            },
            {
                question: "How accurate are the quotes?",
                answer: "Quotes are based on my real experience as a developer and a constantly updated knowledge base."
            },
            {
                question: "Can I customize the proposals?",
                answer: "Yes, each proposal is generated considering the unique specifications of your project."
            },
            {
                question: "What languages is it available in?",
                answer: "Currently, Koda App generates proposals in Spanish, but will soon be available in English."
            },
            {
                question: "How long does it take to generate a proposal?",
                answer: "The complete process takes between 2 and 5 minutes, depending on the project complexity."
            },
            {
                question: "How is the security of my information guaranteed?",
                answer: "All information is processed securely and confidentially. We do not share data with third parties."
            }
        ],
        feature: "Main features",
        features: [
            "Responses in minutes",
            "Professional proposals",
            "Based on real experience",
            "Automated process",
            "No commitment"
        ],
        moreQTitle: "Do you have more questions?",
        moreQText: "Contact us and we will help you solve them."
    },
    cta: {
        title: "Want to try it?",
        subtitle: "Do you have an idea or technical problem?",
        description: "Contact me via WhatsApp or Telegram. In minutes you will receive a clear proposal, no commitment.",
        btn1: "Try now",
        btn2: "See proposal example",
        contactText: "Contact me directly",
        comingSoon:"Coming soon"
    }
}
