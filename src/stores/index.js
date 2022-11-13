import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => {
    return {
      teams: [],
      expeditions: [],
      clients: [],
      banners: [],
    };
  },
  actions: {
    getTeams() {
      axios
        .get("/teams")
        .then(({ data }) => {
          this.teams = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getEkspeditions() {
      axios
        .get("/expeditions")
        .then(({ data }) => {
          this.expeditions = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getClients() {
      axios
        .get("/clients")
        .then(({ data }) => {
          this.clients = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBanners() {
      axios
        .get("/banners")
        .then(({ data }) => {
          this.banners = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
