<template>
    <div class="bg-[#F9FDFE]">
        <div class="text-dark-blue container max-w-7xl mx-auto py-20">
            <div class="w-full flex items-center justify-center">
                <div class="flex flex-col md:flex-row w-[90%]">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <div class="w-fit">
                            <router-link to="/about/livreeo-recrute">                            
                                <img src="../../assets/back-arraw.svg" class="w-11" alt="back">
                            </router-link>
                        </div>
                        <div class="space-y-2 pt-6">
                            <p class="text-xs md:text-sm font-light">{{ contract_type }} . {{ city }}</p>
                            <p class="text-xs md:text-sm font-semibold">{{ name }}</p>
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
                        <form class="space-y-6 text-dark-blue pt-5">
                            <div class="md:flex md:space-x-5 space-y-5 md:space-y-0">
                                <input type="text" name="nom" placeholder="Nom Complet" v-model="info.name" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:font-light placeholder:text-sm text-sm md:text-base pl-4 h-12 md:h-16 w-full">
                                <input type="number" name="telephone" placeholder="Numéro de Téléphone" v-model="info.phone" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full">
                            </div>
                            <div class="w-full flex space-x-5">
                                <input type="text" name="mail" placeholder="Adresse E-mail" v-model="info.email" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-[60%]">
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
                                <input type="text" name="ville" placeholder="Ville" v-model="info.city" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-1/4">
                                <div class="flex items-center justify-between border py-2 pr-2 border-dark-blue border-opacity-35 bg-white-color focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-3/4">
                                    <p class="text-sm font-normal">Upload CV <span class="text-xs">( JPG, PDF, 5MB )</span></p>
                                    <div @click="triggerFileInput" class="h-full flex items-center border-[1px] border-dark-blue border-dashed bg-white-color cursor-pointer rounded-md px-12">
                                        <input type="file" name="resume" id="resume" class="hidden" accept="image/jpeg,.pdf" @change="handleFileSelected">
                                        <img src="../../assets/upload.svg" class="h-10" alt="upload">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" @click.prevent="applyOffre" class="flex w-fit pt-3">
                                <div class="flex items-center justify-between cursor-pointer bg-dark-blue hover:bg-[#004179e5] font-light text-base md:text-lg text-white-color px-3 md:px-8 py-1.5 md:py-2 rounded-full">
                                    <span>Envoyer</span>
                                    <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal" class="relative z-10">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <div
                        class="flex min-h-full items-center justify-center p-4 text-center"
                        >
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white-color p-6 text-left align-middle shadow-xl transition-all"
                            >
                            <div class="flex flex-col items-center space-y-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(0.5,0.5)"><path d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z" fill="#004079"></path><path d="M392.6,172.9c-5.8,-15.1 -17.7,-12.7 -30.6,-10.1c-7.7,1.6 -42,11.6 -96.1,68.8c-22.5,23.7 -37.3,42.6 -47.1,57c-6,-7.3 -12.8,-15.2 -20,-22.3c-22.1,-22.1 -46.8,-37.3 -47.8,-37.9c-10.3,-6.3 -23.8,-3.1 -30.2,7.3c-6.3,10.3 -3.1,23.8 7.2,30.2c0.2,0.1 21.4,13.2 39.6,31.5c18.6,18.6 35.5,43.8 35.7,44.1c4.1,6.2 11,9.8 18.3,9.8c1.2,0 2.5,-0.1 3.8,-0.3c8.6,-1.5 15.4,-7.9 17.5,-16.3c0.1,-0.2 8.8,-24.3 54.7,-72.7c37,-39.1 61.7,-51.5 70.3,-54.9c0.1,0 0.1,0 0.3,0c0,0 0.3,-0.1 0.8,-0.4c1.5,-0.6 2.3,-0.8 2.3,-0.8c-0.4,0.1 -0.6,0.1 -0.6,0.1v-0.1c4,-1.7 11.4,-4.9 11.5,-5c11.1,-4.8 14.8,-16.8 10.4,-28z" fill="#ffffff"></path></g></g>
                                </svg>
                                <p class="text-sm text-dark-blue">
                                    Nous avons bien reçu votre candidature.
                                </p>
                            </div>

                            <div class="w-full flex items-center justify-center mt-4">
                                <button
                                type="button"
                                class="inline-flex justify-center rounded-md border border-transparent bg-dark-blue px-4 py-2 text-sm font-medium text-white-color hover:bg-[#004179e5] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                @click="closeModal"
                                >
                                Compris, merci !
                                </button>
                            </div>
                            </DialogPanel>
                        </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
import { useFormStore } from '../../stors/FormStore'
import { ref, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'

  
  const route = useRoute();
  const data = useFormStore();
  const people = data.offreEmp.posts
  const selectedPerson = ref(people.find(person => person.id === parseInt(route.params.id)));
  
  const myFile = ref("")
  const fileUrl = ref("")
    


  const info = reactive({
    name: '',
    phone: '',
    email: '',
    city: '',
    post_id: selectedPerson.value.id,
    cv: myFile.value
  });

  const contract_type = ref(route.query.contract_type);
  const city = ref(route.query.city);
  const name = ref(route.query.name);

  // Watch for changes in selectedPerson and update the related data
    watch(selectedPerson, (newVal) => {
        if (newVal) {
            contract_type.value = newVal.contract_type;
            city.value = newVal.city.name;
            name.value = newVal.name;
            info.post_id = newVal.id;
        }
    });

  function triggerFileInput() {
    document.getElementById('resume').click();
  }
  function handleFileSelected(event){
    if(event.target.files.length === 0){
        myFile.value = "";
        fileUrl.value = "";
        return;
    }
    myFile.value = event.target.files[0];
  }
  watch(myFile, (myFile) => {
    if(!(myFile instanceof File)){
        return;
    }
    let fileReader = new FileReader();

    fileReader.readAsDataURL(myFile);
    fileReader.addEventListener("load", () => {
        fileUrl.value = fileReader.result;
    })
  })

const applyOffre = async () => {
    let mydata = new FormData();
    mydata.append('name', info.name);
    mydata.append('phone', info.phone.toString());
    mydata.append('email', info.email);
    mydata.append('city', info.city);
    mydata.append('post_id', info.post_id);
    mydata.append('cv', myFile.value);

    for (var pair of mydata.entries()) {
        console.log(pair[0]+ ' - ' + pair[1]); 
    }

    try {
        await data.applyJob(mydata);
        // Reset form fields after successful submission
        info.name = '';
        info.phone = '';
        info.email = '';
        info.city = '';
        myFile.value = "";
        fileUrl.value = "";
        openModal();
    } catch (error) {
        console.error('Error submitting the form:', error);
    }
}

//headless message
const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
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