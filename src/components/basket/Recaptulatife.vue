<template>
    <div class="w-[90%] md:w-3/4 lg:w-80 text-dark-blue bg-gradient-to-b from-[#FFFFFF] to-[#E5EBFF] rounded-3xl px-5 py-4">
        <h1 class="text-base font-bold leading-6 pb-5">Récapitulatif</h1>
        <div class="flex items-center justify-between pb-4">
            <div>
                <p class="text-sm font-light">Sous-total</p>
            </div>
            <div>
                <p class="text-sm font-semibold">{{ (data.totalPanier + secondData.calcTotalPanier) * (1 - lastdata.reduction) }},00 MAD</p>
            </div>
        </div>
        <div class="flex items-center justify-between pb-3">
            <div>
                <p class="text-sm font-light">Livraison</p>
            </div>
            <div>
                <p class="text-xs font-normal">Calculé à l'étape suivante</p>
            </div>
        </div>
        <div class="w-full flex h-[1px] bg-dark-blue"></div>
        <div class="flex items-start justify-between pt-5">
            <div>
                <p class="flex flex-col text-base font-semibold">Total<span class="text-[10px] font-light">TVA incluse</span></p>
                
            </div>
            <div>
                <p class="text-sm font-bold">{{ (data.totalPanier + secondData.calcTotalPanier) * (1 - lastdata.reduction)  }},00 MAD</p>
            </div>
        </div>
        <div class="w-full flex flex-col items-center justify-center pt-6">
            <button class="bg-dark-blue text-white-color rounded-full text-sm w-3/4 py-2 font-semibold hover:bg-[#004179e5] transition duration-200 ease-in"><router-link to="/mode-livraison">Valider mon panier</router-link></button>
            <p class="font-semibold py-[2px]">où</p>
            <button class="bg-dark-blue text-white-color rounded-full text-[13px] w-3/4 py-2 font-light hover:bg-[#004179e5] transition duration-200 ease-in-out"><router-link to="/pack">Choisir un autre pack</router-link></button>
        </div>

    </div>

</template>

<script setup>
import { useDefaultFaurnitures } from '../../stors/DefaultFaurnitures';
import { useSecondStepStore } from '../../stors/SecondStepStore';
import { useLastStepStore } from '../../stors/endpoint';
  
  //Default faurnitures panier
  const data = useDefaultFaurnitures();
  const secondData = useSecondStepStore();
  const lastdata = useLastStepStore();
</script>