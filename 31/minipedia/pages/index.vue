<template>
  <article class="content">
    <h1>Minipedia - {{ $t('Welcome') }} </h1>
    
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
    <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
  </article>
  </div>
</template>

<script>
  export default {
    layout: 'default'
  }
</script>

<style>
</style>
