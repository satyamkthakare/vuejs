<template>
  <div>
    <!-- Search conponant -->
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="field  has-addons">
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" v-model="query" type="text" placeholder="Job Title, Keywords">
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

      <div class="jobs-list-container">
        <div class="jobs-item" v-for="job in searchFilter" v-bind:key="job.jobType">
          <div class="card ta-jobs-box">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">{{job.jobCompany}}</p>
                  <p class="subtitle is-6">
                    <small>{{job.jobType}}</small>,
                    <small>{{job.jobLocation}}</small>
                  </p>
                </div>
                <div class="media-right">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
              </div>
              <div class="content">
                <router-link to="/job-details" exact>
                  <h2>{{job.jobTitle}}</h2>
                </router-link>
                <p>{{job.jobIndusty}}</p>
              </div>

              <div class="media">
                <div class="media-content">
                  <p>{{job.postedDate}}</p>
                </div>
                <div class="media-right">
                  <span class="icon">
                    <i class="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <button class="button is-info" v-show="hasMoreItemsToShow()" v-on:click="showMoreItems()">Show More</button>
  </div>
</template>

<script>
//import searchComponant from './search.vue'
export default {
  name: 'App',
  data() {
      return {
        // search: '',
        query: '',
        jobsPerRow : 4,
        pagesShown : 1,
    		pageSize : 4
    }
  },

  computed:{
    rowCount:function(){
      return Math.ceil(this.jobsList.length / this.jobsPerRow);
    },
    jobsList: function(){
      return this.$store.state.jobs;
    },
    searchFilter: function(){
      return this.jobsList.filter(post => {
        return post.jobTitle.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    paginationLimit :function(data) {
        return this.pageSize * this.pagesShown;
         //return this.jobsList.slice((this.pageSize) * this.pagesShown, this.pageSize * this.pagesShown);
    }
  },
  methods:{
    itemCountInRow : function(index){
      return this.jobsList.slice((index - 1) * this.jobsPerRow, index * this.jobsPerRow);
    },

    hasMoreItemsToShow : function() {
        return this.pagesShown < (this.jobsList.length / this.pageSize);
    },
    showMoreItems : function() {
        this.pagesShown = this.pagesShown + 1;
        console.log(this.pagesShown);
    }
  },
  filters:{
    //  paginationLimit :function(data) {
    //     return this.pageSize * this.pagesShown;
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/main";
  .jobs-list-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: auto;

      &:after {
        content: "";
        flex: auto;
      }
    }
    .jobs-item {
        width: 25%;
        padding: 0.5em;
        box-sizing: border-box;
        align-self: stretch;

        img {
          width: 100%;
        }
    }
  .ta-jobs-box{
    border-radius: 0px;
    box-shadow: none;
  }

  @media screen and (max-width: 767px) and (min-width: 320px) {
    .jobs-item{
      width: 100%;
    }
  }
  @media screen and (max-width: 996px) and (min-width: 768px) {
    .jobs-item{
      width: 50%;
    }
  }
</style>
