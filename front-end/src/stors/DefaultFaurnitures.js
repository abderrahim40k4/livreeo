import { defineStore } from "pinia";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [
            {
                id:1,
                name:"EASTPAK OVAL",
                prix: 360,
                image: "",
                categorie: "trousse",
                color: ["black", "white", "red"]
            }
        ]
    }),
    getters:{

    },
    actions:{

    }
});