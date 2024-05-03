<template>
    <div class="bg-white-blue h-screen">
        <div class="container mx-auto max-w-7xl text-dark-blue">
            <div class="w-full flex items-center justify-center py-16">
                <div class="px-4 md:px-0 w-full md:w-3/4 flex flex-col items-center space-y-8 md:space-y-12">
                    <h3 class="font-bold text-base md:text-xl">Merci pour votre commande !</h3>
                    <div class="w-fit flex items-center justify-start rounded-full space-x-6 md:space-x-8 border-[2px] border-dark-blue px-2 py-2">
                        <img src="../../assets/done.svg" class="h-8 md:h-10" alt="">
                        <p class="font-bold text-xs md:text-sm pr-6 md:pr-10">Payement validé</p>
                    </div>
                    <br>
                    <div class="w-full lg:w-3/4 flex flex-col md:flex-row items-center border-[3px] border-dark-blue rounded-2xl md:rounded-full md:px-5">
                        <div class="w-full md:w-1/2 flex items-center justify-around">
                            <div class="w-1/2 md:w-fit flex flex-col items-center space-y-1 py-8">
                                <p class="text-[#000] font-bold text-xs md:text-sm">Numéro de commande</p>
                                <p class="font-medium text-xs md:text-sm">5675</p>
                            </div>
                            <div class="bg-dark-blue w-[3px] h-14"></div>
                            <div class="w-1/2 md:w-fit flex flex-col items-center space-y-1 py-8">
                                <p class="text-[#000] font-bold text-xs md:text-sm">Date</p>
                                <p class="font-medium text-xs md:text-sm">Avr 02, 2023</p>
                            </div>
                            <div class="bg-dark-blue w-[3px] h-14 hidden md:flex"></div>
                        </div>
                        <div class="w-full md:w-1/2 flex items-center justify-around">
                            <div class="w-1/2 md:w-fit flex flex-col items-center space-y-1 py-8">
                                <p class="text-[#000] font-bold text-xs md:text-sm">Total</p>
                            <p class="font-medium text-xs md:text-sm">2650 MAD</p>
                            </div>
                            <div class="bg-dark-blue w-[3px] h-14"></div>
                            <div class="w-1/2 md:w-fit flex flex-col items-center space-y-1 py-8">
                                <p class="text-[#000] font-bold text-xs md:text-sm">Payment Method</p>
                                <p class="font-medium text-xs md:text-sm">Carte bancaire</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-16 pt-4">
                        <button class="border-[2px] border-dark-blue hover:bg-[#c0e4ff] transition duration-200 ease-in flex items-center font-semibold space-x-2 py-2 px-2 rounded-full pr-5 text-sm md:text-base">
                            <img src="../../assets/download-a.svg" class="h-8 md:h-10" alt="">
                            <span>Téléchargez votre facture</span>
                        </button>
                        <router-link to="/pack-selection"><button class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out flex text-white-color items-center font-semibold space-x-2 py-2 px-2 rounded-full pr-5 text-sm md:text-base">
                            <img src="../../assets/start-over.svg" class="h-8 md:h-10" alt="">
                            <span>Choisir un autre PACK</span>
                        </button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { useSecondStepStore } from '../../stors/SecondStepStore'
// import { useEndPoint } from "../../stors/endpoint";
// import { computed } from 'vue'

// const liver = useSecondStepStore();
// const user = useEndPoint();

// const payment = user.type_paiement.type.desc;
// Date.prototype.toShortFormat = function() {
// const monthNames = ["Jan", "Feb", "Mar", "Apr",
//                     "May", "Jun", "Jul", "Aug",
//                     "Sep", "Oct", "Nov", "Dec"];
// const day = this.getDate();
// const monthIndex = this.getMonth();
// const monthName = monthNames[monthIndex];
// const year = this.getFullYear();
// return `${monthName} ${day},${year}`;  
// }
// let today = new Date();


// const total = computed(() => {
//   return fourniture.total + liver.total + liver.plastificationTotal;
// })

</script>
