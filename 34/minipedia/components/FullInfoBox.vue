<template>
  <div>
  <table class="box full-bio">
    <tr>
      <td colspan="2">
        <figure>
          <img
            :src="mainImage" alt="Main image for the query">
          <figcaption>
            Main image representing {{ $route.params.id }}
          </figcaption>
        </figure>
      </td>
    </tr>

    <tr v-for="detail in textDetails">
      <td>{{ convertToStartCase(detail[0]) }} </td>
      <td>{{ renderOption(detail[1]) }} </td>
    </tr>
  </table>
  </div>
</template>
<script>
  import * as _ from 'lodash'
  export default {
    props: {
      content: {
        type: Object,
        required: true,
      }
    },
    computed: {
     details() {
      return Object.entries(this.$props.content);
     },
     textDetails() {
      return this.details.filter(detail => {
        const detailValue = detail[1];
        if (typeof detailValue !== 'string') {
         return false;
        }
        return !detailValue.includes('.PNG')
      });
     },
     mainImage() {
      return this.$store.state.mainImage;
     }
    },
    methods: {
     convertToStartCase(string) {
      return _.startCase(string);
     },
     renderOption(option) {
      if (Array.isArray(option)) {
       return option.join(', ');
      }
      return option;
     }
    }
  }
  

</script>

<style>
.full-bio img {
 max-width: 100%;
}
</style>
