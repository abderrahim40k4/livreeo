<template>
  <div class="w-full flex flex-col pt-12 pl-8 sm:pl-16 xl:pl-28">
    <div>
      <router-link to="/mode-livraison"><img src="../../assets/back-arraw.svg" class="h-10" alt="back"></router-link>
    </div>
    <div class="flex flex-col pt-10">
      <h3 class="font-bold text-dark-blue text-lg pb-5">Adresse de livraison </h3>
      <form class="flex flex-col space-y-4">
        <input type="text" placeholder="Adresse" v-model="store.addresse" class="py-4 px-6 w-72 text-dark-blue rounded-full text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]" required>
        <input type="text" placeholder="Ville" v-model="store.city"class="py-4 px-6 rounded-full w-72 text-dark-blue text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]" required>
        <input type="text" placeholder="Info complementaire" v-model="store.comment" class="py-4 px-6 rounded-full w-72 text-dark-blue text-base focus:bg-[#E4F3FF] focus:outline-none focus:ring-1 focus:ring-[#1E94FD] placeholder:text-[#6192BF]">
        <div class="pt-6">
          <router-link 
            :to="store.city === '' || store.addresse === '' ? '#' : '/informations-personnelles'"
          >
          <input 
            type="submit"
            value="Aller au paiement" 
            :class="store.city === '' || store.addresse === '' ? 'cursor-default pointer-events-none opacity-50' : ''"
            class="bg-dark-blue text-white-color font-semibold text-base px-9 cursor-pointer rounded-full py-3 hover:bg-[#004179e5] transition duration-200 ease-in">
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { useLastStepStore } from '../../stors/endpoint';
  const store = useLastStepStore();
</script>
