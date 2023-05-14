// Layouts

//Pages
import Home from '~/pages/Home';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/training', component: Upload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
