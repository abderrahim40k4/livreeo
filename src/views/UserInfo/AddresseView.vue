<template>
  <div class="bg-white-blue">
    <div class="container mx-auto max-w-7xl md:pt-16 pb-12 min-h-screen">
      <div class="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0">
        <div class="w-full sm:w-2/5 xl:w-1/2">
          <adresseForm />
        </div>
        <div class="w-full sm:w-3/5 xl:w-1/2 flex flex-col items-center space-y-5">
          <panierRecap />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import adresseForm from '../../components/userInfo/adresseForm.vue';
import panierRecap from '../../components/userInfo/panierRecap.vue';

</script>

