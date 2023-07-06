import config from '~/config';
// Layouts

//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Action from '~/pages/Action';
import Logout from '~/pages/Logout';
import ActionQuestion from '~/pages/ActionQuestion';
import Dashboard from '~/pages/Dashboard';
import ActionRealisticLabeling from '~/pages/ActionRealisticLabeling';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    // { path: config.routes.training, component: Upload },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },

    { path: config.routes.actiontest, component: ActionQuestion },
    { path: config.routes.action, component: Action },
    { path: config.routes.userdashboard, component: Dashboard },
    { path: config.routes.actionRealisticLabeling, component: ActionRealisticLabeling },
];

const privateRoutes = [{ path: config.routes.logout, component: Logout, layout: null }];

export { publicRoutes, privateRoutes };
