<template>
    <div class="flex flex-row xl:flex-col items-start px-2 md:px-8 xl:px-12 space-x-2 md:space-x-0">
        <div class="w-1/3 xl:w-full flex items-center justify-center xl:pt-4 xl:pb-2"><!--w-36 md:w-40 lg:w-64-->
            <img :src="props.options.variants?.[0]?.image?.path" class="h-28 md:h-40 xl:h-64" alt="product">
        </div>
        <div class="w-2/3 xl:w-full flex flex-col text-[#5A7BA0] items-start">
            <div class="grid grid-cols-5 gap-x-1 xl:gap-x-2 gap-y-1 pb-1.5 xl:pb-2">
                <div v-for="item in props.options.variants" :key="item.color" class="flex items-center">
                    <div class="flex items-center justify-center">
                        <input type="radio" name="checkbox-col" :id="item + 'prinfo'" class="hidden" v-model="checkedColor" :value="item.color">
                        <label class="relative cursor-pointer" :for="item + 'prinfo'">
                            <div v-if="checkedColor !== item.color" :style="{ backgroundColor: item.color }" class="w-5 h-5 xl:w-8 xl:h-8 rounded-full"></div>
                            <div v-if="checkedColor === item.color" :style="{ backgroundColor: item.color }" class="flex items-center justify-center w-7 h-7 xl:w-10 xl:h-10 rounded-full">
                                <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 xl:w-8 xl:h-8 rounded-full">
                                    <svg class="h-1.5 xl:h-2.5" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.17143L4.14286 7L9 1" :stroke="item.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <span class="text-sm md:text-lg font-medium pb-2">{{ props.options.name }}</span>
            <p class="text-[8px] md:text-xs font-light">ISBN : 978-2013953115</p>
            <p class="text-[8px] md:text-xs font-light">Année : 2016</p>
            <p class="text-[8px] md:text-xs font-light">Edition : Hachette</p>
            <p class="text-[8px] md:text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
        </div>
    </div> 
</template>
<script setup>
import { ref, watch, getCurrentInstance, computed  } from 'vue'



const props = defineProps({
    options: Object,
})

const checkedColor = ref('');
const { emit } = getCurrentInstance();


watch(() => props.options, () => {
    // Set the default value of checkedColor to the first color in props.options.color
    if (props.options.variants && props.options.variants.length > 0) {
        checkedColor.value = props.options.variants[0].color;
        emit('colorChange', checkedColor.value);
    }
}, { immediate: true })

watch(() => checkedColor.value, () => {
    emit('colorChange', checkedColor.value);
})

</script>