<template>
    <div class="bg-[#F9FDFE]">
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col xl:flex-row items-start justify-center px-6 md:px-8 xl:px-12 py-14 space-y-16 xl:space-y-0">
            <div class="flex flex-col items-start w-full xl:w-1/2 text-dark-blue px-4 xl:px-0">
                <div class="pb-14 md:pb-20 space-y-4">
                    <h2 class="text-xl lg:text-3xl font-bold">Contactez-Nous</h2>
                    <p class="text-xs md:text-sm font-normal w-3/4">
                        Si vous rencontrez des difficultés à passer votre commande
                        merci de nous <span class="font-bold">appeler sur le numéro</span> suivant:
                    </p>
                    <p class="text-base font-semibold md:text-lg">+212 663 635 204</p>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-start space-x-1">
                        <img src="../assets/Phone.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base">+212 522 91 93 </p>
                    </div>
                    <div class="flex items-center justify-start space-x-1">
                        <img src="../assets/Contact.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base">contact@livreeo.ma </p>
                    </div>
                    <div class="flex items-start justify-start space-x-1">
                        <img src="../assets/Location.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base xl:w-3/5">
                            Agroparc Km 5, Route d'Azemmour 
                            Dar Bouazza, Casablanca 20220. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full xl:w-1/2">
                <form @submit.prevent="" class="space-y-5 text-dark-blue">
                    <div class="md:flex md:space-x-5 space-y-5 md:space-y-0">
                        <input type="text" name="nom" placeholder="Nom Complet" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:font-light placeholder:text-sm text-sm md:text-base pl-4 h-12 md:h-16 w-full">
                        <input type="number" name="telephone" placeholder="Numéro de Téléphone" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full">
                    </div>
                    <div class="flex">
                        <input type="text" name="mail" placeholder="Adresse E-mail" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full">
                    </div>
                    <div class="flex">
                        <textarea name="message" rows="6" placeholder="Message" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 pt-4 placeholder:font-light w-full resize-none"></textarea>
                    </div>
                    <div type="button" class="flex w-fit pt-3">
                        <div class="flex items-center justify-between cursor-pointer bg-dark-blue hover:bg-[#004179e5] font-light text-base md:text-lg text-white-color px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                            <span>Envoyer</span>
                            <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    <SiteMapComponent />
</template>

<script setup>
import SiteMapComponent from '../components/SiteMapComponent.vue'

</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
/* input[type=number] {
  -moz-appearance: textfield;
} */

</style>