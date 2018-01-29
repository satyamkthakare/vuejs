<template>
  <div>
    <div class="tile is-ancestor" v-for="i in rowCount">
      <div class="tile is-parent" v-for="job in itemCountInRow(i)">
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        jobsPerRow : 4
    }
  },
  computed:{
    rowCount:function(){
      return Math.ceil(this.jobsList.length / this.jobsPerRow);
    },
    jobsList: function(){
      return this.$store.state.jobs;
    }
  },
  methods:{
    itemCountInRow : function(index){
     //return this.jobsList.slice((index - 1) * this.jobsPerRow, index * this.jobsPerRow);
     return this.jobsList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      });
    }
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
