<template>
  <div class="home">
      <form-search></form-search>
      <div class="content row px-3 py-3">
          <div class="col-xl-3"></div>
          <div class="col-xl-6">
              <div class="card rounded">
                  <img class="banner rounded" src="../assets/img/watsons-banner.jpg" alt="">
                  <div class="row px-3 py-3">
                      <!-- companylogo -->
                      <div class="col-xl-2 px-2 py-2">
                          <img :src="listJobs[0].company.logo" width="70" alt="">
                      </div>
                      <!-- company name & jobs  -->
                      <div class="col-xl-10 left-side">
                          <h1>{{listJobs[0].title}}</h1>
                          <h2>{{listJobs[0].company.name}}</h2>
                          <!-- info -->
                          <div class="row left-side px-0">
                              <div class="col-xl-6 py-1">
                                  <span>
                                      <fa icon="money-bill-1-wave" /> {{ listJobs[0].salary.currency }}
                                      {{ listJobs[0].salary.min }} -
                                      {{ listJobs[0].salary.max }}
                                  </span>
                              </div>
                              <div class="col-xl-6 py-1">
                                  <span>
                                      <fa icon="clock" />
                                      {{ listJobs[0].job_type }}
                                  </span>
                              </div>
                              <div class="col-xl-6 py-1">
                                  <span>
                                      <fa icon="location-dot" />
                                      {{ listJobs[0].location.state }}
                                  </span>
                              </div>
                              <div class="col-xl-6 py-1">
                                  <span>
                                      <fa icon="share-nodes" />
                                      {{ listJobs[0].job_category }}
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- action -->
                  <hr>
                  <div class="row px-2 py-2">
                      <div class="col">
                          <span>
                              <fa icon="heart" />
                              Save
                          </span>
                      </div>
                      <div class="col">
                          <span>
                              <fa icon="briefcase" />
                              Apply
                          </span>
                      </div>
                  </div>
              </div>

              <div class="card mt-4">
                  <div class="row">
                      <div class="col-xl-12 left-side">
                          <h1 class="px-3 py-3">Requirements</h1>
                      </div>
                      <hr>
                      <div class="col-xl-12 left-side">
                          <p class="px-3 py-3">{{listJobs[0].descriptions.requirements}}</p>
                      </div>
                  </div>
              </div>

              <div class="card mt-4">
                  <div class="row">
                      <div class="col-xl-12 left-side">
                          <h1 class="px-3 py-3">Reponsibilities</h1>
                      </div>
                      <hr>
                      <div class="col-xl-12 left-side">
                          <p class="px-3 py-3">{{listJobs[0].descriptions.reponsibilities}}</p>
                      </div>
                  </div>
              </div>

          </div>
          <div class="col-xl-3"></div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormSearch from '../components/FormSearch.vue'

export default {
  name: 'HomeView',
  components: {
    FormSearch
  },
  data: function () {
      return {
        
      }
    },
    computed: {
    listJobs: function () {
        return this.$store.state.listJobs;
        },
    },
    created: function () {
      this.$store.dispatch("searchById", localStorage.getItem("jobDetails") );
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
hr{
    margin: 10px;
}
</style>
