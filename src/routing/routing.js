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

const loadIndex = () => {
    const header = document.querySelector('#header');
    header.innerHTML= Header();
}

const router = async () => {    
    const content = document.querySelector('#main-content');

    const hash = getHash(); /* Recorta el hash y devuelve / o lo que sigue de /, ej.: /about */
    const route = resolveRoutes(hash); /* Ruta que se a a buscar en objeto routes de arriba. Con el hash pasado, lo arregla para que se pueda emparejar a alguna de los atrib de routes */
    const render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export {loadIndex, router};
