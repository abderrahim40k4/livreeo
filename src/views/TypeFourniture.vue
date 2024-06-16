<template>
    <div class="container mx-auto max-w-7xl text-dark-blue">
        <div class="w-full flex items-center justify-center">
            <div class="w-full flex flex-col items-center">
                <div class="w-full flex items-center justify-center md:justify-evenly pt-10 2xl:pt-16">
                    <div class="w-1/5 flex items-center justify-center">
                        <router-link to="/Livres-Fourniture">
                            <div class="cursor-pointer">
                                <img src="../assets/back-arraw.svg" class="w-6 h-6 md:w-9 md:h-9" alt="">
                            </div>
                        </router-link>
                    </div>
                    <div class="w-3/5 text-center">
                        <h3 class="text-sm md:text-xl font-semibold leading-6">Souhaitez-vous compléter votre commande ?</h3>
                    </div>
                    <div class="w-1/5 flex items-center justify-center">
                        <div class="w-6 md:w-9 h-6 md:h-9 flex items-center justify-center rounded-full border-[2px] border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                            <router-link to="/bascket">
                                <img src="../assets/close.svg" class="h-3 md:h-5" alt="close">
                            </router-link>
                        </div>
                    </div>
                </div> 
                <div class="w-4/5 flex flex-col md:flex-row items-center justify-center md:justify-between pt-10 md:pt-16 pb-4 space-y-6 md:space-y-0">
                    <div class="flex flex-col items-center justify-center space-y-5 md:space-y-10">
                        <img src="../../calculatrice.png" class="h-56 md:h-52" alt="calculatrice">
                        <router-link :to="{ name: 'Accessoires Scolaires', params: { categorie: 'calculatrices' }}"><button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Calculatrices</button></router-link>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-10">
                        <img src="../assets/trousse.png" class="h-56 md:h-52" alt="trousse">
                        <router-link :to="{ name: 'Accessoires Scolaires', params: { categorie: 'trousses' }}"><button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Trousses</button></router-link>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-10">
                        <img src="../assets/cartable.png" class="h-56 md:h-52" alt="cartable">
                        <router-link :to="{ name: 'Accessoires Scolaires', params: { categorie: 'cartables' }}"><button class="bg-white-blue hover:bg-[#e8f4fa] transition duration-200 ease-in-out text-xs md:text-base font-semibold py-2 md:py-3 min-w-40 rounded-full">Cartables</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
