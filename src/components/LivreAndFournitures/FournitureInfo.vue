<template>
    <div class="flex flex-row md:flex-col items-start px-2 md:px-8 xl:px-12 space-x-3 md:space-x-0">
        <div class="w-36 md:w-40 lg:w-56">
            <img :src="props.options.variants?.[0]?.image?.path || data.faurnitures[0].variants?.[0]?.image?.path" alt="livre">
        </div>
        <div class="w-full flex flex-col text-[#5A7BA0] items-start md:pt-5">
            <p class="text-xs md:text-sm font-medium">Spécification école : </p>
            <span class="text-sm md:text-lg font-medium pb-2 md:pb-3">{{ props.options.name }}</span>
            <p class="text-xs md:text-sm font-medium pt-3">Caractéristiques  produit : </p>
            <p class="text-[8px] md:text-[11px] font-light">{{props.options.description}}</p>
        </div>
    </div> 
</template>
<script setup>
import { useSecondStepStore } from '../../stors/SecondStepStore'

const data = useSecondStepStore();
const props = defineProps({
    options: Object,
    firstProduct:  Object,
})

</script>