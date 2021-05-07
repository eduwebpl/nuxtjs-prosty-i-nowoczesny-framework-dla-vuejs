export default async function ({ store, route, $axios, app: { i18n }}) {
 const path = route.params.id; 
 const lang = i18n.locale;
 
 const promises = [
  $axios.$get(`/api/wiki/fullInfo/page/${path}/lang/${lang}`),
  $axios.$get(`/api/wiki/content/page/${path}/lang/${lang}`),
  $axios.$get(`/api/wiki/summary/page/${path}/lang/${lang}`),
  $axios.$get(`/api/wiki/rawImages/page/${path}/lang/${lang}`),
  $axios.$get(`/api/wiki/mainImage/page/${path}/lang/${lang}`),
  $axios.$get(`/api/wiki/url/page/${path}/lang/${lang}`),
 ];
 
 const results = await Promise.all(promises);
 const updates = [
  'setFullInfo',
  'setContent',
  'setSummary',
  'setRawImages',
  'setMainImage',
  'setOriginalUrl'
 ];
 
 results.forEach((result, index) => {
  store.commit(updates[index], result);
 });
}
