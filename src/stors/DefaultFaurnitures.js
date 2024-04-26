import { defineStore } from "pinia";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [
            {
                id:1,
                name:"EASTPAK OVAL",
                prix: 360,
                image: "calculatrice.png",
                categorie: "calculatrice",
                color: ["#000", "#3273BA", "#004079", "#DEEFF9"],
                type: "calculatrice 1"
            },
            {
                id:2,
                name:"EASTPAK OVAL 2",
                prix: 370,
                image: "calculatrice2.png",
                categorie: "calculatrice",
                color: ["#FFA500", "#004079"],
                type: "calculatrice 1"
            },
            {
                id:22,
                name:"EASTPAK OVAL 3",
                prix: 390,
                image: "calculatrice2.png",
                categorie: "calculatrice",
                color: ["#FFA500", "#FF0000"],
                type: "calculatrice 2"
            },
            {
                id:3,
                name:"EASTPAK OVAL 3",
                prix: 200,
                image: "trousse.png",
                categorie: "trousse",
                color: ["#000", "#FF0000"],
                type: "trousse 2"
            },
            {
                id:4,
                name:"EASTPAK OVAL 4",
                prix: 100,
                image: "trousse.png",
                categorie: "trousse",
                color: ["#004079", "#00FF00"],
                type: "trousse 1"
            },
            {
                id:5,
                name:"cartable defhe",
                prix: 90,
                image: "cartable.png",
                categorie: "cartable",
                color: ["#000", "#00FF00"],
                type: "Trolley"
            },
            {
                id:6,
                name:"cartable ggggg",
                prix: 180,
                image: "cartable.png",
                categorie: "cartable",
                color: ["#000", "#004079"],
                type: "Sac-à-dos"
            },
        ],
        panierProducts: [],
        total: 0,
    }),
    getters:{
        getProducts(state){
            return state.fourniture.map(item => ({...item, quantity: 1, selectedColor: ''}));
        },
        totalPanier(state){
            return state.panierProducts.reduce((total, product) => total + (product.prix * product.quantity), 0);
        }
    },
    actions:{
        deleteProductsByCategory(category) {
            this.panierProducts = this.panierProducts.filter(item => item.categorie !== category);
        },

    }
});