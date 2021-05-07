<template>
  <article class="content">
    <h1>
      {{ $route.params.id }}
    </h1>
 
    <span class="notice"> {{ $t('Disclaimer') }} </span>
    
    <FullInfoBox :content="$store.state.fullInfo.general" />
    
    <p>{{ $store.state.summary }} </p>

    <TableOfContents :content="$store.state.content" />
    
    <ContentSection 
     v-for="section in $store.state.content" 
     :title="section.title"
     :content="section.content"
     :key="section.title"
     /> 
  </article>
</template>

<script>
  export default {
    layout: 'default',
    middleware: ['wiki-routing'],
  }
</script>

<style>
</style>
