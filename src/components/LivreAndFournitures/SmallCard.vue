<template>
    <div class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg rounded-xl md:rounded-3xl flex flex-col items-center cursor-pointer">
        <img :src="props.image" class="h-16 sm:h-20 md:h-28 p-1 sm:p-1.5" alt="card">
        <p class="text-dark-blue font-semibold pb-2 md:pb-3 pt-1 md:pt-2 text-[10px] sm:text-sm md:text-lg">{{props.name}}</p>
        <div 
        :class="props.cart === 0 ? 'bg-[#CBCCCC]' : 'bg-dark-blue'"
        class="absolute -top-1 -right-2 md:-right-3 w-6 md:w-10 h-6 md:h-10 rounded-full flex items-center justify-center">
            <img src="../../assets/panier.svg" class="h-4 md:h-6" alt="">
            <img v-if="props.cart !== 0" src="../../assets/panier2.png" class="absolute pt-1.5 md:pt-2 w-1.5 md:w-2" alt="">
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cart: Number,
    name: {
        Type: String,
        default: ""
    },
    id:{
        Type: String,
    },
    image: {
        Type: File,
        default: "../../assets/manuels.svg"
    },
})

</script>