import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useFirstStepStore = defineStore("firstStepStore", {
  state: () => ({
    Citys: [],
    Schools: [],
    Class: [],
    langues: [],
    livres: [],
    SelectedCity: null,
    SelectedSchool: null,
    SelectedClass: null,
    SelectedLangues: [],
  }),
  getters: {
    getCitys(state){
      return state.Citys;
    },
    getSchools(state){
      return state.Schools;
    },
    getClasses(state){
      return state.Class;
    },
    getLangues(state){
      return state.langues;
    },
    getLivre(state){
      return state.livres;
    },
    
  },
  actions: {
    async fetchCitys(){
      try {
        const data = await axios.get('/shopping')
        this.Citys = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchSchools(){
      try {
        const data = await axios.get('/shopping/'+ this.SelectedCity)
        this.Schools = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchClasses(){
      try {
        const data = await axios.get('/shopping/'+ this.SelectedCity +'/'+ this.SelectedSchool)
        this.Class = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchLangues(){
      try {
        const data = await axios.get('/shopping/'+ this.SelectedCity +'/'+ this.SelectedSchool + '/' + this.SelectedClass)
        this.langues = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchLivres(){
        try 
        {
          const requestBody = {
            id_ville: this.SelectedCity,
            id_ecole: this.SelectedSchool,
            id_classe: this.SelectedClass,
            langues: [JSON.stringify(this.SelectedLangues)]
          };
          console.log(requestBody);
          // langues: [this.langues.map(langues => langues.id).join(', ')]
          const response = await axios.post(
            "/choixdelivre",
            requestBody
          );
          const responseData = response.data;
          if (response.status === 200) {
            const books = responseData;
            this.livres = books;
            console.log(this.livres);
          }
          else{
            console.log("not working !");
          }
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
  },
});

