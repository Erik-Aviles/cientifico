import router from './routers';
import './styles/styles.css';
import './styles/vars.styl';

window.addEventListener('load', router);
window.addEventListener('hashchange', router)