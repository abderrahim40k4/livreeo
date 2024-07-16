import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useLastStepStore = defineStore("lastStepStore", {
    state: () => ({
        reduction: 0,
        promoCode: '',
        shippingType: '',
        shippingPrice: 0,
        addresse: '',
        city: '',
        comment: '',
        NomComplet: '',
        PhoneNumber: '',
        mail: '',
        paymentM: '',
    }),
    getters:{
    },
    actions:{
        async fetchPromoCode(code){
            try {
              const data = await axios.post('/promo-codes/verify', { code });
              this.reduction = data.data.code.reduction_rate
              this.promoCode = data.data.code.code
              //console.log(this.reduction);
            }
            catch (error) {
              console.log(error)
            }
        },
    }
});