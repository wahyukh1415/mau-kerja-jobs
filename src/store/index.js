import { createStore } from 'vuex'
import axiosInstances from "../apis/server";

export default createStore({
  state: {
    listJobs: []
  },
  getters: {
  },
  mutations: {
    SET_IS_DATA: function (state, payload = []) {
      state.listJobs = payload;
    },
  },
  actions: {
    fetchData: function ({ commit }) {
      let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      axiosInstances({
        url: "/jobs",
        method: "get",
        headers: headers
      })
        .then(({ data }) => {
          commit("SET_IS_DATA", data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    searchById: function ({ commit },) {
      let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      axiosInstances({
        url: "/jobs?filter[id]="+ localStorage.getItem('jobDetails'),
        method: "get",
        headers: headers,
        parameter: {
          commit,
        },
      })
        .then(({ data }) => {
          commit("SET_IS_DATA", data.data);
        })
        .catch((err) => {
          if(err.response.data.code){
            commit("SET_IS_DATA", []);
          }
        });
    },

    searchByTitle: function ({ commit },) {
      let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      axiosInstances({
        url: "/jobs?filter[title]="+ localStorage.getItem('title') + 
        "&filter[state]=" + localStorage.getItem('state') + 
        "&filter[salary_min]=" + localStorage.getItem('salary-min') ,
        method: "get",
        headers: headers,
        parameter: {
          commit,
        },
      })
        .then(({ data }) => {
          console.log(data)
          commit("SET_IS_DATA", data.data);
        })
        .catch((err) => {
          if(err.response.data.code){
            commit("SET_IS_DATA", []);
          }
        });
    },

    searchByCompany: function ({ commit },) {
      let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
      };
      axiosInstances({
        url: "/jobs?filter[company]="+ localStorage.getItem('company') +
        "&filter[state]=" + localStorage.getItem('state') + 
        "&filter[salary_min]=" + localStorage.getItem('salary-min'),
        method: "get",
        headers: headers,
        parameter: {
          commit,
        },
      })
        .then(({ data }) => {
          console.log(data)
          commit("SET_IS_DATA", data.data);
        })
        .catch((err) => {
          if(err.response.data.code){
            commit("SET_IS_DATA", []);
          }
        });
    },

  },
  modules: {
  }
})
