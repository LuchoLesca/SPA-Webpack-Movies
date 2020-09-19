import Header from '../templates/Header';
import Home from '../pages/Home';
import Film from '../pages/Film';
import Error404 from '../pages/Error404'

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': Film
};

const loadMainHtml = () => {
    const header = document.querySelector('#header');
    header.innerHTML= Header();
}

const router = async () => {    
    const content = document.querySelector('#main-content');

    const hash = getHash();
    const route = resolveRoutes(hash);
    const render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export {loadMainHtml, router};
