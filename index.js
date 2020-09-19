import './src/styles/styles.css';

import { loadMainHtml, router } from './src/routing/routing';

window.addEventListener('load', () => {
    loadMainHtml();
    router();
});

window.addEventListener('hashchange', router);