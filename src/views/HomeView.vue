<template>
  <div class="home">
    <form-search></form-search>
    <div class="content row px-3 py-3">
      <div class="col-xl-3"></div>
      <div class="col-xl-6">
        <div v-if="listJobs.length">
          <div v-for="list in listJobs" v-bind:key="list.id" class="card px-3 py-3 my-3">
            <div class="row">
              <!-- companylogo -->
              <div class="col-xl-2 px-2 py-2">
                <img :src="list.company.logo" width="70" alt="">
              </div>
              <!-- company name & jobs  -->
              <div class="col-xl-10 left-side">
                <h1>{{list.title}}</h1>
                <h2 class="isSelect" @click="detail(list)">{{list.company.name}}</h2> <!-- if click go. to jobs details  -->
              </div>
            </div>
            <!-- info -->
            <div class="row left-side px-2 mt-2">
              <div class="col-xl-6 py-1">
                <span> 
                  <fa icon="money-bill-1-wave" /> {{ list.salary.currency }} {{ list.salary.min }} - {{ list.salary.max }}
                </span>
              </div>
              <div class="col-xl-6 py-1">
                  <span>
                    <fa icon="clock"/>
                  {{ list.job_type }}
                  </span>
              </div>
              <div class="col-xl- py-1">
                <span>
                  <fa icon="location-dot"/>
                {{ list.location.state }}
                </span>
              </div>
            </div>
            <!-- descriptions -->
            <div class="row mt-2 left-side">
              <div class="col">
                <h3 class="py-0 my-0">Requirements: {{ list.descriptions.requirements.toString().slice(0, 100) }}</h3>
                <h3 class="py-0 my-0">Reponsibilities: {{ list.descriptions.reponsibilities.toString().slice(0, 100) }}</h3>
                <h3 class="py-0 my-0">Benefits: {{ list.descriptions.benefits.toString().slice(0, 100) }}</h3>
              </div>
            </div>
            <hr>
            <!-- action -->
            <div class="row">
              <div class="col px-2 py-2">
                <span class="isSelect">
                  <fa icon="heart"/>
                  Save
                </span>
              </div>
              <div class="col px-2 py-2">
                <span class="isSelect">
                  <fa icon="briefcase"/>
                  Apply
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="card px-3 py-3 my-3">
            <div class="row">
              <div class="col px-2 py-2">
                data not found
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3"></div>
    </div>
  </div>
</template>

<script>
import FormSearch from '../components/FormSearch.vue'

export default {
  name: 'HomeView',
  components: {
    FormSearch
  },
  computed: {
    listJobs: function () {
      return this.$store.state.listJobs;
    },
  },
  data: function () {
      return {
        title: '', 
        company: '', 
        state: '', 
        salary_min: '', 
        salary_max: ''
      }
    },
    mounted(){
      this.$router.push({ path: '/' })
    },
    created: function () {
      this.$store.dispatch("fetchData");
    },
    methods:{
      async detail(jobDetails){
        localStorage.setItem('jobDetails', jobDetails.id)
        this.$router.push({ path: '/job-details', query: { id: jobDetails.id } })
      },
    }
}
</script>
