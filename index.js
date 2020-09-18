import './src/styles/styles.css';
import { loadIndex, router } from './src/routing/routing';

window.addEventListener('load', () => {
    loadIndex();
    router();
});

window.addEventListener('hashchange', router);