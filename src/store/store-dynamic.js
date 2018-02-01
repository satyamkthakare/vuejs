import Vue from 'vue';
import Vuex from 'vuex';
import vueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(vueResource);

const moduleB = {
  state:{
    products: [
        {name: 'Banana Skin', price: 20},
        {name: 'Shiny Star', price: 40},
        {name: 'Green Shells', price: 60},
        {name: 'Red Shells', price: 80}
    ]
  },
  getters: {
      saleProducts: (state) => {
          var saleProducts = state.products.map( product => {
              return {
                  name:  '**' + product.name + '**',
                  price: product.price / 2,
              };
          });
          return saleProducts;
      }
  },
  mutations: {
      reducePrice: state => {
          state.products.forEach( product => {
              product.price -= 1
          });
      }
  }
}

export const store = new Vuex.Store({
    strict: true,
    data(){
      return{
        blogs: []
      }
    },
    state: {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then( function(data) 		{
          //console.log(data.body.length);
          this.blogs = data.body.slice(0,10);

      });
    //       jobs : [
    //         {
    //           jobId : 1,
    //           jobCompany : "Google",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Interactive and Visual Designer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "../assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 2,
    //           jobCompany : "Uber",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Dev OPS",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 3,
    //           jobCompany : "Google",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Interactive and Visual Designer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 4,
    //           jobCompany : "Master Card",
    //           jobType : "Contract",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 5,
    //           jobCompany : "Experian",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 6,
    //           jobCompany : "Google",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Interactive and Visual Designer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "../assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 7,
    //           jobCompany : "Uber",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Dev OPS",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 8,
    //           jobCompany : "Google",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Interactive and Visual Designer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "../assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 9,
    //           jobCompany : "Master Card",
    //           jobType : "Contract",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 10,
    //           jobCompany : "Experian",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "./assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 11,
    //           jobCompany : "Experian",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : '<img src="../assets/revised-google-logo.png"/>',
    //           postedDate : "2 Days ago"
    //         },
    //         {
    //           jobId : 12,
    //           jobCompany : "Experian",
    //           jobType : "Full Time",
    //           jobLocation : "San Francisco, CA",
    //           jobTitle : "Software Engineer",
    //           jobIndusty : "Information Technology",
    //           companyLogo : "assets/revised-google-logo.png",
    //           postedDate : "2 Days ago"
    //         }
    //       ]
    }
});
