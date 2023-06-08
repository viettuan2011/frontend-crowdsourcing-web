// Layouts

//Pages
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Action from '~/pages/Action';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/action', component: Action },
    { path: '/training', component: Upload },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
