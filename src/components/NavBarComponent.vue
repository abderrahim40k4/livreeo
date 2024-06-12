<template>
    <nav :class="{ 'shadow-scroll': isScrolled }" class="tw-backdrop-blur-md">
        <div class="container mx-auto max-w-7xl py-4 px-4 xl:px-0">
            <div class="w-full flex items-center justify-between">
                <router-link to="/">
                    <div class="flex items-center">
                        <img src="../assets/logo-liv.svg" class="h-[32px] md:h-[52px] 2xl:h-[64px]" alt="Logo">
                    </div>
                </router-link>
                <div class="hidden xl:flex items-center mt-2">
                    <ul class="w-full flex items-start space-x-5 xl:space-x-8">
                        <li v-for="link in navlinks" :key="link.id" :class="`text-sm 2xl:text-base font-normal text-dark-blue transition duration-200 ease-in-out ${$route.name === link.title ? 'font-semibold' : ''}`"><!--border-b-2 border-accent-color --> <!--hover:border-b-2 hover:border-accent-color-->
                            <router-link :to="link.path">{{ link.title }}</router-link>
                            <div v-if="$route.name === link.title" class="border-[1px] border-[#3476B9] rounded-lg mx-[15%]"></div>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center space-x-3 md:space-x-4 xl:space-x-6">
                    <div @click="setOpen('panier')" class="relative flex items-center justify-center">
                        <img src="../assets/sack-icon.svg" class="cursor-pointer w-6 md:w-8 2xl:w-10" alt="">
                        <div v-if="getCount > 0" class="absolute top-0 md:top-[1px] left-4 md:left-[22px] 2xl:left-[28px] flex items-center justify-center w-2.5 md:w-4 h-2.5 md:h-4 rounded-full bg-white-color">
                            <div class="w-[8px] h-[8px] md:w-[14px] md:h-[14px] rounded-full bg-dark-blue flex items-center justify-center">
                                <p class="text-white-color text-[5px] md:text-[8px] font-medium pt-[1px]">{{ getCount }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div @click="setOpen('menu')" class="bg-[#004079] hover:bg-[#005082] w-[30px] h-[30px] md:w-[40px] md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-full flex items-center justify-center cursor-pointer transition duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] md:w-[22px] md:h-[22px] 2xl:w-[25px] 2xl:h-[25px]" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_2353_3481)">
                                <path d="M10.5 7.5L24.75 7.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 15H25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.25 22.5H15" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2353_3481">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <SeconMenu :is-open="isOpen" :typeMod="typeMod" @toggle="(value) => isOpen = value"/>

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import SeconMenu from './home/SecondMenu.vue';
import { useDefaultFaurnitures } from '../stors/DefaultFaurnitures';
  
const data = useDefaultFaurnitures();

const getCount = computed(() => {
    const products = data.panierProducts;
    return products.reduce((count, product) => count + (1 * product.quantity), 0);
});

const isOpen = ref(false)
const typeMod = ref('')

const setOpen = (type) => {
  isOpen.value = true;
  typeMod.value = type;
}

// const isOpenCart = ref(false)


const navlinks = [
    {
        id : 1,
        title: 'Pack',
        path: '/pack'
    },
    {
        id : 2,
        title: 'Accessoires Scolaires',
        path: '/Fourniture/cartables'
    },
    {
        id : 3,
        title: 'Listes Scolaires',
        path: '/list'
    },
    {
        id : 4,
        title: 'Partenariats Associatifs',
        path: '/about/partenariats-associatifs'
    },
    {
        id : 5,
        title: 'Suivre Ma Commande',
        path: '/suivre-commande'
    },
]



const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>

.tw-backdrop-blur-md {
    --tw-backdrop-blur: blur(12px);
}
.shadow-scroll {
    box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(7px);
}

</style>