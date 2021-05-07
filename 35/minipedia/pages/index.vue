<template>
  <article class="content">
    <h1>Minipedia - {{ $t('Welcome') }} </h1>
    <MostViewed :mostViewed="mostViewed"></MostViewed>
  </article>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    async asyncData({ $axios , app: { i18n }}) {
     return {
      mostViewed: await $axios.$get(`/api/wiki/mostViewed/lang/${i18n.locale}`),
     };
    },
    jsonld() {
      return {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [],
      };
    },
  }
</script>

<style>
</style>
