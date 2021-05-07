export default async function ({ store, route, $axios, app: { i18n }}) {
 const path = route.params.id; 
 const lang = i18n.locale;

 try {
  store.commit('setFullInfo', await $axios.$get(`/api/wiki/fullInfo/page/${path}/lang/${lang}`))
  store.commit('setContent', await $axios.$get(`/api/wiki/content/page/${path}/lang/${lang}`))
  store.commit('setSummary', await $axios.$get(`/api/wiki/summary/page/${path}/lang/${lang}`))
  store.commit('setRawImages', await $axios.$get(`/api/wiki/rawImages/page/${path}/lang/${lang}`))
  store.commit('setMainImage', await $axios.$get(`/api/wiki/mainImage/page/${path}/lang/${lang}`))
 } catch (e) {
  console.error(e);
 }
}
