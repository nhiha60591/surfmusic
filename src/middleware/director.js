import store from "../store";

export default function auth({ next, router }) {
  console.log(store.getters['user/role'])
  if (store.getters['user/role'] !== 'director') {
    return router.push({ name: '403' });
  }
  return next();
}
