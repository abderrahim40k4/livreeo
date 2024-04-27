<template>
  <div class="bg-white-blue">
    <div class="container mx-auto max-w-7xl md:pt-16 pb-12 min-h-screen">
      <div class="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0">
        <div class="w-full sm:w-2/5 xl:w-1/2">
          <userInfo />
        </div>
        <div class="w-full sm:w-3/5 xl:w-1/2 flex flex-col items-center space-y-5">
          <panierRecap />
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import {ref } from 'vue'
import panierRecap from '../../components/userInfo/panierRecap.vue'
import userInfo from '../../components/userInfo/userInfo.vue'
// const formData = ref({
//   adress: '',
//   ville: '',
//   moreInfo: ''
// });

// const submitForm = () => {
//   console.log('Form Data:', formData.value);
//   // You can perform further actions with the form data here, such as sending it to a server
// };
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f0f0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6192bf;
  border-radius: 5px;
}
</style>