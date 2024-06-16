<template>
    <div class="w-full lg:w-[60%] flex flex-col items-center justify-center space-y-8">
        <div class="bg-white-color w-[90%] md:w-3/4 lg:w-[60%] min-h-[350px] md:h-[440px] rounded-3xl pt-4 md:pt-8 pb-10">
            <h1 class="text-dark-blue font-bold text-2xl md:text-4xl lg:text-[40px] pb-3 md:pb-5 pl-5 md:pl-8">Panier</h1>
            <div class="max-h-[290px] w-[98%] md:w-[92%] overflow-y-scroll">
                <div class="flex flex-col w-full items-start justify-center px-5 md:px-8 space-y-5">
                    <!--Livre-->
                    <div v-if="getLivres" class="w-full flex items-center justify-between">
                        <div>
                            <img src="../../assets/latin.png" class="w-10 md:w-12" alt="livre">
                        </div>
                        <div class="flex flex-col text-dark-blue space-y-1">
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold">Manuels</p>
                            </div>
                            <router-link to="/Livres-Fourniture">
                                <div class="border-[0.5px] border-[#6192BF] w-14 md:w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                    <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{getLivres}} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div>
                            <button @click="deleteLivre()" class="uppercase text-dark-blue text-[8px] md:text-[10px] pt-6 pl-3">supprimer</button>
                        </div>
                        <div>
                            <p class="text-xs md:text-[13px] font-bold text-dark-blue pt-5">{{getTotalLivre + secondData.plastificationTotal}},00 <span class="font-medium">MAD</span></p>
                        </div>

                    </div>

                    <!--fournitures-->
                    <div v-if="getProducts" class="w-full flex items-center justify-between">
                        <div>
                            <img src="../../assets/Calligraphe.svg" class="w-10 md:w-12" alt="livre">
                        </div>
                        <div class="flex flex-col text-dark-blue space-y-1">
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold">Fournitures</p>
                            </div>
                            <router-link to="/Livres-Fourniture">
                                <div class="border-[0.5px] border-[#6192BF] w-14 md:w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                    <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getProducts }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div>
                            <button @click="deleteFaurn()" class="uppercase text-dark-blue text-[8px] md:text-[10px] pt-6 pl-3">supprimer</button>
                        </div>
                        <div>
                            <p class="text-xs md:text-[13px] font-bold text-dark-blue pt-5">{{getTotalProduct}},00 <span class="font-medium">MAD</span></p>
                        </div>

                    </div>

                    <!--calculatrice-->
                    <div v-if="getFournitures('calculatrices')" class="w-full flex items-center justify-between">
                        <div>
                            <img src="../../assets/defaultCalc.svg" class="w-10 md:w-12" alt="livre">
                        </div>
                        <div class="flex flex-col text-dark-blue space-y-1">
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold">Calculatrice</p>
                            </div>
                            <router-link to="/Fourniture/calculatrices">
                                <div class="border-[0.5px] border-[#6192BF] w-14 md:w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                    <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{getCountFourn('calculatrices')}} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div>
                            <button @click="deleteProducts('calculatrices')" class="uppercase text-dark-blue text-[8px] md:text-[10px] pt-6 pl-3">supprimer</button>
                        </div>
                        <div>
                            <p class="text-xs md:text-[13px] font-bold text-dark-blue pt-5">{{ getTotalPrice('calculatrice') }},00 <span class="font-medium">MAD</span></p>
                        </div>

                    </div>

                    <!--cartable-->
                    <div v-if="getFournitures('cartables')" class="w-full flex items-center justify-between">
                        <div>
                            <img src="../../assets/cartable-panier.svg" class="w-10 md:w-12" alt="livre">
                        </div>
                        <div class="flex flex-col text-dark-blue space-y-1">
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold">Cartable</p>
                            </div>
                            <router-link to="/Fourniture/cartables">
                                <div class="border-[0.5px] border-[#6192BF] w-14 md:w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                    <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getCountFourn('cartables') }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div>
                            <button @click="deleteProducts('cartables')" class="uppercase text-dark-blue text-[8px] md:text-[10px] pt-6 pl-3">supprimer</button>
                        </div>
                        <div>
                            <p class="text-xs md:text-[13px] font-bold text-dark-blue pt-5">{{ getTotalPrice('cartables') }},00 <span class="font-medium">MAD</span></p>
                        </div>

                    </div>

                    <!--trousse-->
                    <div v-if="getFournitures('trousses')" class="w-full flex items-center justify-between">
                        <div>
                            <img src="../../assets/trousse2.png" class="w-10 md:w-12" alt="livre">
                        </div>
                        <div class="flex flex-col text-dark-blue space-y-1">
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold">Trousse</p>
                            </div>
                            <router-link to="/Fourniture/trousses">
                                <div class="border-[0.5px] border-[#6192BF] w-14 md:w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                    <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getCountFourn('trousses') }}  Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                    </div>
                                </div>
                            </router-link>    
                        </div>
                        <div>
                            <button @click="deleteProducts('trousses')" class="uppercase text-dark-blue text-[8px] md:text-[10px] pt-6 pl-3">supprimer</button>
                        </div>
                        <div>
                            <p class="text-xs md:text-[13px] font-bold text-dark-blue pt-5">{{ getTotalPrice('trousses') }},00 <span class="font-medium">MAD</span></p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';

import { useDefaultFaurnitures } from '../../stors/DefaultFaurnitures';
import { useSecondStepStore } from '../../stors/SecondStepStore';
  
  //Default faurnitures panier
  const data = useDefaultFaurnitures();
  const secondData = useSecondStepStore();

  //Button supprimer livre
  const deleteLivre = () => {
    secondData.deleteLiv();
  }
  //Button supprimer faurnitures
  const deleteFaurn = () => {
    secondData.deleteFaurn();
  }

  const getLivres = computed(() => {
    const livres = secondData.cartItems.length;
    return livres;
  });
  const getTotalLivre = computed(() => {
    const livre = secondData.cartItems;
    return livre.reduce((total, product) => total + (product.price * product.quantity), 0);
  });

  const getProducts = computed(() => {
    const products = secondData.cartFournt.length;
    return products;
  });
  const getTotalProduct = computed(() => {
    const product = secondData.cartFournt;
    return product.reduce((total, product) => total + (product.price * product.quantity), 0);
  });

  
  const getFournitures = computed(() => (categorie) => {
    const products = data.panierProducts.filter(item => item.category === categorie);
    return products.length;
  });
  const getCountFourn = computed(() => (categorie) => {
    const products = data.panierProducts.filter(item => item.category === categorie);
    return products.reduce((count, product) => count + (1 * product.quantity), 0);
  });
  const getTotalPrice = computed(() => (categorie) => {
    const products = data.panierProducts.filter(item => item.category === categorie);
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  });

  //Delete button
  const deleteProducts = (category) => {
    data.deleteProductsByCategory(category);
  }

</script>
<style scoped>
/* width */
::-webkit-scrollbar {
    width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #D9D9D9;
    border-radius: 5px;
} 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #004079;
  border-radius: 5px;
}

.focus\:outline-none:focus {
  outline: none !important;
}
</style>