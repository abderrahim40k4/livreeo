import { defineStore } from "pinia";
import axios from "../lib/axios";
import { useFirstStepStore } from "./FirstStepStore";

export const useSecondStepStore = defineStore("secondStepStore", {
    state: () => ({
        livres: [
          {
              id:1,
              name:"Fleurs d'encre 5",
              prix: 190,
              image: "../../livreeo/src/assets/livre.svg",
              categorie: "Français"
          },
          {
              id:2,
              name: "Mon carnet de labo collection microméga",
              prix: 1300,
              image: "../../livreeo/src/assets/latin.png",
              categorie: "Français"
          },
          {
              id:3,
              name:"Livre 3",
              prix: 200,
              image: "../../livreeo/src/assets/livre.svg",
              categorie: "Sciences Physiques"
          },
          {
              id:4,
              name:"Livre 4",
              prix: 100,
              image: "../../livreeo/src/assets/livre.svg",
              categorie: "Sciences de La vie"
      
          },
          {
              id:5,
              name:"Livre 5",
              prix: 800,
              image: "../../livreeo/src/assets/livre.svg",
              categorie: "Français"
          },
        ],
        faurnitures:[
          {
            id:1,
            name:"90g 24x32 grands carreaux de 96 pages 1",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 22,
            image: "../assets/Calligraphe-JhWdyp8R.svg",
            marque: "Calligraphe",
            categorie: "HG SI et classiques",
            annee: "2018",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:2,
            name:"24x32 grands carreaux de 96 pages 2",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 32,
            image: "../../livreeo/src/assets/calligraphe.png",
            marque: "Oxford 90g",
            categorie: "HG SI et classiques",
            annee: "2017",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:3,
            name:"24x32 grands carreaux de 96 pages 3",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 42,
            image: "../../livreeo/src/assets/calligraphe.png",
            marque: "Clairefontaine 90g",
            categorie: "HG SI et classiques",
            annee: "2016",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:6,
            name:"24x32 grands carreaux de 96 pages 3",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 42,
            image: "../../livreeo/src/assets/calligraphe.png",
            marque: "Clairefontaine 90g",
            categorie: "HG SI et classiques",
            annee: "2016",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:7,
            name:"24x32 grands carreaux de 96 pages 3",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 42,
            image: "../../livreeo/src/assets/calligraphe.png",
            marque: "Clairefontaine 90g",
            categorie: "HG SI et classiques",
            annee: "2016",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:4,
            name:"crayon de couleur 12 color'peps star",
            description:"crayon de couleur 12 color'peps star",
            prix: 29,
            image: "../../livreeo/src/assets/maped.png",
            marque: "Maped",
            categorie: "Matériel pour la cartographie",
            annee: "2014",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
          {
            id:5,
            name:"crayon de couleur 15 color'peps star",
            description:"crayon de couleur 12 color'peps star",
            prix: 50,
            image: "../../livreeo/src/assets/maped.png",
            marque: "Maped",
            categorie: "Matériel pour la cartographie",
            annee: "2015",
            edition: "Hachette",
            auteur: "Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca"
          },
        ],
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
          acc[livre.categorie] = acc[livre.categorie] || [];
          acc[livre.categorie].push(livre);
          return acc;
      }, {});
      },
      countLivreInCart(state){
        return state.cartItems.length;
      },
      calcTotalPanier(state){
        return state.plastificationTotal + state.cartItems.reduce((total, livre) => total + (livre.prix * livre.quantity), 0) + state.cartFournt.reduce((total, product) => total + (product.prix * product.quantity), 0); 
      }
    },
    actions:{
        async fetchLivres(){
            try 
            {
              const firstStore = useFirstStepStore();
              const requestBody = {
                id_ville: firstStore.SelectedCity,
                id_ecole: firstStore.SelectedSchool,
                id_classe: firstStore.SelectedClass,
                langues: firstStore.SelectedLangues
              };
              // console.log(requestBody);
              const response = await axios.post(
                "/choixdelivre",
                requestBody
              );
              const responseData = response.data;
              if (response.status === 200) {
                const books = responseData;
                this.livres = books;
                //localStorage.setItem('books', JSON.stringify(books));
                
              }
              else{
                console.log("not working !");
              }
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
