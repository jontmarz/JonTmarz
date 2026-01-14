import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Layouts/Root/Header';
import { MenuType } from '../config/variablesHeader';
import Footer from '../components/Layouts/Footer'

const RootLayout: React.FC = () => {
    const location = useLocation();

    // Determinar qué menú usar basado en la ruta actual
    const getMenuType = (): MenuType => {
        switch (true) {
            case location.pathname.startsWith('/blog'):
                return 'blog';
            case location.pathname.startsWith('/mia-course'):
                return 'miaCourse';
            case location.pathname.startsWith('/digital-launcher-gpt'):
                return 'gtpLDigital';
            case location.pathname.startsWith('/sobre-mi'):
                return 'aboutMe';
            default:
                return 'default';
        }
    };

    return (
        <>
            <Header menuType={getMenuType()} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;