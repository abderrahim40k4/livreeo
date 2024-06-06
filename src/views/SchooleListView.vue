<template>
    <div class="container mx-auto max-w-7xl text-dark-blue space-y-10">
        <div class="flex flex-col items-center mt-10 lg:mt-16 space-y-10">
            <h1 class="font-bold text-xl lg:text-3xl">Listes Scolaires</h1>
            <p class="text-center text-base lg:text-lg font-medium px-4">
                Trouvez la liste scolaire téléchargeable de votre enfant en 3 clics!
            </p>
        </div>
        <div class="flex flex-col md:flex-row items-center md:items-start justify-evenly space-y-6 md:space-y-0">
            <InputFaildComponentes labale="Ville :" placeholder="Casablanca" :options="data.getCitys" v-model="city_id" />
            <InputFaildComponentes labale="École :" placeholder="Lycée lyautey" :options="data.getSchools" v-model="school_id" />
            <InputFaildComponentes labale="Classe :" placeholder="5 ème" :options="data.getClasses" v-model="group_id" />
        </div>
        <div class="flex items-center justify-center py-8 md:py-12">
          <router-link :to="group_id.length === 0 ? '#' : '/list-view'">
            <button 
              :class="group_id.length === 0 ? 'cursor-default pointer-events-none opacity-50' : ''"
              class="bg-dark-blue rounded-full text-white-color text-base font-semibold px-10 py-2 hover:bg-[#004179e5] transition duration-200 ease-in-out"
            >
              Suivant
            </button>
          </router-link>
        </div>
    </div>
</template>
<script setup>
import InputFaildComponentes from '../components/listsh/InputFaildComponentes.vue';
import { useFirstStepStore } from '../stors/FirstStepStore';
import { ref, watch } from 'vue';
const data = useFirstStepStore();

const city_id = ref(null)
const school_id = ref(null)
const group_id = ref([])

data.fetchCitys();

watch(city_id, (newValue) => {
  if (newValue !== null) {
    data.SelectedCity = city_id.value;
    //console.log(data.SelectedCity);
    data.fetchSchools();
  }
});

watch(school_id, (newValue) => {
  if (newValue !== null) {
    data.SelectedSchool = school_id.value;
    data.fetchClasses();
  }
});

watch(group_id, (newValue) => {
  if (newValue.length !== 0) {
    data.SelectedGroupL = group_id.value;
    //console.log(group_id.value);
  }
});

</script>