<template>
    <Disclosure as="div" v-slot="{ open }" class="w-full flex items-center justify-center">
        <div class="w-[90%] border-2 sm:border-[3px] px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8 rounded-[35px] sm:rounded-[40px] lg:rounded-[60px] border-dark-blue border-opacity-40">
            <!--Etape 1-->
            <div class="w-full flex items-start justify-start rounded-[27px] sm:rounded-[32px] lg:rounded-[52px] bg-[#F0F9FF]">
                <div class="w-full pb-4 sm:pb-0 sm:w-[55%] flex flex-col pt-4 lg:pt-6 pl-5 lg:pl-8 pr-2 lg:pr-4">
                    <DisclosureButton id="lastbtn" class="w-24 lg:w-32 flex items-center justify-between px-2 lg:px-4 py-1 lg:py-1.5 bg-dark-blue rounded-full font-semibold text-xs lg:text-base text-white-color">
                        Étape 2
                        <img src="../../assets/top.svg" class="h-1.5 lg:h-2" alt="top">
                    </DisclosureButton>
                    <h2 class="text-sm lg:text-xl text-dark-blue font-semibold pt-3">Choisir ses fournitures scolaires : </h2>
                    <p class="text-dark-blue text-[10px] lg:text-sm font-normal">
                        Tous nos articles sont sélectionnés pour correspondre aux listes scolaires officielles. Mais parce que chaque élève est unique, nous proposons également différentes  gammes pour personnaliser l'expérience scolaire. Trouvez les fournitures qui sauront plaire à vos enfants
                    </p>
                </div>
                <div class="hidden w-[45%] sm:flex">
                    <div class="w-full h-full flex items-start">
                        <img src="../../assets/fournitures.png" class="w-full h-[200px] lg:h-[250px] rounded-r-[35px]" alt="books">
                    </div>
                </div>
            </div>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <DisclosurePanel class="flex flex-col">
                    <div class="w-full flex flex-col-reverse md:flex-row"> 
                        <div class="w-full md:w-[70%] mt-6">
                            <div class="w-full flex items-center justify-end pr-4 lg:pr-12">
                                <button @click="selectAll()" class="font-semibold text-dark-blue text-xs md:text-base bg-[#F0F9FF] hover:bg-[#c6e7ff] transition duration-200 ease-in py-1.5 px-4 md:px-8 rounded-full">Selectionez Tous</button>
                            </div>   
                            <div class="h-[300px] md:h-[420px] overflow-y-auto space-y-4 md:space-y-6">
                                <div v-for="(products, category) in fournByCategory" :key="category">
                                    <div class="w-full flex flex-col items-start" :class="{'max-h-[300px] overflow-y-auto no-scrollbar': index !== 0}">
                                        <h3 class="text-xs md:text-lg font-semibold text-dark-blue pl-1">{{ category }}</h3>
                                        <div v-for="(product, index) in products" :key="product.id" :class="{'first-product w-full  pt-4': index === 0, 'other-products w-fit space-x-8 pt-1': index !== 0,'hidden': index !== 0 && !showOtherProducts[category]}" class="flex items-center">
                                            <div :class="index === 0 ? 'w-1/2 flex items-start md:items-center space-x-1 md:space-x-3 md:pl-4 lg:pl-10' : 'w-1/2 flex items-center space-x-1 md:pl-4 lg:pl-10'">
                                                <div @click="setSelectedProduct(product), moveToTop(category, index), toggleOtherProducts(category)" class="cursor-pointer">
                                                    <div :class="index === 0 ? 'w-10 md:w-20' : 'w-7 md:w-14 ml-20'">
                                                        <img :src="product.variants[0]?.image?.path" alt="product">
                                                    </div>
                                                </div>
                                                <div :class="index !== 0 ? 'w-80 space-y-2' : 'space-y-2'">
                                                    <div>
                                                        <p :class="index === 0 ? 'text-dark-blue text-[8px] md:text-xs font-medium' : 'text-dark-blue text-[6px] md:text-[9px] font-medium'"><span :class="index === 0 ? 'text-[10px] md:text-sm' : ''">{{product.name}}</span></p>
                                                        <p v-if="!index" class="flex md:hidden text-dark-blue text-[10px] md:text-[15px] font-semibold">{{ product.price }} MAD</p>
                                                    </div>
                                                    <div v-if="index === 0" class="flex items-center">
                                                        <p @click="toggleOtherProducts(category)" class="text-dark-blue text-[8px] md:text-[10px] font-medium cursor-pointer">Autres modèles disponibles </p>
                                                        <img src="../../assets/arrow.svg" class="h-2 md:h-3" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="index === 0" class="w-1/2 flex items-center justify-start">
                                                <div class="w-full flex items-center justify-center">
                                                <div class="w-1/2 md:w-1/3 flex items-center justify-end">
                                                    <div class="w-16 md:w-28 h-5 md:h-7 rounded-full text-[10px] md:text-[15px] font-normal flex items-center justify-evenly bg-dark-blue text-white-color">
                                                        <div @click="decreaseQuantity(product)" class="cursor-pointer">
                                                            -
                                                        </div>
                                                        <div>
                                                            {{ product.quantity }}
                                                        </div>
                                                        <div @click="increaseQuantity(product)" class="cursor-pointer">
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hidden md:w-1/3 md:flex items-center justify-end">
                                                    <p class="text-dark-blue text-[10px] md:text-[15px] font-medium">{{ product.price }} MAD</p>
                                                </div>
                                                <div class="w-1/2 md:w-1/3 flex items-center justify-center">                                                        
                                                    <input type="checkbox" :id="product.id" :value="product" class="hidden" v-model="checkedLivre">
                                                    <div @click="handleDivClick(product.id)" class="relative cursor-pointer">
                                                    <img src="../../assets/checkbox-liv.svg" class="h-4 md:h-6" alt="">
                                                    <img v-if="myProduct.includes(product.id)" src="../../assets/inside.svg" class="w-2 md:w-3 h-2 md:h-3 absolute right-[3px] md:right-1 top-[3px] md:top-1" alt="">
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div class="flex items-center justify-center">
                                                <p class="text-dark-blue text-[6px] md:text-[9px] font-bold">{{ product.price }} MAD</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
                        </div>
                        <div class="w-full md:w-[30%] flex items-center justify-center mt-6">
                            <FournitureInfo 
                            :options="selectedProduct"
                            :firstProduct="firstProduct"
                            />
                        </div>
                    </div>    
                    <div class="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between px-3 lg:px-0 pt-4 lg:pt-8 lg:pl-10 lg:pr-52">
                        <div>
                            <h3 class="text-xs md:text-base font-normal text-dark-blue">SOUS-TOTAL FOURNITURES = <span class="font-semibold">{{totalLivre}} DHS</span></h3>
                        </div>
                        <div>
                            <button 
                            @click="addToCart()"
                            :class="{
                                'cursor-default pointer-events-none opacity-50': checkedLivre.length === 0 && data.cartItems.length === 0,
                            }"
                            class="bg-dark-blue text-white-color text-xs md:text-base font-semibold rounded-full py-2 md:py-3 px-3 md:px-5">
                                <span v-if="checkedLivre.length === 0 && data.cartItems.length >= 1">Annuler la commande</span>
                                <span v-else>Ajouter au panier ({{ checkedLivre.length }} articles)</span>
                            </button>
                        </div>
                    </div> 
                </DisclosurePanel> 
            </transition>                   
        </div>
    </Disclosure>
</template>

<script setup>
//vue import
import { ref, computed } from 'vue'

//components
import FournitureInfo from './FournitureInfo.vue'

//HeadlessUI
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useSecondStepStore } from '../../stors/SecondStepStore'

const data = useSecondStepStore();


const props = defineProps({
    fournitures: {
        type: Array,
        required: true
    },
})


const selectedProduct = ref('')
const firstProduct= computed(() => props.fournitures[0]);

const checkedLivre = ref([])
const myProduct =  ref([])

// Function to set the selected book
function setSelectedProduct(product) {
    selectedProduct.value = product;
}

function handleDivClick(id) {
    const index = myProduct.value.indexOf(id);
    if (index === -1) {
        myProduct.value.push(id);
    } else {
        myProduct.value.splice(index, 1);
    }
    document.getElementById(id).click();
}


//Button Add to cart
function addToCart(){
    data.cartFournt = checkedLivre.value;
    document.getElementById("lastbtn").click();
}

//calcul total
function calcTotal(){
    const checkedLivreArray = checkedLivre.value;
    let total = checkedLivreArray.reduce((total, item) => {
        data.total = total + (item.price * item.quantity);
        return total + (item.price * item.quantity);
    }, 0);
    return total;
}


//Button Select All
function selectAll(){
     // Clear the checkedLivre array first
     checkedLivre.value = [];
     myProduct.value = [];

    // Iterate through each category
    for (const category in fournByCategory.value) {
        // Iterate through each product in the category
        fournByCategory.value[category].forEach(product => {
            // Push the product into the checkedLivre array
            checkedLivre.value.push(product);
            myProduct.value.push(product.id);
        });
    }
}

// Group fournitures by category
const fournByCategory = computed(() => {
    return props.fournitures.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || [];
        acc[product.category].push(product);
        return acc;
    }, {});
});


//Calcul total livre
const totalLivre = computed(() => {
    return calcTotal();
});


//manage quantity
function decreaseQuantity(item){
    let index = checkedLivre.value.findIndex(livre => livre.id === item.id);
    if(index !== -1 && checkedLivre.value[index].quantity !== 1){
        checkedLivre.value[index].quantity -= 1;
        // if(checkedLivre.value[index].quantity === 0){
        //     checkedLivre = checkedLivre.value.filter(livre => livre.id !== item.id);
        // }
    }
};
function increaseQuantity(item){
    let index = checkedLivre.value.findIndex(livre => livre.id === item.id);
    if(index !== -1){
        checkedLivre.value[index].quantity += 1;
    }
};


// Define a reactive object to track whether to show other products for each category
const showOtherProducts = ref({});

// Initialize showOtherProducts with true for each category
for (const category in fournByCategory.value) {
  showOtherProducts.value[category] = true;
}

// Function to toggle the visibility of other products for a specific category
const toggleOtherProducts = (category) => {
  showOtherProducts.value[category] = !showOtherProducts.value[category];
};

// Function to move the clicked product to the top
const moveToTop = (category, index) => {
  // Don't need to do anything if the clicked product is already the first one
  if (index === 0) return;

  // Reorder the products array by moving the clicked product to the top
  const [clickedProduct] = fournByCategory.value[category].splice(index, 1);
  fournByCategory.value[category].unshift(clickedProduct);
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
    width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #F1F0F0;
    border-radius: 5px;
} 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #6192BF;
    border-radius: 5px;
}
</style>