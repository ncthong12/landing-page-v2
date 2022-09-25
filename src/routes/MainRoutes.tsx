import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const UtilsAnimation = Loadable(lazy(() => import('views/utilities/Animation')));

const MainRoutes = {
    path: '/utils/util-animation',
            element: <UtilsAnimation />}

            export default MainRoutes;