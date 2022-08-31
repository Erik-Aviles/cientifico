import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Section from '../templates/Section';
import Footer from '../templates/Footer';
import Error404 from '../pages/Error404';
import getHash from '../utiles/getHash';
import resolveRoutes from '../utiles/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const section = null || document.getElementById('section');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    section.innerHTML = await Section();
};

export default router;