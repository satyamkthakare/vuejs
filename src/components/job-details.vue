<template>
  <div class="app-container section">
    <!-- <h1 class="title">Job details</h1>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two> -->
    <!-- Search conponant -->
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="field  has-addons">
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" v-model="search" required type="text" placeholder="Job Title, Keywords">
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
        <a class="button is-success is-medium" v-on:click="loadUsers">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <span>Search Relevant Jobs</span>
        </a>
      </p>
    </div>
    <!-- Search end -->

    <div class="tile is-ancestor jobs-list-container">
      <div class="tile is-parent jobs-item" v-for="job in blogs">
        <div class="card ta-jobs-box">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">{{job.userId}}</p>
                <p class="subtitle is-6">
                  <small>{{job.title | to-uppercase}}</small>,
                  <small>{{job.id}}</small>
                </p>
              </div>
              <div class="media-right">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
            </div>
            <div class="content">
              <router-link v-bind:to="'/details/' + job.id">
                <h2>{{job.body | snippet}}</h2>
              </router-link>
              <p><span class="btm-brdr">{{job.jobIndusty}}</span></p>
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
    <!-- <button class="button is-info" v-show="hasMoreItemsToShow()" v-on:click="showMoreItems()">Show More</button> -->
  </div>
</template>

<script>
//import ProductListOne from './ProductListOne.vue'
//import ProductListTwo from './ProductListTwo.vue'

export default {
    name: 'app',
    components: {
        //'product-list-one': ProductListOne,
        //'product-list-two': ProductListTwo
    },
    data(){
      return {
        search: '',
        blogs: []
        //id: this.$route.params.id
      }
    },
    created(){
    	this.$http.get('https://jsonplaceholder.typicode.com/posts').then( function(data){
            //console.log(data.body.length);
            this.blogs = data.body.slice(0,10);
        });
    },
    methods: {
    loadUsers: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then( function(data){
        var blogsArray = [];
            for (let key = 0; key < data.body.length; key++){
                //data.body[key].title = key;
                var titleSearch = data.body[key].title.toLowerCase().includes(this.search.toLowerCase());
                var bodySearch = data.body[key].body.toLowerCase().includes(this.search.toLowerCase());
                //blogsArray.push(data[key]);
                if(titleSearch == true || bodySearch == true){
                	blogsArray.push(data.body[key]);
                }
                console.log(data.body[key].title + 'Search '+ titleSearch);
                console.log(data.body[key].body + 'Search '+ bodySearch);
            }
            this.blogs = blogsArray;

      });
    },

        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().includes(this.search.toLowerCase());
            });
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
  @import "../scss/main";
  .jobs-list-container {
      display: flex;
      flex-grow: inherit;
      flex-wrap: wrap;
      justify-content: space-between;

      &:after {
        content: "";
        flex: auto;
      }
    }
    .jobs-item {
        width: 25%;
        flex-basis: auto;
        flex-grow: unset;

        .card-content{
            padding: 1rem;
            .btm-brdr{
              border-bottom: 2px solid #a7a4a4;
              display: inline-block;
            }
        }
        img {
          width: 100%;
          position: absolute;
          right: -1rem;
          top: -1rem;
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
