import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [
        {
            "id": 1,
                "name": "trousse 1",
                "description": null,
                "type": "EXTRA",
                "price": "10.00",
                "status": 1,
                "category": "trousses",
                "variants": [
                    {
                        "id": 1,
                        "color": "#3273BA",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/15"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 6,
                            "name": "extra 1",
                            "description": null,
                            "type": 3,
                            "price": "10.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "trousse 2",
                "description": null,
                "type": "EXTRA",
                "price": "20.00",
                "status": 1,
                "category": "trousses",
                "variants": [
                    {
                        "id": 1,
                        "color": "#3476B9",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/14"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 7,
                            "name": "extra 2",
                            "description": null,
                            "type": 3,
                            "price": "20.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    },
                    {
                        "id": 2,
                        "color": "#6192BF",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/15"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 7,
                            "name": "extra 2",
                            "description": null,
                            "type": 3,
                            "price": "20.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "Cartable 1",
                "description": null,
                "type": "EXTRA",
                "price": "20.00",
                "status": 1,
                "category": "cartables",
                "variants": [
                    {
                        "id": 1,
                        "color": "#000",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/14"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 7,
                            "name": "extra 2",
                            "description": null,
                            "type": 3,
                            "price": "20.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    }
                ]
            },
            {
                "id": 4,
                "name": "Cartable 2",
                "description": null,
                "type": "EXTRA",
                "price": "20.00",
                "status": 1,
                "category": "cartables",
                "variants": [
                    {
                        "id": 1,
                        "color": "#000",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/14"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 7,
                            "name": "extra 2",
                            "description": null,
                            "type": 3,
                            "price": "20.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    },
                    {
                        "id": 2,
                        "color": "#004079",
                        "image": {
                            "path": "https://livreeo.ma/api/public/files/15"
                        },
                        "status": 1,
                        "created_at": null,
                        "updated_at": null,
                        "article": {
                            "id": 7,
                            "name": "extra 2",
                            "description": null,
                            "type": 3,
                            "price": "20.00",
                            "status": 1,
                            "category_id": null,
                            "created_at": null,
                            "updated_at": null
                        }
                    }
                ]
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
            return state.panierProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
        }
    },
    actions:{
        deleteProductsByCategory(category) {
            this.panierProducts = this.panierProducts.filter(item => item.category !== category);
        },
        // async fetchProducts(path){
        //     try {
        //       const data = await axios.get(path)
        //       this.fourniture = data.data.articles
        //       //console.log(this.fourniture);
        //     }
        //     catch (error) {
        //       alert(error)
        //       console.log(error)
        //     }
        // },


    }
});