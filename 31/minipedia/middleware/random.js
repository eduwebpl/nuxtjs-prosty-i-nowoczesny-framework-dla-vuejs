export default async function ({ store, route, $axios, app: { i18n }, redirect}) {
 const lang = i18n.locale;
 const random = (await $axios.$get(`/api/wiki/random/lang/${lang}/count/1`))[0];
 return redirect(`/${lang}/wiki/${random}`);
}