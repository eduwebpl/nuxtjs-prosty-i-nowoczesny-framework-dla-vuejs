<template>
  <div class="most-viewed">
   <h2> {{ $t('MostViewed') }}</h2>
   <ol>
    <li v-for="article in filteredArticles">
      <nuxt-link :to="localePath('/wiki/'+article.title)">
       {{ article.title }}
      </nuxt-link>
    </li>
   </ol>
  </div>
</template>
<script>
export default {
 props: {
  mostViewed: {
   type: Array,
   required: true,
  }
 },
 computed: {
  filteredArticles() {
   return this.$props.mostViewed.filter(article => {
     return !article.title.includes(':');
   });
  }
 },
}
</script>

<style>
 .most-viewed h2 {
  font-size: 1.8rem;
 }
 
 .most-viewed ol li {
  font-size: 1.2rem;
 }
 
 .most-viewed {
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
 }
</style>