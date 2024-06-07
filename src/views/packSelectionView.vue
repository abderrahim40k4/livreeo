<template>
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col items-center justify-center text-dark-blue">
            <div class="w-[86%] flex flex-col items-center pt-5 xl:pt-12 2xl:pt-16">
              <!-- <form @submit.prevent="mystore.fetchLivres()"> -->
                <h1 class="w-full md:w-3/4 text-sm md:text-xl text-center font-normal md:leading-loose pb-4">Pour génèrer les élément de <span class="text-soft-dark-blue font-semibold italic underline">la liste scolaire officielle</span> de votre enfant, nous allons avoir besoin de quelques informations ! </h1>
                <div class="w-full flex flex-col items-start justify-start space-y-3 md:space-y-5 pt-5 md:pt-10">
                    <h3 class="text-sm md:text-lg font-bold pl-0 md:pl-4">1. Dans quelle ville habitez vous ?</h3>
                    <!-- DropDown (HeadlesUi) -->
                    <SelectOption
                    placeholder="Select Ville"
                    v-model="city_id" 
                    :options="mystore.getCitys"
                    namechamp="ville"
                    />
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-3 md:space-y-6 pt-8 md:pt-12">
                    <h3 class="text-sm md:text-lg font-bold pl-0 md:pl-4">2. Dans quelle école votre enfant est scolarisé ?</h3>
                    <SelectOption 
                    placeholder="Select école"
                    v-model="school_id"
                    :options="mystore.getSchools"
                    namechamp="ecole"/>
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-3 md:space-y-8 pt-8 md:pt-12">
                    <h3 class="text-sm md:text-lg font-bold pl-0 md:pl-4">3. Quelle est la classe de votre enfant ?</h3>
                    <SelectClass 
                    v-model="class_id"
                    :options="mystore.getClasses"
                    />
                </div>
                <div class="w-full flex flex-col items-start justify-start space-y-3 md:space-y-8 pt-8 md:pt-12">
                    <h3 class="text-sm md:text-lg font-bold pl-0 md:pl-4">4. Quelles sont les options de vôtre enfant ?</h3>
                    <SelectLangues 
                    v-model="langues"
                    :options="mystore.getLangues"
                    />
                </div>
                <div class="w-full flex items-center justify-between py-8 md:py-12">
                  <div>
                    <router-link to="/"><img src="../assets/back-home.svg" class="h-10" alt="back"></router-link>
                  </div>
                  <div>
                    <router-link :to="langues === null ? '#' : '/Livres-Fourniture'">
                    <button 
                    @click="secstore.fetchLivres()" 
                    :class="langues === null ? 'cursor-default pointer-events-none opacity-50' : ''"
                    class="bg-dark-blue text-white-color hover:bg-[#004179e5] text-base font-semibold rounded-full min-w-36 py-2"
                    >
                    Suivant
                    </button>
                    </router-link>
                  </div>
                </div>
              <!-- </form> -->
            </div>
        </div>
    </div>
    <SiteMapComponentVue />
</template>
<script setup>
//vue
import { ref,watch } from 'vue'

//Stores
import { useFirstStepStore } from '../stors/FirstStepStore'
import { useSecondStepStore } from '../stors/SecondStepStore'

//Components
import SiteMapComponentVue from '../components/SiteMapComponent.vue'
import SelectOption from '../components/SelectOption.vue'
import SelectClass from '../components/SelectClass.vue'
import SelectLangues from '../components/SelectLangues.vue'


const mystore = useFirstStepStore();
const secstore = useSecondStepStore();


const city_id = ref(null)
const school_id = ref(null)
const class_id = ref(null)
const langues = ref(null)//[]

mystore.fetchCitys();

watch(city_id, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedCity = city_id.value;
    //console.log(mystore.SelectedCity);
    mystore.fetchSchools();
  }
});

watch(school_id, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedSchool = school_id.value;
    mystore.fetchClasses();
  }
});

watch(class_id, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedClass = class_id.value;
    //console.log(class_id.value);
    mystore.fetchLangues();
    //langues.value = mystore.Class.find(group => group.id === mystore.SelectedClass).languages;
    //console.log(langues);
  }
});
watch(langues, (newValue, oldValue) => {
  if (newValue !== null) {
    mystore.SelectedLangues = langues.value;
    // mystore.SelectedLangues = langues.value.map(langue => langue.id);
  }
});

</script>