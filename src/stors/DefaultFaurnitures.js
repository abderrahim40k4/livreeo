import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [],
        panierProducts: [],
        total: 0,
    }),
    getters:{
        getProducts(state){
            return state.fourniture.map(item => ({...item, quantity: 1, selectedColor: ''}));
        },
        totalPanier(state){
            return state.panierProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
        }
    },
    actions:{
        deleteProductsByCategory(category) {
            this.panierProducts = this.panierProducts.filter(item => item.category !== category);
        },
        async fetchProducts(path){
            try {
              const data = await axios.get(path)
              this.fourniture = data.data.articles
              //console.log(this.fourniture);
            }
            catch (error) {
              alert(error)
              console.log(error)
            }
        }, 
        async fetchProductsByPrice(minP, maxP){
            try {
              //this.fourniture = [];
              const data = await axios.get('/articles?types=EXTRA&min_price=' + minP + '&max_price=' + maxP);
              this.fourniture = data.data.articles
              //console.log(this.fourniture);
            }
            catch (error) {
              alert(error)
              console.log(error)
            }
        },
    }
});