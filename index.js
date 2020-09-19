//import './src/styles/styles.css';

import './src/styles/global-styles.css';
import './src/styles/header.css';
import './src/styles/main.css';
import './src/styles/home.css';
import './src/styles/film.css';
import './src/styles/error404.css';

import { loadIndex, router } from './src/routing/routing';

window.addEventListener('load', () => {
    loadIndex();
    router();
});

window.addEventListener('hashchange', router);