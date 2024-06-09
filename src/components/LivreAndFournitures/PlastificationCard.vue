<template>
    <Disclosure as="div" v-slot="{ open }" class="w-full flex items-center justify-center">
        <div class="w-[90%] border-2 sm:border-[3px] px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8 rounded-[35px] sm:rounded-[40px] lg:rounded-[60px] border-dark-blue border-opacity-40">
            <!--Button-->
            
            <!--Etape 1-->
            <div class="w-full flex items-start justify-start rounded-[27px] sm:rounded-[32px] lg:rounded-[52px] bg-[#F0F9FF]">
                <div class="w-full pb-4 sm:pb-0 sm:w-[55%] flex flex-col pt-4 lg:pt-6 pl-5 lg:pl-8 pr-2 lg:pr-4">
                    <DisclosureButton 
                        id="secondbtn" 
                        :class="data.cartItems.length === 0 ? 'cursor-default pointer-events-none' : 'cursor-pointer'"
                        class="w-24 lg:w-32 flex items-center justify-between px-2 lg:px-4 py-1 lg:py-1.5 bg-dark-blue rounded-full font-semibold text-xs lg:text-base text-white-color"
                    >
                        Étape 3
                        <img src="../../assets/top.svg" class="h-1.5 lg:h-2" alt="top">
                    </DisclosureButton>
                    <h2 class="text-sm lg:text-xl text-dark-blue font-semibold pt-3 pr-8 lg:pr-16">Service de Plastification : Durabilité et Protection</h2>
                    <p class="text-dark-blue text-[10px] lg:text-sm font-normal">
                        Chez Livréeo, nous comprenons que les manuels scolaires sont des investissements essentiels pour l'année à venir. C'est pourquoi nous proposons un service de plastification adhèsive haut de gamme qui préserve ces ressources précieuses.
                    </p>
                </div>
                <div class="hidden w-[45%] sm:flex">
                    <!-- <div class="w-full h-48 lg:h-64 bg-[url('../../src/assets/plastification2.svg')] bg-no-repeat bg-cover bg-right"></div> -->
                    <div class="w-full h-48 lg:h-64">
                        <img src="../../assets/plastification2.svg" class="object-cover w-full h-48 lg:h-64" alt="books">
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
                                <div v-for="(livres, category) in props.selectedLiv" :key="category">
                                    <div class="w-full flex flex-col items-start">
                                        <h3 class="text-xs md:text-base font-semibold text-dark-blue pl-1">{{ category }}</h3>
                                        <!-- as="template"-->
                                        <div
                                            v-for="livre in livres" 
                                            :key="livre.id"
                                            class="w-full flex items-center pt-4"
                                        >
                                            <div class="w-1/2 flex items-center space-x-1 md:space-x-3 md:pl-4 lg:pl-10">
                                                <div @click="setSelectedLivre(livre)" id="imgLiv" class="cursor-pointer">
                                                    <div class="w-8 md:w-12">
                                                        <img :src="livre.variants?.[0]?.image?.path || 'default_image_path.png'" alt="livre">
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-dark-blue text-[10px] md:text-sm font-medium">{{ livre.name }}</p>
                                                    <p class="flex md:hidden text-dark-blue text-[10px] md:text-[15px] font-semibold">{{ livre.prix }} MAD</p>
                                                </div>
                                            </div>
                                            <div class="w-1/2 flex items-center justify-start">
                                                <div class="w-full flex items-center justify-center">
                                                    <div class="w-1/2 md:w-1/3 flex items-center justify-end">
                                                        <div class="w-16 md:w-28 h-5 md:h-7 rounded-full text-[10px] md:text-[15px] font-normal flex items-center justify-evenly bg-dark-blue text-white-color">
                                                            <div class="cursor-pointer">
                                                                -
                                                            </div>
                                                            <div>
                                                                {{ livre.quantity }}
                                                            </div>
                                                            <div class="cursor-pointer">
                                                                +
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hidden md:w-1/3 md:flex items-center justify-end">
                                                        <p class="text-dark-blue text-[10px] md:text-[15px] font-medium">{{ livre.price }} MAD</p>
                                                    </div>
                                                    <div class="w-1/2 md:w-1/3 flex items-center justify-center">                                                        
                                                        <input type="checkbox" :id="livre.id" :value="livre" class="hidden" v-model="checkedPlst">
                                                        <div @click="handleDivClick(livre.id)" class="relative cursor-pointer">
                                                            <img src="../../assets/checkbox-liv.svg" class="h-4 md:h-6" alt="">
                                                            <img v-if="myLivres.includes(livre.id)" src="../../assets/inside.svg" class="w-2 md:w-3 h-2 md:h-3 absolute right-[3px] md:right-1 top-[3px] md:top-1" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="w-full md:w-[30%] flex items-center justify-center mt-6">
                            <LivreInfo
                            :firstBook="firstBook"
                            :options="selectedLivre"
                            />
                        </div>
                    </div>    
                    <div class="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between px-3 lg:px-0 pt-4 lg:pt-8 lg:pl-10 lg:pr-52">
                        <div>
                            <h3 class="text-xs md:text-base font-semibold text-dark-blue">TOTAL = {{ totalPlst }} DHS</h3>
                        </div>
                        <div>
                            <button 
                            @click="addToCart()" 
                            class="bg-dark-blue text-white-color text-xs md:text-base font-semibold rounded-full py-1.5 md:py-3 px-3 md:px-5">
                                <span v-if="checkedPlst.length > 0">Ajouter au panier ({{ checkedPlst.length }} articles)</span>
                                <span v-if="checkedPlst.length === 0">Sans Plastification ({{ checkedPlst.length }} articles)</span>
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
import { ref, computed, watchEffect } from 'vue'

//components
import LivreInfo from './LivreInfo.vue'

//HeadlessUI
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useSecondStepStore } from '../../stors/SecondStepStore'

const data = useSecondStepStore();


const props = defineProps({
    selectedLiv: {
        type: Array,
        required: true
    }
})

watchEffect(() => {
    console.log(props.selectedLiv);
});


const checkedPlst = ref([])
const firstBook = computed(() => props.selectedLiv[0] || {});
 
const selectedLivre = ref('');


const myLivres =  ref([])

// Function to set the selected book
function setSelectedLivre(livre) {
    selectedLivre.value = livre;
}

function handleDivClick(id) {
    const index = myLivres.value.indexOf(id);
    if (index === -1) {
        myLivres.value.push(id);
    } else {
        myLivres.value.splice(index, 1);
    }
    document.getElementById(id).click();
}



//Button Add to cart
function addToCart(){
    data.plastification = checkedPlst.value;
    document.getElementById("secondbtn").click();
}

//calcul total
function calcTotal(){
    const checkedLivreArray = checkedPlst.value;
    let total = checkedLivreArray.reduce((total, item) => {
        data.plastificationTotal =  total + (15 * item.quantity);
        return total + (15 * item.quantity);
    }, 0);
    return total;
}

//Calcul total livre
const totalPlst = computed(() => {
    return calcTotal();
});


//Button Select All
function selectAll(){
    checkedPlst.value = [];
    myLivres.value = [];

    for (const category in props.selectedLiv) {
        if (Array.isArray(props.selectedLiv[category])) {
            props.selectedLiv[category].forEach(book => {
                checkedPlst.value.push(book);
                myLivres.value.push(book.id);
            });
        } else {
            console.error(`selectedLiv[${category}] is not an array`);
        }
    }
}



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