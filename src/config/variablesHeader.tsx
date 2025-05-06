import { TFunction } from 'i18next';

// Define the structure of a menu item
export interface MenuItem {
    id: string;
    to: string;
    label: string;
    external: boolean;
}

// Define the available menu types
export type MenuType = 'default' | 'blog' | 'miaCourse' | 'gtpLDigital'

// Function to create menus with translation support
export const createMenus = (t: TFunction) => ({
    default: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "About", to: 'about', label: t("navbar.about"), external: false },
        { id: "Services", to: 'services', label: t("navbar.services"), external: false },
        { id: "Portfolio", to: 'portfolio', label: t("navbar.portfolio"), external: false },
        { id: "Skills", to: 'skills', label: t("navbar.skills"), external: false },
        // { id: "Blog", to: '/blog', label: t("navbar.blog"), external: true },
        { id: "Contact", to: 'contact', label: t("navbar.contact"), external: false },
        // { id: "logIn", to: '/login', label: t("navbar.login"), external: true },
    ],
    blog: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "Categories", to: '/categories', label: t("navbar.categories"), external: true },
        { id: "Contact", to: '/#contact', label: t("navbar.contact"), external: true },
    ],
    miaCourse: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "Modules", to: 'modules', label: t("navbar.modules", { ns: 'CurseWeb' }), external: false },
        { id: "Benefits", to: 'benefits', label: t("navbar.benefits", { ns: 'CurseWeb' }), external: false },
        { id: "Trainer", to: 'trainer', label: t("navbar.trainer", { ns: 'CurseWeb' }), external: false },
        { id: "FAQ", to: 'FrecuentQuestions', label: t("navbar.faq", { ns: 'CurseWeb' }), external: false },
        // { id: "Blog", to: '/blog', label: t("navbar.blog"), external: true },
        { id: "Contact", to: '/#contact', label: t("navbar.contact"), external: true },
    ],
    gtpLDigital: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "QueEs", to: 'que-es', label: t("navbar.whatIs", { ns: 'DLGpt' }), external: false },
        { id: "ParaQuien", to: 'para-quien', label: t("navbar.forWho", { ns: 'DLGpt' }), external: false },
        { id: "ComoFunciona", to: 'como-funciona', label: t("navbar.howItWorks", { ns: 'DLGpt' }), external: false },
        { id: "Demo", to: 'demo', label: t("navbar.demo", { ns: 'DLGpt' }), external: false },
        { id: "FAQ", to: 'faq', label: t("navbar.faq", { ns: 'DLGpt' }), external: false },
    ],
});

// Export a placeholder object for direct imports
// This will be populated at runtime with the translation function
export const menus: Record<MenuType, MenuItem[]> = {} as any;
