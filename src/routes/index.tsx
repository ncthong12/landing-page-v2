import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
// routes
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

    return useRoutes([{ path: '/', element: <PagesLanding /> },MainRoutes]);
}
