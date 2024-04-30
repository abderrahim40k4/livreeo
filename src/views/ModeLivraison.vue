<template>
    <div class="bg-[#E1EEF8] h-screen py-12">
        <div class="container mx-auto max-w-7xl text-dark-blue">
            <div class="flex flex-col items-center justify-center space-y-10 md:space-y-16">
                <!--title-->
                <div>
                    <h1 class="font-bold text-xl md:text-3xl">Choisir le mode de livraison </h1>
                </div>

                <!--Cards-->
                <div class="hidden w-[85%] xl:w-[70%] md:flex flex-col space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-9 h-9 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-dark-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-base font-semibold">Livraison standard</p>
                                <span class="text-[9px] font-normal">* Obligatoire pour le 3X sans frais</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-base font-medium">2 semaines avant la rentrée</p>
                        </div>
                        <div>
                            <p class="text-2xl font-semibold">19 MAD</p>
                        </div>
                    </div>

                    <div class="w-full h-[1px] bg-dark-blue">
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-9 h-9 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-dark-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-base font-semibold">Livraison Flash</p>
                                <span class="text-[9px] font-normal">* Uniquement pour les articles “fournitures”</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-base font-medium">4 jours</p>
                        </div>
                        <div>
                            <p class="text-2xl font-semibold">30 MAD</p>
                        </div>
                    </div>

                    <div class="w-full h-[1px] bg-dark-blue">
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-9 h-9 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-dark-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-base font-semibold">Livraison Express</p>
                            </div>
                        </div>
                        <div>
                            <p class="text-base font-medium">1 semaine</p>
                        </div>
                        <div>
                            <p class="text-2xl font-semibold">76 MAD</p>
                        </div>
                    </div>
                </div>

                <!--Mobile version-->
                <div class="flex items-center flex-col w-full md:hidden space-y-3">
                    <div class="w-3/4 rounded-2xl bg-dark-blue text-white-color px-4 py-4 space-y-12">
                        <div class="flex space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-8 h-8 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-light-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-lg font-semibold">Livraison standard</p>
                                <span class="text-[10px] font-normal">* Obligatoire pour le 3X sans frais</span>
                            </div>
                        </div>
                        <div class="w-full flex items-end justify-between">
                            <div class="w-1/2">
                                <p class="text-sm font-medium">2 semaines avant la rentrée</p>
                            </div>
                            <div class="w-1/2 flex items-center justify-end">
                                <p class="text-xl font-semibold">19 MAD</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/4 rounded-2xl bg-dark-blue text-white-color px-4 py-4 space-y-12">
                        <div class="flex space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-8 h-8 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-light-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-lg font-semibold">Livraison Flash</p>
                                <span class="text-[10px] font-normal">* Uniquement pour les articles “fournitures”</span>
                            </div>
                        </div>
                        <div class="w-full flex items-end justify-between">
                            <div class="w-1/2">
                                <p class="text-sm font-medium">4 jours</p>
                            </div>
                            <div class="w-1/2 flex items-center justify-end">
                                <p class="text-xl font-semibold">30 MAD</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/4 rounded-2xl bg-dark-blue text-white-color px-4 py-4 space-y-12">
                        <div class="flex space-x-3">
                            <input type="radio" name="livraison" id="livraison" class="w-8 h-8 bg-[#E1EEF8] appearance-none border border-dark-blue rounded-full checked:bg-light-blue cursor-pointer">
                            <div class="flex flex-col">
                                <p class="text-lg font-semibold">Livraison Express</p>
                            </div>
                        </div>
                        <div class="w-full flex items-end justify-between">
                            <div class="w-1/2">
                                <p class="text-sm font-medium">1 semaine</p>
                            </div>
                            <div class="w-1/2 flex items-center justify-end">
                                <p class="text-xl font-semibold">76 MAD</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Buttons-->
                <div class="w-full px-4 md:px-0 md:w-4/5 flex items-center justify-between pt-6 md:pt-8">
                    <div>
                        <router-link to="/bascket"><img src="../assets/back-arraw.svg" class="h-10 md:h-12 cursor-pointer" alt="back"></router-link>
                    </div>
                    <div>
                        <router-link to="/adresse-de-livraison"><button class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out text-white-color rounded-full text-sm md:text-base font-semibold px-4 md:px-6 py-2 md:py-3">Aller au paiement</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>