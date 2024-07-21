<template>
    <TransitionRoot appear :show="props.isOpen" as="template">
      <Dialog as="div" class="inset-0 relative z-50">
        <TransitionChild
          as="template"
          enter="transition duration-200 ease-in-out transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition duration-200 ease-in-out transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="fixed inset-0" />
        </TransitionChild>

        <div class="w-full h-screen fixed inset-0 top-0 overflow-y-scroll no-scrollbar font-Poppins backdrop-blur-sm"><!--bg-[rgb(188,188,188)]  bg-opacity-50-->
            <div class="w-full min-h-screen absolute top-0 right-0 sm:w-[55%] md:w-[45%] lg:w-[40%] xl:w-[450px] bg-[rgb(225,238,248)] px-4 py-6">
                <TransitionChild
                  as="template"
                  enter="transition-opacity duration-300 ease-linear"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="transition-opacity duration-300 ease-linear"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                <DialogOverlay class="w-full flex flex-col items-end lg:px-6 lg:py-4">
                    <div @click="setIsOpened(false)" class="w-9 h-9 2xl:w-[42px] 2xl:h-[42px] mb-8 flex items-center justify-center rounded-full border-[3px] 2xl:border-4 border-dark-blue hover:bg-[#f4faffd0] transition duration-200 ease-in-out cursor-pointer">
                        <img src="../../assets/close.svg" alt="close">
                    </div>

                    <!-- First menu (links) -->
                    <div v-if="props.typeMod === 'menu'" class="bg-white-color text-dark-blue w-full rounded-3xl px-5 py-8 space-y-8">
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <div class="flex flex-col md:hidden space-y-5">
                              <router-link to="/pack-selection" @click="setIsOpened(false)"><h1 class="text-base 2xl:text-lg font-bold uppercase">Pack</h1></router-link>
                              <router-link to="/accessoires-scolaires" @click="setIsOpened(false)"><h1 class="text-base 2xl:text-lg font-bold uppercase">Accessoires Scolaires</h1></router-link>
                              <router-link to="/list" @click="setIsOpened(false)"><h1 class="text-base 2xl:text-lg font-bold uppercase">Listes Scolaires</h1></router-link>
                              <router-link to="/about/partnerships" @click="setIsOpened(false)"><h1 class="text-base 2xl:text-lg font-bold uppercase">Partenariats Assocciatifs</h1></router-link>
                              <router-link to="/suivre-commande" @click="setIsOpened(false)"><h1 class="text-base 2xl:text-lg font-bold uppercase">Suivre Ma Commande</h1></router-link>
                            </div>
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">À PROPOS DE LIVRÉEO</DialogTitle>
                            <div class="space-y-3">
                                <router-link to="/about/livreeo-recrute" @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light">Livréeo recructe</router-link>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/livreeo-creche">Livréeo créche</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/partenariats-associatifs">Partenariats associatifs</router-link></p>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">Service Client</DialogTitle>
                            <div class="space-y-3">
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/contactez-nous">Contactez-nous</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/modalite-de-livraison">Modalité de livraison</router-link></p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/politique-de-retour">Politique de retour</router-link></p>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-5 lg:px-5">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold uppercase">Informations</DialogTitle>
                            <div class="space-y-5">
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/about/conditions-generales">Conditions générales de ventes</router-link> </p>
                                <p @click="setIsOpened(false)" class="text-base 2xl:text-lg font-light"><router-link to="/">Notification sur la<br>confidentialité et les Cookies</router-link></p>
                            </div>
                        </div>
                    </div>

                    <!-- Second menu (panier + facture)-->
                    <div v-if="props.typeMod === 'panier'" class="w-full">
                      <div class="bg-white-color min-h-64 w-full justify-start rounded-2xl px-2 py-5 text-dark-blue">
                        <div class="flex flex-col">
                          <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold leading-relaxed pl-3 pb-2">Panier</DialogTitle>
                          <div class="flex flex-col space-y-3 pl-1 max-h-72 overflow-y-scroll no-scrollbar">
                            <!--livres -->
                            <div v-if="getLivres" class="w-full flex items-center justify-start">
                              <div class="w-20 flex items-center justify-center">
                                <img src="../../assets/latin.png" class="w-10" alt="calculatrice">
                              </div>
                              <div class="w-full flex items-end justify-around">
                                <div class="flex flex-col items-start justify-start space-y-1">
                                  <h3 class="text-xs font-semibold">Manuels</h3>
                                  <router-link to="/Livres-Fourniture">
                                    <div @click="setIsOpened(false)" class="border-[0.5px] border-[#6192BF] w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                      <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium">{{ getLivres }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                      </div>
                                    </div>
                                  </router-link>
                                </div>
                                <div class="cursor-pointer">
                                  <h3 @click="deleteLivre()" class="text-[9px] font-medium uppercase">SUPPRIMIER</h3>
                                </div>
                                <div>
                                  <p class="text-xs font-bold">{{getTotalLivre + secondData.plastificationTotal}},00 <span class="font-medium uppercase">MAD</span></p>
                                </div>
                              </div>
                              
                            </div>
                            <!--Fournitures -->
                            <div v-if="getProducts" class="w-full flex items-center justify-start">
                              <div class="w-20 flex items-center justify-center">
                                <img src="../../assets/Calligraphe.svg" class="h-14" alt="calculatrice">
                              </div>
                              <div class="w-full flex items-end justify-around">
                                <div class="flex flex-col items-start justify-start space-y-1">
                                  <h3 class="text-xs font-semibold">Fournitures</h3>
                                  <router-link to="/Livres-Fourniture">
                                    <div @click="setIsOpened(false)" class="border-[0.5px] border-[#6192BF] w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                      <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getProducts }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                      </div>
                                    </div>
                                  </router-link>
                                </div>
                                <div class="cursor-pointer">
                                  <h3 @click="deleteFaurn()" class="text-[9px] font-medium uppercase">SUPPRIMIER</h3>
                                </div>
                                <div>
                                  <p class="text-xs font-bold">{{getTotalProduct}},00 <span class="font-medium uppercase">MAD</span></p>
                                </div>
                              </div>
                              
                            </div>
                            <!--Default Calculatrice -->
                            <div v-if="getFournitures('calculatrices')" class="w-full flex items-center justify-start">
                              <div class="w-20 flex items-center justify-center">
                                <img src="../../assets/defaultCalc.svg" class="w-16" alt="calculatrice">
                              </div>
                              <div class="w-full flex items-end justify-around">
                                <div class="flex flex-col items-start justify-start space-y-1">
                                  <h3 class="text-xs font-semibold">Calculatrice</h3>
                                  <router-link to="/Fourniture/calculatrices">
                                    <div @click="setIsOpened(false)" class="border-[0.5px] border-[#6192BF] w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                      <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getCountFourn('calculatrices') }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                      </div>
                                    </div>
                                  </router-link>
                                </div>
                                <div class="cursor-pointer">
                                  <h3 @click="deleteProducts('calculatrices')" class="text-[9px] font-medium uppercase">SUPPRIMIER</h3>
                                </div>
                                <div>
                                  <p class="text-xs font-bold">{{ getTotalPrice('calculatrices') }},00 <span class="font-medium uppercase">MAD</span></p>
                                </div>
                              </div>
                            </div>
                            <!--Default Cartable -->
                            <div v-if="getFournitures('cartables')" class="w-full flex items-center justify-start">
                              <div class="w-20 flex items-center justify-center">
                                <img src="../../assets/cartable-panier.svg" class="w-16" alt="cartable">
                              </div>
                              <div class="w-full flex items-end justify-around">
                                <div class="flex flex-col items-start justify-start space-y-1">
                                  <h3 class="text-xs font-semibold">Cartable</h3>
                                  <router-link to="/Fourniture/cartables">
                                    <div @click="setIsOpened(false)" class="border-[0.5px] border-[#6192BF] w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                      <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getCountFourn('cartables') }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                      </div>
                                    </div>
                                  </router-link>
                                </div>
                                <div class="cursor-pointer">
                                  <h3 @click="deleteProducts('cartables')" class="text-[9px] font-medium uppercase">SUPPRIMIER</h3>
                                </div>
                                <div>
                                  <p class="text-xs font-bold">{{ getTotalPrice('cartables') }},00 <span class="font-medium uppercase">MAD</span></p>
                                </div>
                              </div>
                              
                            </div>

                            <!--Default Trousse -->
                            <div v-if="getFournitures('trousses')" class="w-full flex items-center justify-start">
                              <div class="w-20 flex items-center justify-center">
                                <img src="../../assets/trousse2.png" class="w-16" alt="calculatrice">
                              </div>
                              <div class="w-full flex items-end justify-around">
                                <div class="flex flex-col items-start justify-start space-y-1">
                                  <h3 class="text-xs font-semibold">Trousse</h3>
                                  <router-link to="/Fourniture/trousses">
                                    <div @click="setIsOpened(false)" class="border-[0.5px] border-[#6192BF] w-16 h-3.5 rounded-xl flex items-center cursor-pointer">
                                      <div class="w-full flex items-center justify-between px-1">
                                        <p class="text-[7px] font-medium pt-0.5">{{ getCountFourn('trousses') }} Produit</p>
                                        <img src="../../assets/drop-icon.svg" alt="">
                                      </div>
                                    </div>
                                  </router-link>
                                </div>
                                <div class="cursor-pointer">
                                  <h3 @click="deleteProducts('trousses')" class="text-[9px] font-medium uppercase">SUPPRIMIER</h3>
                                </div>
                                <div>
                                  <p class="text-xs font-bold">{{ getTotalPrice('trousses') }},00 <span class="font-medium uppercase">MAD</span></p>
                                </div>
                              </div>
                              
                            </div>
                            
                          </div>

                        </div>
                      </div>
                      <div class="w-full text-dark-blue bg-[#FFFFFF] rounded-[24px] px-5 py-4 mt-5">
                        <div class="flex flex-col space-y-1">
                            <DialogTitle as="h1" class="text-base 2xl:text-lg font-bold leading-relaxed">Récapitulatif</DialogTitle>
                            <div class="flex items-center justify-between">
                                <p class="text-xs font-light leading-relaxed">Sous-total</p>
                                <p v-if="data.totalPanier + secondData.calcTotalPanier !== 0" class="text-xs font-semibold leading-relaxed">{{ data.totalPanier + secondData.calcTotalPanier }} MAD</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-xs font-light leading-relaxed">Livraison</p>
                                <p class="text-xs font-normal leading-relaxed">Calculé à l'étape suivante</p>
                            </div>
                            <div class="w-full h-[1px] bg-dark-blue rounded-xl px-3"></div>
                            <div class="flex items-start justify-between">
                                <p class="flex flex-col items-start text-base font-semibold leading-relaxed">
                                    Total
                                    <span class="font-light text-[8px]">TVA incluse</span>
                                </p>
                                <p v-if="data.totalPanier + secondData.calcTotalPanier !== 0" class="text-sm font-bold leading-relaxed">{{ data.totalPanier + secondData.calcTotalPanier }} MAD</p>
                            </div>
                            <div class="flex flex-col items-center justify-center pt-2 px-5 space-y-1">
                                <button class="text-sm font-semibold leading-relaxed bg-dark-blue rounded-full text-white-color w-full py-2 hover:bg-[#004179e5] transition duration-200 ease-in-out">Valider mon panier</button>
                                <p class="text-sm font-semibold">où</p>
                                <div class="relative cursor-pointer flex items-center justify-center text-sm py-2 text-center font-semibold leading-relaxed ring-1 ring-dark-blue rounded-full text-dark-blue hover:bg-dark-blue hover:text-white-blue w-full transition duration-500 ease-in-out">
                                  <div class="absolute flex items-center justify-center left-1.5 bg-dark-blue w-7 h-7 rounded-full">
                                    <img src="../../assets/toleft.svg" alt="">
                                  </div>
                                  <span> Choisir un autre PACK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </DialogOverlay>
                </TransitionChild>
            </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  } from '@headlessui/vue';
  import { useDefaultFaurnitures } from '../../stors/DefaultFaurnitures';
  import { useSecondStepStore } from '../../stors/SecondStepStore';
  
  //Default faurnitures panier
  const data = useDefaultFaurnitures(); 
  
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
  

  //livre + faurnitures panier
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



  const props = defineProps({
    isOpen: Boolean,
    typeMod: String
  });
  const emitt = defineEmits(['toggle']);

  function setIsOpened(value){
    emitt('toggle', value);
  }

  const isOpen = ref(true)

  function closeModal() {
    isOpen.value = false
  }
  
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 4px;
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
  

