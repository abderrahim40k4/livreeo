import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useFormStore = defineStore("myFormStore", {
  state: () => ({
  }),
  getters: {
    
    
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
    
  },
});

