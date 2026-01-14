import { TFunction } from 'i18next';

// Define the structure of a menu item
export interface MenuItem {
    id: string;
    to: string;
    label: string;
    external: boolean;
}

// Define the available menu types
export type MenuType = 'default' | 'blog' | 'miaCourse' | 'gtpLDigital' | 'kodaApp' | 'tributosCo' | 'aboutMe'

// Function to create menus with translation support
export const createMenus = (t: TFunction) => ({
    default: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "About", to: 'about', label: t("navbar.about"), external: false },
        { id: "Services", to: 'services', label: t("navbar.services"), external: false },
        { id: "Portfolio", to: 'portfolio', label: t("navbar.portfolio"), external: false },
        { id: "Apps", to: 'apps', label: t("navbar.apps"), external: false },
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
        { id: 'whatIs', to: 'whatIs', label: t("navbar.whatIs", { ns: 'DLGpt' }), external: false },
        { id: 'audience', to: 'audience', label: t("navbar.forWho", { ns: 'DLGpt' }), external: false },
        { id: 'benefits', to: 'benefits', label: 'Beneficios', external: false },
        { id: 'howItWorks', to: 'howItWorks', label: t("navbar.howItWorks", { ns: 'DLGpt' }), external: false },
        { id: 'faq', to: 'faq', label: t("navbar.faq", { ns: 'DLGpt' }), external: false },
        { id: 'demo', to: 'demo', label: t("navbar.demo", { ns: 'DLGpt' }), external: false },
    ],
    kodaApp: [
        { id: 'whatIs', to: 'whatIs', label: t("navbar.whatIs", { ns: 'KodaApp' }), external: false },
        { id: 'audience', to: 'audience', label: t("navbar.audience", { ns: 'KodaApp' }), external: false },
        { id: 'whyMatters', to: 'whyMatters', label: t("navbar.whyMatters", { ns: 'KodaApp' }), external: false },
        { id: 'howItWorks', to: 'howItWorks', label: t("navbar.howItWorks", { ns: 'KodaApp' }), external: false },
        { id: 'faq', to: 'faq', label: t("navbar.faq", { ns: 'KodaApp' }), external: false },
        { id: 'tryIt', to: 'tryIt', label: t("navbar.tryIt", { ns: 'KodaApp' }), external: false },
    ],
    tributosCo: [
        { id: 'whatIs', to: 'whatIs', label: t("navbar.whatIs", { ns: 'TributosCo' }), external: false },
        { id: 'whyUse', to: 'whyUse', label: t("navbar.whyUse", { ns: 'TributosCo' }), external: false },
        { id: 'howToUse', to: 'howToUse', label: t("navbar.howToUse", { ns: 'TributosCo' }), external: false },
        { id: 'nextPackages', to: 'nextPackages', label: t("navbar.nextPackages", { ns: 'TributosCo' }), external: false },
        { id: 'about', to: 'about', label: t("navbar.about", { ns: 'TributosCo' }), external: false },
    ],
    aboutMe: [
        { id: "Home", to: 'hero', label: t("navbar.home"), external: false },
        { id: "Story", to: 'story', label: t("navbar.story", { ns: 'AboutMe' }), external: false },
        { id: "Drives", to: 'drives', label: t("navbar.drives", { ns: 'AboutMe' }), external: false },
        { id: "Journey", to: 'journey', label: t("navbar.journey", { ns: 'AboutMe' }), external: false },
        { id: "Projects", to: 'projects', label: t("navbar.projects", { ns: 'AboutMe' }), external: false },
        { id: "Contact", to: 'contact', label: t("navbar.contact"), external: false },
    ],
});

// Export a placeholder object for direct imports
// This will be populated at runtime with the translation function
export const menus: Record<MenuType, MenuItem[]> = {} as any;
