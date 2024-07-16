<template>
    <div class="bg-[#E1EEF8] min-h-screen py-12">
        <div class="container mx-auto max-w-7xl text-dark-blue">
            <div class="flex flex-col items-center justify-center space-y-10 md:space-y-12">
                <!--title-->
                <div>
                    <h1 class="font-bold text-xl md:text-3xl">Choisir un moyen de payement </h1>
                </div>
                <div class="w-[85%] xl:w-[50%] flex flex-col space-y-4 md:space-y-5">
                    <div v-for="item in store.paymentM" :key="item.id" class="space-y-4 md:space-y-5">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2 md:space-x-4">
                                <input type="radio" name="payement" id="payement" v-model="selectedP" :value="item.id" class="w-6 h-6 md:w-9 md:h-9 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-dark-blue cursor-pointer">
                                <p class="text-sm md:text-base font-medium">{{ item.title }}</p>
                            </div>
                        </div>
                        <div class="w-full h-[1px] bg-dark-blue">
                        </div>
                    </div>
                </div>
                <!--Buttons-->
                <div class="w-full px-4 md:px-0 md:w-4/5 flex items-center justify-between pt-6 md:pt-8">
                    <div>
                        <router-link to="/informations-personnelles"><img src="../../assets/back-arraw.svg" class="h-10 md:h-12 cursor-pointer" alt="back"></router-link>
                    </div>
                    <div>
                        <router-link :to="selectedP === null ? '#' : '/carte-bancaire'">
                            <button 
                                :class="selectedP === null ? 'cursor-default pointer-events-none opacity-50' : ''"
                                class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out text-white-color rounded-full text-sm md:text-base font-semibold px-4 md:px-6 py-2 md:py-3"
                            >
                                Aller au paiement
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import {useFormStore} from '../../stors/FormStore';
import {useLastStepStore} from '../../stors/endpoint';

const store = useFormStore();
const secStr = useLastStepStore();

const selectedP = ref(null)

watch(selectedP, () =>{
    if(selectedP.value !== null){
        secStr.paymentM = selectedP.value;
    }
})
</script>
