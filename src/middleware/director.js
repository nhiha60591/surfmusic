import store from "../store";

export default function auth({ next, router }) {
  if (store.getters['user/role'] !== 'director') {
    return router.push({ name: '403' });
  }
  return next();
}
