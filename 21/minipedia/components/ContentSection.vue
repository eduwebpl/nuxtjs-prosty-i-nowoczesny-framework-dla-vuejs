<template>
  <div>
    <h2 :id="headingId">{{ $props.title }}</h2>
    <p v-for="paragraph in contentAsAnArray">
     {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
 props: {
   title: {
    type: String,
    required: true,
   },
   content: {
    type: String,
    required: true,
   }
 },
 computed: {
  contentAsAnArray() {
   return this.$props.content.split('\n\n');
  },
  headingId() {
   return this.$props.title.replace(' ', '-').toLowerCase();
  }
 }
}
</script>

<style>
</style>
