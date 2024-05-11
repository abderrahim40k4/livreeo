<template>
    <div class="flex flex-row md:flex-col items-start px-2 md:px-8 xl:px-12 space-x-3 md:space-x-0">
        <div class="w-36 md:w-40 lg:w-56">
            <img :src="props.options.image" alt="livre">
        </div>
        <div class="w-full flex flex-col text-[#5A7BA0] items-start md:pt-5">
            <!-- <span class="text-sm md:text-lg font-medium pb-2 md:pb-3">{{ props.options.name }}</span> -->
            <p class="text-xs md:text-sm font-medium">Spécification école : </p>
            <p class="text-[8px] md:text-[11px] font-light">{{props.options.description}}</p>
            <p class="text-xs md:text-sm font-medium pt-3">Caractéristiques  produit : </p>
            <p class="text-[8px] md:text-[11px] font-light">Année : {{ props.options.annee }}</p>
            <p class="text-[8px] md:text-[11px] font-light">Edition : {{props.options.edition}}</p>
            <p class="text-[8px] md:text-[11px] font-light">{{ props.options.auteur }}</p>
        </div>
    </div> 
</template>
<script setup>
const props = defineProps({
    options: Array
})

</script>