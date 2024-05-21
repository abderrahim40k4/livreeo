<template>
  <div class="font-Poppins">
    <div class="sticky right-0 left-0 z-40 top-0">
      <CoponComponent v-if="showNavBar"/>
      <NavBarComponent v-if="showNavBar"/>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouterView } from 'vue-router';
import NavBarComponent from './components/NavBarComponent.vue';
import CoponComponent from './components/home/CoponComponent.vue';


const route = useRoute();

const showNavBar = computed(() => {
  return !route.meta.hideNavBar;
});

</script>

<style scoped>

</style>
