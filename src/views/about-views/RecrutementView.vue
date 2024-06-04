<template>
    <div>
        <div class="text-dark-blue container max-w-7xl mx-auto">
            <div class="w-full flex flex-col items-center justify-center space-y-2 pt-8">
                <h1 class="text-xl lg:text-3xl font-medium">Rejoignez notre équipe</h1>
                <p class="text-sm lg:text-lg italic">Le groupe Livréeo recrute</p>
            </div>
            <div class="w-full flex flex-col items-center justify-center py-8 md:py-12 space-y-12">
                <div class="w-full px-8 lg:px-0 lg:w-5/6 flex flex-col md:flex-row items-start justify-center">
                    <div class="w-full md:w-1/2 md:pr-16 space-y-5 md:space-y-8 md:border-r-[1px] relative border-dark-blue">
                        <div v-for="item in firstPart" :key="item.id" class="w-full flex flex-col space-y-5 md:space-y-8">
                            <div class="h-[2px] w-full bg-dark-blue">
                                <hr>
                            </div>
                            <div class="w-full flex items-center justify-between">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-xs md:text-sm font-light">{{ item.contract_type }} . {{ item.city.name }}</p>
                                    <p class="text-xs md:text-sm font-semibold">{{ item.name }}</p>
                                </div>
                                <div>
                                    <router-link :to="{ name: 'Livreeo Recrute Form', params: { id: item.id }, query: { contract_type: item.contract_type, city: item.city.name, name: item.name }}"><img src="../../assets/recrute-icone.svg" class="h-10 md:h-12 pr-5 md:pr-10" alt=""></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="h-[2px] w-full bg-dark-blue">
                            <hr>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-16 space-y-5 md:space-y-8">
                        <div v-for="item in secondPart" :key="item.id" class="w-full flex flex-col space-y-5 md:space-y-8">
                            <div class="h-[2px] w-full bg-dark-blue">
                                <hr>
                            </div>
                            <div class="w-full flex items-center justify-between">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-xs md:text-sm font-light">{{ item.contract_type }} . {{ item.city.name }}</p>
                                    <p class="text-xs md:text-sm font-semibold">{{ item.name }}</p>
                                </div>
                                <div>
                                    <router-link :to="{ name: 'Livreeo Recrute Form', params: { id: item.id }, query: { contract_type: item.contract_type, city: item.city.name, name: item.name }}"><img src="../../assets/recrute-icone.svg" class="h-10 md:h-12 pr-5 md:pr-10" alt=""></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="h-[2px] w-full bg-dark-blue">
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="w-full px-8 lg:px-0 lg:w-5/6 flex flex-col items-start space-y-5">
                    <h3 class="text-sm md:text-base font-bold">Qui sommes-nous ?</h3>
                    <p class="text-xs md:text-sm font-bold">Livréeo est une société distributrice de manuels et fournitures scolaire  à l'approche centrée sur l'efficacité, la rapidité et la compréhension des besoins et attenes des parents d'élèves des divers systèmes éducatifs  représenter au Maroc .</p>
                    <p class="underline text-xs md:text-sm font-semibold italic">Découvrir livréeo</p>
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
import { useFormStore } from '../../stors/FormStore'
import { onMounted, computed, ref } from 'vue';

const data = useFormStore();
const offers = ref([]);

onMounted(async () => {
  await data.fetchOffers();
  offers.value = data.offreEmp.posts; // Make sure to update the ref
});

const firstPart = computed(() => {
  return offers.value.slice(0, Math.ceil(offers.value.length / 2));
});

const secondPart = computed(() => {
  return offers.value.slice(Math.ceil(offers.value.length / 2));
});

</script>

