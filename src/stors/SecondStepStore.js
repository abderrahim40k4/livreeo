import { defineStore } from "pinia";
import axios from "../lib/axios";
import { useFirstStepStore } from "./FirstStepStore";

export const useSecondStepStore = defineStore("secondStepStore", {
    state: () => ({
        articles: [],
        livres: [],
        faurnitures:[],
        cartItems: [],
        plastification: [],
        cartFournt: [],
        total:0,
        plastificationTotal:0,
    }),
    getters:{
      getLivres(state){
        return state.livres.map(item => ({...item, quantity: 1}));
      },
      getFournitures(state){
        return state.faurnitures.map(item => ({...item, quantity: 1}));
      },
      getSelectedLivres(state){
        return state.cartItems.reduce((acc, livre) => {
          acc[livre.category] = acc[livre.category] || [];
          acc[livre.category].push(livre);
          return acc;
        }, {});
      },
      countLivreInCart(state){
        return state.cartItems.length;
      },
      calcTotalPanier(state){
        return state.plastificationTotal + state.cartItems.reduce((total, livre) => total + (livre.price * livre.quantity), 0) + state.cartFournt.reduce((total, product) => total + (product.price * product.quantity), 0); 
      }
    },
    actions:{
        async fetchLivres(){
          try 
          {
            const firstStore = useFirstStepStore();
            const data = await axios.get("/articles/" + firstStore.SelectedLangues);
            this.articles = data.data.articles;
            this.livres = this.articles.filter(article => article.type === "BOOK");
            this.faurnitures = this.articles.filter(article => article.type === "SUPPLY");

            console.log(this.livres);
            console.log(this.faurnitures);
          }
          catch (error) {
            alert(error)
            console.log(error)
          }
        },
        deleteLiv(){
          this.cartItems = [];
        },
        deleteFaurn(){
          this.cartFournt = [];
        }

    }
});
