export default async function ({ store, route, $axios }) {
 try {
  store.commit('setFullInfo', await $axios.$get('/api/wiki/fullInfo/page/Janusz%20Korczak'))
  store.commit('setContent', await $axios.$get('/api/wiki/content/page/Janusz%20Korczak'))
  store.commit('setSummary', await $axios.$get('/api/wiki/summary/page/Janusz%20Korczak'))
  store.commit('setRawImages', await $axios.$get('/api/wiki/rawImages/page/Janusz%20Korczak'))
  store.commit('setMainImage', await $axios.$get('/api/wiki/mainImage/page/Janusz%20Korczak'))
 } catch (e) {
  console.error(e);
 }
 
}
