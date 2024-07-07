<template>
    <div class="flex flex-row xl:flex-col items-start px-2 md:px-8 xl:px-12 space-x-2 md:space-x-0">
      <div class="w-1/3 xl:w-full flex items-center justify-center xl:pt-4 xl:pb-2">
        <img :src="imageUrl" class="h-28 md:h-40 xl:h-64" alt="product">
      </div>
      <div class="w-2/3 xl:w-full flex flex-col text-[#5A7BA0] items-start">
        <div class="grid grid-cols-5 gap-x-1 xl:gap-x-2 gap-y-1 pb-1.5 xl:pb-2">
          <div v-if="product" v-for="variant in product.variants" :key="variant.id" class="flex items-center">
            <div class="flex items-center justify-center">
              <input type="radio" name="checkbox-col" :id="variant.color + 'prinfo'" class="hidden" v-model="checkedColor" :value="variant.color">
              <label class="relative cursor-pointer" :for="variant.color + 'prinfo'" @click="selectVariant(variant)">
                <div v-if="checkedColor !== variant.color" :style="{ backgroundColor: variant.color }" class="w-5 h-5 xl:w-8 xl:h-8 rounded-full"></div>
                <div v-if="checkedColor === variant.color" :style="{ backgroundColor: variant.color }" class="flex items-center justify-center w-7 h-7 xl:w-10 xl:h-10 rounded-full">
                  <div class="bg-[#FFFFFF] flex items-center justify-center w-5 h-5 xl:w-8 xl:h-8 rounded-full">
                    <svg class="h-1.5 xl:h-2.5" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.17143L4.14286 7L9 1" :stroke="variant.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <span class="text-sm md:text-lg font-medium pb-2">{{ nameP }}</span>
        <p class="text-[8px] md:text-xs font-light">ISBN : 978-2013953115</p>
        <p class="text-[8px] md:text-xs font-light">Année : 2016</p>
        <p class="text-[8px] md:text-xs font-light">Edition : Hachette</p>
        <p class="text-[8px] md:text-xs font-light">Auteur(s)Françoise Carrier-Nayrolles Stéphane Jougla Mélinée Emilie Deschellette-Frasca</p>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, watch, computed, getCurrentInstance } from 'vue'
  import { useDefaultFaurnitures } from "../../stors/DefaultFaurnitures"

  const data = useDefaultFaurnitures();
  const { emit } = getCurrentInstance();
  // Define props
  const props = defineProps({
    firstProduct: Object,
    options: Object,
  })
  const product = computed(() => {
    if(props.options === ''){
      return props.firstProduct
    }
    return props.options
  });
  console.log(product);
  // Initialize checkedColor and selectedVariant
  const selectedVariant = ref(product.value.variants[0]);
  const checkedColor = ref(selectedVariant.value.color);
  const imageUrl = ref(selectedVariant.value.image.path);
  const nameP = ref(selectedVariant.value.article.name);
  watch(product, (newProduct) => {
    selectedVariant.value = product.value.variants[0]
    checkedColor.value = selectedVariant.value.color
    imageUrl.value = selectedVariant.value.image.path;
    nameP.value = selectedVariant.value.article.name;
  })
  
  
  // Function to select variant
  const selectVariant = (variant) => {
    selectedVariant.value = variant
  }
  
  watch(checkedColor, (newColor) => {
    const newVariant = product.value.variants.find(variant => variant.color === newColor)
    //console.log(newVariant);
    if (newVariant) {
      selectedVariant.value = newVariant;
      imageUrl.value = selectedVariant.value.image.path;
      nameP.value = selectedVariant.value.article.name;
      emit('colorChange', checkedColor.value);
      //console.log(selectedVariant.value.image.path);
    }
  })
  watch(product, (newP) => {
    if(newP){
      selectedVariant.value = product.value.variants[0];
      checkedColor.value = selectedVariant.value.color;
      imageUrl.value = selectedVariant.value.image.path;
      nameP.value = selectedVariant.value.article.name;
      emit('colorChange', checkedColor.value);
    }
  })
  </script>
  