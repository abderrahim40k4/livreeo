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
        } catch (error) {
          console.error('Error submitting form data:', error);
          throw error;  // Re-throw the error to be caught in the component
        }
    },
    
  },
});

