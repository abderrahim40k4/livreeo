<template>
    <div class="bg-white-blue h-screen py-12">
        <div class="container mx-auto max-w-7xl text-[#000]">
            <div class="w-full flex flex-col items-center">
                <div class="w-[90%] sm:w-3/5 lg:w-2/5">
                    <div class="flex items-center space-x-3">
                        <div class="bg-dark-blue w-6 h-6 rounded-full flex items-center justify-center">
                            <div class="bg-white-color w-3 h-3 rounded-full"></div>
                        </div>
                        <p class="text-sm md:text-base font-medium">Carte Bancaire</p>
                    </div>
                    <div class="flex flex-col pt-8">
                        <div class="pb-2 pl-2">
                            <h1 class="text-sm md:text-base font-medium">Nom <span class="text-dark-blue">*</span></h1>
                            <p class="text-[#373737] font-medium text-[8px] md:text-xs">Vérifiez que vous indiquez le nom complet affiché sur la carte</p>
                        </div>
                        <input type="text" class="text-sm md:text-base py-2 md:py-4 px-3 md:px-6 text-dark-blue rounded-full bg-[#F0F9FF] focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD]">
                    </div>
                    <div class="flex flex-col pt-5">
                        <div class="pb-2 pl-2">
                            <h1 class="text-sm md:text-base font-medium">Numero de la carte<span class="text-dark-blue">*</span></h1>
                        </div>
                        <input type="text" class="py-2 md:py-4 px-3 md:px-6 text-dark-blue rounded-full text-sm md:text-base bg-[#F0F9FF] focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD]">
                    </div>
                    <div class="w-full flex items-center justify-between pt-5">
                        <div class="w-[50%] flex flex-col">
                            <div class="pb-2 pl-2">
                                <h1 class="text-sm md:text-base font-medium">Date d'expiration <span class="text-dark-blue">*</span></h1>
                            </div>
                            <input type="text" class="py-2 md:py-4 px-3 md:px-6 text-dark-blue rounded-full text-sm md:text-base bg-[#F0F9FF] focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD]">
                        </div>
                        <div class="w-[40%] flex flex-col">
                            <div class="pb-2 pl-2">
                                <h1 class="text-sm md:text-base font-medium">Code de sécurité<span class="text-dark-blue">*</span></h1>
                            </div>
                            <input type="number" placeholder="CVV" class="py-2 md:py-4 px-3 md:px-6 text-dark-blue rounded-full text-sm md:text-base bg-[#F0F9FF] focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD]">
                        </div>
                    </div>
                </div>
                <!--Buttons-->
                <div class="w-full px-4 md:px-0 md:w-4/5 flex items-center justify-between pt-10">
                    <div>
                        <router-link to="/moyen-de-payement"><img src="../../assets/back-arraw.svg" class="h-10 md:h-12 cursor-pointer" alt="back"></router-link>
                    </div>
                    <div>
                        <router-link to="/facture"><button class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out text-white-color rounded-full text-sm md:text-base font-semibold px-4 md:px-6 py-2 md:py-3">Aller au paiement</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
//     import {ref } from 'vue'
//     import { useEndPoint } from '../../stors/endpoint';
//     const store = useEndPoint();
//     const mounths = [1,2,3,4,5,6,7,8,9,10,11,12];

//     const today = new Date();
//     const year = today.getUTCFullYear();
//     let years = [year];
//     function getYears(){
//         for(let i = 0; i < 11; i++) {
//             years.push(year+i);
//         }
//     }
//     getYears();

//     const formData = ref({
//   fullName: '',
//   cardNum: '',
//   EXPDate: {
//     mounth:0,
//     year:null,
//   },
//   cvv:null,
// });


// const submitForm = () => {
//     store.type_paiement.nom =formData.value.fullName
//     store.type_paiement.numero_carte = formData.value.cardNum
//     store.type_paiement.date_expiration = `${formData.value.EXPDate.year} \ ${formData.value.EXPDate.mounth}`
//     store.type_paiement.code_securite = formData.value.cvv
//   // You can perform further actions with the form data here, such as sending it to a server
// };
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