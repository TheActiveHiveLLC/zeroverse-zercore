const routes = {
  '/': () => import('./pages/home.js'),
};

export async function navigate(path) {
  const container = document.getElementById('app');
  const loader = routes[path];

  if (!loader) {
    container.innerHTML = '<h1>404 - Page Not Found</h1>';
    return;
  }

  const module = await loader();
  module.default(container);
}
