export default async function ({ store, route, $axios, app: { i18n }}) {
 const path = route.params.id; 
 try {
  store.commit('setFullInfo', await $axios.$get('/api/wiki/fullInfo/page/' + path))
  store.commit('setContent', await $axios.$get('/api/wiki/content/page/' + path))
  store.commit('setSummary', await $axios.$get('/api/wiki/summary/page/' + path))
  store.commit('setRawImages', await $axios.$get('/api/wiki/rawImages/page/' + path))
  store.commit('setMainImage', await $axios.$get('/api/wiki/mainImage/page/' + path))
 } catch (e) {
  console.error(e);
 }
 
}
