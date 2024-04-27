<template>
    <div class="w-full flex flex-col pt-12 pl-8 sm:pl-16 xl:pl-28">
    <div>
      <router-link to="/adresse-de-livraison"><img src="../../assets/back-arraw.svg" class="h-10" alt="back"></router-link>
    </div>
    <div class="flex flex-col pt-10">
      <h3 class="font-bold text-dark-blue text-lg pb-5">Informations personnelles </h3>
      <form class="flex flex-col space-y-4">
        <input type="text" placeholder="Nom Complet" class="py-4 px-6 w-72 text-dark-blue rounded-full text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]">
        <input type="number" placeholder="Numéro de Télèphone" class="py-4 px-6 rounded-full w-72 text-dark-blue text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]">
        <input type="text" placeholder="E-mail" class="py-4 px-6 rounded-full w-72 text-dark-blue text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]">
        <input type="text" placeholder="Confirmation E-mail " class="py-4 px-6 rounded-full w-72 text-dark-blue text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]">
        <div class="pt-6">
          <input type="button" value="Aller au paiement" class="bg-dark-blue text-white-color font-semibold text-base px-9 cursor-pointer rounded-full py-3 hover:bg-[#004179e5] transition duration-200 ease-in">
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {ref } from 'vue'
// import { useEndPoint } from '../../stors/endpoint';
// const store = useEndPoint();

// const formData = ref({
//   name: '',
//   phoneNum: '',
//   email: '',
//   confirmEmail:''
// });

// const submitForm = () => {
//   store.formulaire.nom = formData.value.name
//   store.formulaire.numberPhone = formData.value.phoneNum
//   store.formulaire.email = formData.value.email
//   // You can perform further actions with the form data here, such as sending it to a server
// };
</script>