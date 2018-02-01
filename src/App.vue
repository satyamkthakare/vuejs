<template>
  <div class="app-container">
    <navbar></navbar>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>

  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import jobDetails from './components/job-details.vue';
export default {
  components : {
    'navbar' : Navbar
  },
  data(){
   return{
    title : "This is vue project"
   }
  }
}
</script>

<style lang="scss" scoped>
  @import '../src/scss/main';

</style>
