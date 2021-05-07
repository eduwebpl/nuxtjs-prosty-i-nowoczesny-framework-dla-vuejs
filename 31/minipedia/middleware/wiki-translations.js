export default async function ({ store, route, $axios, app: { i18n }}) {
 const path = route.params.id;
 const lang = i18n.locale;
 
 if (!path) {
  const data = [
   {
    lang: 'en',
    url: `https://en.wikipedia.org/w/api.php`,
   },
   {
    url: `https://en.wikipedia.org/w/api.php`,
    lang: 'fr',
   },
   {
    url: `https://es.wikipedia.org/w/api.php`,
    lang: 'es',
   },
 ];
 store.commit('setLangLinks', data);
 } else { 
  try {
   const data = await $axios.$get(`/api/wiki/langlinks/page/${path}/lang/${lang}`);
   store.commit('setLangLinks', data);
  } catch (e) {
   console.error(e);
  } 
 }
}
