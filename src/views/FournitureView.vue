<template>
  <div class="bg-[#F1F1F1] w-full"> 
    <div class="w-full flex flex-col items-center justify-center space-y-2 pt-4 md:pt-8 2xl:pt-10 text-dark-blue">
      <h1 class="w-2/3 md:w-1/3 2xl:w-1/4 text-xl md:text-4xl font-bold text-center">
        Qui dis achat, dis promotion.
      </h1>
      <p class="w-2/3 md:w-1/3 2xl:w-1/4 text-center font-medium text-xs md:text-sm">
        Pour tout achat d'une trousse et d'un sac Easpack*, profitez d'une réduction de 10 % !
      </p>
    </div>
    <div class="w-full flex items-center justify-center pr-6 md:pr-12">
      <img src="../assets/boy-backpack.png" class="h-[250px] md:h-[400px]" alt="boy">
    </div>
  </div>

  <div class="container mx-auto max-w-7xl pt-6 md:pt-12 pb-5 md:pb-6">
    <div class="w-full flex items-center justify-center space-x-5 sm:space-x-10 md:space-x-28 pb-10">
        <router-link to="/Fourniture/cartables"><smallCardFournt :cart="cartCartable" name="Cartables" :image="cartabl"/></router-link>
        <router-link to="/Fourniture/trousses"><smallCardFournt :cart="cartTrousse" name="Trousses" :image="trouse"/></router-link>
        <router-link to="/Fourniture/calculatrices"><smallCardFournt :cart="cartCalcul" name="Calculatrices" :image="calculatrice"/></router-link>
    </div>

    <ProductsFourniture />

    <div class="w-full flex items-center justify-between pt-6 px-6">
      <div>
        <router-link to="/type-fournitures">
          <img src="../assets/back-home.svg" class="h-7 md:h-10 pl-3 md:pl-6 cursor-pointer" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/bascket">
          <button class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out text-white-color text-[10px] md:text-base font-medium rounded-full py-1.5 md:py-3 px-3 md:px-7">Aller au paiement</button>
        </router-link>
      </div>
    </div>
    
  </div>
  <SiteMapComponent />
</template>
<script setup>
import { computed, onMounted } from "vue"
import smallCardFournt from "../components/DefaultFaurniture/smallCardFournt.vue"
import ProductsFourniture from "../components/DefaultFaurniture/ProductsFourniture.vue"
import SiteMapComponent from "../components/SiteMapComponent.vue"
import { useDefaultFaurnitures } from "../stors/DefaultFaurnitures"

import cartabl from '../assets/cartabl.svg';
import trouse from '../assets/trouse.svg';
import calculatrice from '../assets/calculatrice.svg';

const data = useDefaultFaurnitures();
onMounted(() => {
  data.fetchProducts("/articles?types=EXTRA");
});
// const products = computed(() => data.getProducts);

const cartCartable = computed(() => {
  const products = data.panierProducts.filter(item => item.category === "cartables");
  return products.length;
});

const cartCalcul = computed(() => {
  const products = data.panierProducts.filter(item => item.category === "calculatrices");
  return products.length;
});

const cartTrousse = computed(() => {
  const products = data.panierProducts.filter(item => item.category === "trousses");
  return products.length;
});


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
