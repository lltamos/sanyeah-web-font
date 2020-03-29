import Home from './pages/Home';
import Proxy from './pages/Proxy';
import Business from './pages/Business';
import Setup from './pages/Setup';



const routesConfig = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/home',
        exact: true,
        component: Home,
    },
    {
        path: '/proxy',
        exact: true,
        component: Proxy,
    },
    {
        path: '/business',
        exact: true,
        component: Business,
    },
    {
        path: '/setup',
        exact: true,
        component: Setup,
    },
];

export default routesConfig;
