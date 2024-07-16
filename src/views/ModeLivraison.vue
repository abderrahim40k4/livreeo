<template>
    <div class="bg-[#E1EEF8] min-h-screen py-12">
        <div class="container mx-auto max-w-7xl text-dark-blue">
            <div class="flex flex-col items-center justify-center space-y-10 md:space-y-16">
                <!--title-->
                <div>
                    <h1 class="font-bold text-xl md:text-3xl">Choisir le mode de livraison </h1>
                </div>

                <SelectShipping 
                :shippingTypes="shippingTypes"
                v-model:selectedT="selectedT"
                />

                <!--Buttons-->
                <div class="w-full px-4 md:px-0 md:w-4/5 flex items-center justify-between pt-6 md:pt-8">
                    <div>
                        <router-link to="/bascket"><img src="../assets/back-arraw.svg" class="h-10 md:h-12 cursor-pointer" alt="back"></router-link>
                    </div>
                    <div>
                        <router-link to="/adresse-de-livraison">
                            <button
                            @click="store.shippingType = selectedT.toString()"
                            :class="selectedT === '' ? 'cursor-default pointer-events-none opacity-50' : ''" 
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
import { computed, ref } from 'vue';
import { useFormStore } from '../stors/FormStore';
import { useLastStepStore } from '../stors/endpoint';
import SelectShipping from '../components/SelectShipping.vue';

const data = useFormStore();
const store = useLastStepStore();
data.fetchShipping();
const shippingTypes = computed(() => data.shipping.shipping_types);
const selectedT = ref(''); 

</script>

<style scoped>

</style>