<template>
  <div class="app-nav-container">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          Crowdstaffing jobs
          <!--<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">-->
          </a>
        </div>
        <div id="navbar" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped is-grouped-multiline">
                <p class="control"><a class="button is-text">Login</a></p>
                <p class="control"><a class="button is-success is-outlined">Sing up</a></p>
              </div>
            </div>
          </div>
        </div>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
   return{
   }
  }
}
</script>
<style lang="scss" scoped>
  @import "../scss/main";
  .navbar{
    background : $nav-bg-color;
    a{color:white;}
    ul{
      //float: right;
      li a{
        color: white;
      }
    }
  }
</style>
