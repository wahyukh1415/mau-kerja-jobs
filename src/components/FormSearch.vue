<template>
    <div class="row py-4 center-search">
        <div class="col">
            <div class="px-0 py-1">
                <input v-model="company" type="text" class="form-control input-jobs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Jobs title, company">
            </div>
        </div>
        <div class="col">
            <div class="px-0 py-1">
                <input v-model="location" type="text" class="form-control input-location" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location">
            </div>
        </div>
        <div class="col">
            <div class="px-0 py-1">
                <input v-model="salary" type="text" class="form-control input-salary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Min Salary MYR">
            </div>
        </div>
        <div class="col">
            <div class="px-0 py-1">
                <button @click="search" type="button" class="btn btn-danger button-search"><fa icon="search"/> Find Jobs</button>
            </div>
        </div>
    </div>
</template>

<script>
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import FormSearch from '../components/FormSearch.vue'

export default {
  name: 'HomeView',
  components: {
    FormSearch
  },
  data: function () {
      return {
        company: '', 
        location: '', 
        salary: ''
      }
    },
    mounted(){
      
    },

    methods:{
        async search(){
            if(this.company || this.location || this.salary){
                localStorage.setItem('title', this.company)
                localStorage.setItem('company', this.company)
                localStorage.setItem('state', this.location)
                localStorage.setItem('salary-min', this.salary)
                this.$store.dispatch("searchByTitle");
                this.$store.dispatch("searchByCompany");
                if(this.company || this.location || this.salary){
                    this.$router.push({ path: '/job-list', query: { titleCompany: this.company , state:this.location, salary: this.salary } })
                } 
                // else if (this.company){
                //     this.$router.push({ path: '/job-list', query: { titleCompany: this.company } })
                // } else if (this.location){
                //     this.$router.push({ path: '/job-list', query: { state:this.location } })
                // } else if (this.salary) {
                //     this.$router.push({ path: '/job-list', query: {salary: this.salary } })
                // }
            }
        },
    }
}
</script>

<style lang="scss" scoped>
a{
  color: white !important;
}
.row{
    background: white;
}
</style>