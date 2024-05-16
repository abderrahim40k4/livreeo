<template>
    <div class="bg-[#F9FDFE]">
        <div class="text-dark-blue container max-w-7xl mx-auto py-20">
            <div class="w-full flex items-center justify-center">
                <div class="flex flex-col md:flex-row w-[90%]">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <img src="../../assets/back-arraw.svg" class="w-11" alt="back">
                        <div class="space-y-2 pt-6">
                            <p class="text-xs md:text-sm font-light">CDI . Casablanca / Paris</p>
                            <p class="text-xs md:text-sm font-semibold">SEO Team Leader H/F</p>
                        </div>
                        <div class="space-y-2 pt-16">
                            <div class="flex items-center justify-start space-x-1">
                                <img src="../../assets/Phone.svg" class="h-4 md:h-5" alt="Phone">
                                <p class="text-sm md:text-base font-normal">+212 522 91 93 </p>
                            </div>
                            <div class="flex items-center justify-start space-x-1">
                                <img src="../../assets/Contact.svg" class="h-4 md:h-5" alt="Phone">
                                <p class="text-sm md:text-base font-normal">contact@livreeo.ma </p>
                            </div>
                            <div class="flex items-start justify-start space-x-1">
                                <img src="../../assets/Location.svg" class="h-4 md:h-5" alt="Phone">
                                <p class="text-sm md:text-base font-normal sm:w-1/2">
                                    Agroparc Km 5, Route d'Azemmour 
                                    Dar Bouazza, Casablanca 20220. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2">
                        <form @submit.prevent="" class="space-y-6 text-dark-blue pt-5">
                            <div class="md:flex md:space-x-5 space-y-5 md:space-y-0">
                                <input type="text" name="nom" placeholder="Nom Complet" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:font-light placeholder:text-sm text-sm md:text-base pl-4 h-12 md:h-16 w-full">
                                <input type="number" name="telephone" placeholder="Numéro de Téléphone" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full">
                            </div>
                            <div class="w-full flex space-x-5">
                                <input type="text" name="mail" placeholder="Adresse E-mail" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-[60%]">
                                <!-- <select class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-[40%]">
                                    <option value="SEO Team Leader H/F">SEO Team Leader H/F</option>
                                </select> -->
                                <Listbox v-model="selectedPerson">
                                    <div class="relative flex items-center bg-white-color border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg text-sm md:text-base placeholder:font-light h-12 md:h-16 w-[40%]">
                                        <ListboxButton
                                        class="w-full px-4 text-start space-y-1"
                                        >
                                        <span class="text-sm text-[#bebebe] font-light">Poste :</span>
                                        <div class="flex items-center justify-between">
                                            <span class="block truncate font-semibold text-xs">{{ selectedPerson.name }}</span>
                                            <img src="../../assets/icone-career.svg" class="w-4" alt="icone">
                                        </div>
                                        <span
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                        >
                                            <ChevronUpDownIcon
                                            class="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                            />
                                        </span>
                                        </ListboxButton>

                                        <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                        >
                                        <ListboxOptions
                                            class="absolute top-16 bg-white-color max-h-48 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                                        >
                                            <ListboxOption
                                            v-slot="{ active, selected }"
                                            v-for="person in people"
                                            :key="person.name"
                                            :value="person"
                                            as="template"
                                            >
                                            <li
                                                :class="[
                                                active ? 'bg-dark-blue text-white-color' : 'text-dark-blue',
                                                'relative select-none cursor-pointer py-2 pl-6 pr-4',
                                                ]"
                                            >
                                                <span
                                                :class="[
                                                    selected ? 'font-medium' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                                >{{ person.name }}</span
                                                >
                                            </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
                            </div>
                            <div class="flex space-x-5">
                                <input type="text" name="ville" placeholder="Ville" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-1/4">
                                <div class="flex items-center justify-between border py-2 pr-2 border-dark-blue border-opacity-35 bg-white-color focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-3/4">
                                    <p class="text-sm font-normal">Upload CV <span class="text-xs">( JPG, PDF, 5MB )</span></p>
                                    <div @click="triggerFileInput" class="h-full flex items-center border-[1px] border-dark-blue border-dashed bg-white-color cursor-pointer rounded-md px-12">
                                        <input type="file" name="resume" id="resume" class="hidden" @change="handleFileChange">
                                        <img src="../../assets/upload.svg" class="h-10" alt="upload">
                                    </div>
                                </div>
                            </div>
                            <div type="button" class="flex w-fit pt-3">
                                <div class="flex items-center justify-between cursor-pointer bg-dark-blue hover:bg-[#004179e5] font-light text-base md:text-lg text-white-color px-3 md:px-8 py-1.5 md:py-2 rounded-full">
                                    <span>Envoyer</span>
                                    <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

  const people = [
    { id: 1, name: 'SEO Team Leader H/F'},
    { id: 2, name: 'Web Developer'},
    { id: 3, name: 'UI/UX Designer'},
    { id: 4, name: '3D Desiner'},
    { id: 5, name: 'SEO Team Leader H/F'},
  ]
  const selectedPerson = ref(people[0])

  function triggerFileInput() {
    document.getElementById('resume').click();
  }
function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
    // Handle the file as needed
    console.log("Selected file:", file.name);
    }
}

</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>