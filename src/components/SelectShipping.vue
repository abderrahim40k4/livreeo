<template>
    <!--Cards-->
    <div class="hidden w-[85%] xl:w-[70%] md:flex flex-col space-y-4">
        <div v-for="item in props.shippingTypes" :key="item" class="space-y-4">  
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <input type="radio" name="livraison" id="livraison" @change="selectShipping(item.id, item.price)" class="w-9 h-9 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-dark-blue cursor-pointer">
                    <div class="flex flex-col">
                        <p class="text-base font-semibold">{{ item.title }}</p>
                        <span class="text-[9px] font-normal">{{ item.description }}</span>
                    </div>
                </div>
                <div>
                    <p class="text-base font-medium">{{ item.delay }} jours</p>
                </div>
                <div>
                    <p class="text-2xl font-semibold">{{ item.price === '0.00' ? 'Free' : parseFloat(item.price) + ' MAD' }}</p>
                </div>
            </div>

            <div class="w-full h-[1px] bg-dark-blue"></div>
        </div>
    </div>

    <!--Mobile version-->
    <div v-for="item in props.shippingTypes" :key="item" class="flex items-center flex-col w-full md:hidden space-y-3">
        <div class="w-3/4 rounded-2xl bg-dark-blue text-white-color px-4 py-4 space-y-12">
            <div class="flex space-x-3">
                <input type="radio" name="livraison" id="livraison" @change="selectShipping(item.id)" class="w-8 h-8 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-light-blue cursor-pointer">
                <div class="flex flex-col">
                    <p class="text-lg font-semibold">{{ item.title }}</p>
                    <span class="text-[10px] font-normal">{{ item.description }}</span>
                </div>
            </div>
            <div class="w-full flex items-end justify-between">
                <div class="w-1/2">
                    <p class="text-sm font-medium">{{ item.delay }} jours</p>
                </div>
                <div class="w-1/2 flex items-center justify-end">
                    <p class="text-xl font-semibold">{{ item.price === '0.00' ? 'Free' : parseFloat(item.price) + ' MAD' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {watchEffect, ref, defineEmits} from 'vue'
import { useLastStepStore } from '../stors/endpoint'

const emit = defineEmits(['update:selectedT']);
const store = useLastStepStore();

const props = defineProps({
    shippingTypes: {
        type: Array,
        default: []
    }
})
watchEffect(() => {
    console.log(props.shippingTypes);
});
const selectedT = ref('');
const selectShipping = (id, price) => {
    store.shippingPrice = price;
    selectedT.value = id;
    emit('update:selectedT', id);
};


</script>