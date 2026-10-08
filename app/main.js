import { navigate } from './router.js';

function handleHashChange() {
  const raw = location.hash.slice(1) || '/';
  const path = raw.split('?')[0];
  navigate(path);
}

window.addEventListener('hashchange', handleHashChange);
handleHashChange();
