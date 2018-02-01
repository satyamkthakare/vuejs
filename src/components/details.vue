<template>
    <div id="single-blog">

      <section class="section">
        <h1 class="title">
          {{ blog.id}} -
          {{ blog.title }}
        </h1>
          <h2 class="subtitle">
            {{ blog.body }}
          </h2>
      </section>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            // console.log(data);
            this.blog = data.body;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
