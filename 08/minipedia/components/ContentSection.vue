<template>
  <div>
    <h2 :id="headingId">{{ $props.title }}</h2>
    <p v-for="paragraph in content">
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
    type: Array,
    required: true,
   }
 },
 computed: {
  headingId() {
   return this.$props.title.replace(' ', '-').toLowerCase();
  }
 }
}
</script>

<style>
</style>
