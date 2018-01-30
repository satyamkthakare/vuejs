<template>
  <div class="section">
    <jobs-list></jobs-list>
  </div>
</template>

<script>
//import searchComponant from './search.vue'
import jobsList from './jobs-list.vue'
export default {
  name: 'App',
  components: {
    //'search-componant': searchComponant,
    'jobs-list': jobsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/main";
  .ta-jobs-box{
    border-radius: 0px;
    box-shadow: none;
  }
</style>
