<template>
    <div class="flex flex-row md:flex-col items-start px-2 md:px-8 xl:px-12 space-x-3 md:space-x-0">
        <div class="w-36 md:w-40 lg:w-56">
            <img :src="livre.variants?.[0]?.image?.path || data.livres[0].variants?.[0]?.image?.path" alt="livre">
        </div>
        <div class="w-full flex flex-col text-[#5A7BA0] items-start">
            <span class="text-sm md:text-lg font-medium pb-2 md:pb-3">{{ livre.name }}</span>
            <p class="text-[8px] md:text-xs font-light">ISBN : 978-2013953115</p>
            <p class="text-[8px] md:text-xs font-light">Année : 2016</p>
            <p class="text-[8px] md:text-xs font-light">Edition : Hachette</p>
            <p class="text-[8px] md:text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
        </div>
    </div> 
</template>
<script setup>
import { computed } from 'vue';
import { useSecondStepStore } from '../../stors/SecondStepStore'

const data = useSecondStepStore();

const props = defineProps({
    firstBook: Object,
    options: Object
})

const livre = computed(() => {
    if(!props.options){
        return props.firstBook
    }
    return props.options
});

</script>