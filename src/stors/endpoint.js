import { defineStore } from "pinia";
import { useSecondStepStore } from './SecondStepStore'; 
import { useDefaultFaurnitures } from './DefaultFaurnitures';

import axios from "../lib/axios";

export const useLastStepStore = defineStore("lastStepStore", {
    state: () => ({
        reduction: 0,
        promoCode: '',
        shippingType: '',
    }),
    getters:{
        // calcTotal(state){
        //     const data = useDefaultFaurnitures();
        //     const secData = useSecondStepStore();
        //     state.total = data.total + secData.total;
        //     return state.total;
        // }
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