<template>
  <div>
    <!-- Search conponant -->
    <h2>{{search}}</h2>
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="field  has-addons">
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" v-model="search" type="text" placeholder="Job Title, Keywords">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </div>
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" type="text" placeholder="City, State, Country">
            <span class="icon is-small is-left">
              <i class="fa fa-map-marker"></i>
            </span>
          </div>
        </div>
      </div>
      <p class="control">
        <a class="button is-success is-medium">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <span>Search Relevant Jobs</span>
        </a>
      </p>
    </div>
    <!-- Search end -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
      search: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/main";
</style>
