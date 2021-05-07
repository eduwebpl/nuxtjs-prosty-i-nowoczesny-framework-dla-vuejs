export default async function ({ store, route, $axios }) {
 const path = route.params.id;
 try {
 const data = await $axios.$get('/api/wiki/langlinks/page/' + path);
 
 data.push({
  lang: 'en',
  title: null,
  url: 'https://en.wikipedia.org/w/api.php',
 })
  store.commit('setLangLinks', data);
 } catch (e) {
  console.error(e);
 } 
}
