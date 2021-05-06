<template>
  <div>
  <table class="box full-bio">
    <tr>
      <td colspan="2">
        <figure>
          <img
            :src="mainImage">
          <figcaption>
            To be filled
          </figcaption>
        </figure>
      </td>
    </tr>


    <tr v-for="detail in textDetails">
      <td>{{ detail[0] }} </td>
      <td>{{ renderOption(detail[1]) }} </td>
    </tr>
  </table>
  </div>
</template>
<script>
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
        return !detailValue.includes('.PNG')
      });
     },
     mainImage() {
      const firstImageBasedOnValue = this.details.filter(detail => {
       const detailValue = detail[1];
        return detailValue.includes('.PNG')
      })[0];
      
      return firstImageBasedOnValue[1];
     }
    },
    methods: {
     renderOption(option) {
      if (Array.isArray(option)) {
       return option.join(', ');
      }
      return option;
     }
    }
  }
  

</script>
