<template>
  <div>
    <div class="toc">
      <div class="box">
        <h2 class="no-underline"> Contents </h2>
        <ol>
          <li v-for="section in content">
           <a :href="`#${getSectionId(section)}`">
            {{ section.title }}
           </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   content: {
    type: Array,
    required: true,
   }
 },
 methods: {
  getSectionId(section) {
   return section.title.replace(' ', '-').toLowerCase();
  }
 }
}
</script>

<style>
</style>
