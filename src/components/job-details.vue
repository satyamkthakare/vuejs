<template>
  <div class="app-container">
    <h1 class="title">Job details</h1>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

export default {
    name: 'app',
    components: {
        //'product-list-one': ProductListOne,
        //'product-list-two': ProductListTwo
    },
    data(){
      return {
        id: this.$route.params.id
      }
    },
    computed:{
      jobslist: function(){
        return this.$store.state.jobs;
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '../scss/main';

</style>
