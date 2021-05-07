<template>
<form @submit="handleSubmit">
      <input type="search" list="autocomplete" class="site-search" placeholder="🔍 Search minipedia"
      @input="handleInput">
      <datalist id="autocomplete">
        <option v-for="options in availableOptions" :value="options"></option>
      </datalist>
      <button type="submit">Submit</button>
</form>
</template>
<script>
export default {
 data() {
  return {
   availableOptions: [],
  };
 },
 methods: {
  handleSubmit(ev) {
   const query = ev.target[0].value;
   this.$router.push({ path: this.localePath(`/wiki/${query}`)})
   ev.preventDefault();
  },
  async handleInput(ev) {
   const query = ev.target.value;
   if (!query) {
    return;
   }
   const response = await this.$axios.$get(`/api/wiki/search/lang/${this.$i18n.locale}/query/${query}/limit/5`);
   this.availableOptions = response.results;
  }
 }
}
</script>