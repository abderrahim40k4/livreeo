<template>
    <div class="container mx-auto max-w-7xl text-dark-blue space-y-10">
        <div class="flex flex-col items-center mt-10 lg:mt-16 space-y-10">
            <h1 class="font-bold text-xl lg:text-3xl">Listes Scolaires</h1>
            <p class="text-center text-base lg:text-lg font-medium px-4">
                Trouvez la liste scolaire téléchargeable de votre enfant en 3 clics!
            </p>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-start justify-evenly space-y-6 md:space-y-0">
            <InputFaildComponentes labale="Ville :" text="Casablanca"/>
            <InputFaildComponentes labale="École :" text="Lycée lyautey "/>
            <InputFaildComponentes labale="Classe :" text="5 ème "/>
        </div>
        <div class="flex items-center justify-center py-8 md:py-12">
            <button class="bg-dark-blue rounded-full text-white-color text-base font-semibold px-10 py-2 hover:bg-[#004179e5] transition duration-200 ease-in-out">Suivant</button>
        </div>
    </div>
</template>
<script setup>
import InputFaildComponentes from '../components/listsh/InputFaildComponentes.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
</script>