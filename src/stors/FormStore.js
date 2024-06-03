import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useFormStore = defineStore("myFormStore", {
  state: () => ({
    offreEmp: [],
  }),
  getters: {
    getOffers(state){
      return state.offreEmp;
    }
  },
  actions: {
    async addFormData(data) {
      try {
        await axios.post('/contact-us', data);
      } 
      catch (error) {
        console.error('Error submitting form data:', error);
        throw error;
      }
    },
    async retourEchange(data){
      try {
        await axios.post('/return-request', data);
      }
      catch (error) {
        throw error;
      }
    },
    async addPartenaire(data) {
      try {
        await axios.post('/partner', data);
      } 
      catch (error) {
        console.error('Error submitting form data:', error);
        throw error;
      }
    },
    async fetchOffers() {
      try {
        const response = await axios.get('/posts');
        this.offreEmp = response.data;
        console.log(this.offreEmp.posts);
      } catch (error) {
        console.error('Error fetching offers:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
        alert('Failed to fetch offers. Please try again later.');
      }
    },
  },
});