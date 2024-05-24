<template>
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col md:flex-row items-center justify-center sm:px-6 xl:px-12">
            <div class="w-full flex flex-col items-center md:items-start justify-center md:w-1/2 xl:w-2/5 space-y-6 md:space-y-8 pt-12 md:pt-0">
                <h1 class="text-dark-blue text-[40px] leading-[45px] font-bold hidden md:block">
                    La rentrée nouvelle génération
                </h1>
                <h1 class="text-dark-blue text-[30px] leading-[35px] font-bold text-center block md:hidden">
                    La rentrée nouvelle génération
                </h1>
                <p class="text-dark-blue font-normal text-lg w-4/5 hidden md:block">
                    Votre liste scolaire officielle livrée sans file d'attente. 
                    Toutes vos fournitures dans un seul colis, sans aucun souci
                </p>
                <p class="text-dark-blue font-normal text-base text-center w-4/5 block md:hidden">
                    Votre liste scolaire officielle livrée sans file d'attente. 
                    Toutes vos fournitures dans un seul colis, sans aucun souci
                </p>
                <router-link to="/pack"><button class="bg-[#3273BA] hover:bg-[#3683d4dd] transition duration-200 ease-in-out text-white-color rounded-full py-3 px-6 xl:px-8 text-base xl:text-lg font-medium">Créez votre pack</button></router-link>
            </div>
            <div class="w-full md:w-1/2 xl:w-3/5 flex items-center justify-end py-6 md:py-0">
                <img src="../../assets/Boxes.svg" class="h-[400px] xl:h-[500px]" alt="boxes">
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <div @click="smoothScroll('#comm-cm')" class="flex items-center justify-center w-6 h-12 ring-1 ring-dark-blue rounded-full cursor-pointer hover:bg-[#eeeeee] transitio duration-200 ease-in-out">
                <img src="../../assets/arraw.svg" class="h-5 w-5 animate-bounce" alt="arraw">
            </div>
        </div>
    </div>
</template>
<script setup>
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style>


</style>