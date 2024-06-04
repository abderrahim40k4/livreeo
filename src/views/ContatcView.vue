<template>
    <div class="bg-[#F9FDFE]">
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col xl:flex-row items-start justify-center px-6 md:px-8 xl:px-12 py-14 space-y-16 xl:space-y-0">
            <div class="flex flex-col items-start w-full xl:w-1/2 text-dark-blue px-4 xl:px-0">
                <div class="pb-14 md:pb-20 space-y-4">
                    <h2 class="text-xl lg:text-3xl font-bold">Contactez-Nous</h2>
                    <p class="text-xs md:text-sm font-normal w-3/4">
                        Si vous rencontrez des difficultés à passer votre commande
                        merci de nous <span class="font-bold">appeler sur le numéro</span> suivant:
                    </p>
                    <p class="text-base font-semibold md:text-lg">+212 663 635 204</p>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-start space-x-1">
                        <img src="../assets/Phone.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base">+212 522 91 93 </p>
                    </div>
                    <div class="flex items-center justify-start space-x-1">
                        <img src="../assets/Contact.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base">contact@livreeo.ma </p>
                    </div>
                    <div class="flex items-start justify-start space-x-1">
                        <img src="../assets/Location.svg" class="h-4 md:h-5" alt="Phone">
                        <p class="text-sm md:text-base xl:w-3/5">
                            Agroparc Km 5, Route d'Azemmour 
                            Dar Bouazza, Casablanca 20220. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full xl:w-1/2">
                <form class="space-y-5 text-dark-blue"><!-- @submit.prevent=""-->
                    <div class="md:flex md:space-x-5 space-y-5 md:space-y-0">
                        <input type="text" name="nom" placeholder="Nom Complet" v-model="info.full_name" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:font-light placeholder:text-sm text-sm md:text-base pl-4 h-12 md:h-16 w-full" required>
                        <input type="number" name="telephone" placeholder="Numéro de Téléphone" v-model="info.phone_number"  class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full" required>
                    </div>
                    <div class="flex">
                        <input type="text" name="email" placeholder="Adresse E-mail" v-model="info.email" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 placeholder:font-light h-12 md:h-16 w-full" required>
                    </div>
                    <div class="flex">
                        <textarea name="message" rows="6" placeholder="Message" v-model="info.message" class="border border-dark-blue border-opacity-35 focus:border-2 focus:border-dark-blue focus:outline-none rounded-lg placeholder:text-[#bebebe] placeholder:text-sm text-sm md:text-base pl-4 pt-4 placeholder:font-light w-full resize-none" required></textarea>
                    </div>
                    <button type="submit" @click.prevent="addContact" class="flex w-fit pt-3">
                        <div class="flex items-center justify-between cursor-pointer bg-dark-blue hover:bg-[#004179e5] font-light text-base md:text-lg text-white-color px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                            <span>Envoyer</span>
                            <img src="../assets/right.svg" class="h-6 md:h-8" alt="">
                        </div>
                    </button>
                </form>
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
                        <DialogTitle
                            as="h3"
                            class="text-lg font-semibold leading-6 text-dark-blue"
                        >
                            Contact réussi
                        </DialogTitle>
                        <div class="mt-2">
                            <p class="text-sm text-dark-blue">
                                Merci de nous avoir contactés. 
                                Nous avons reçu votre message et notre équipe a déjà commencé à travailler dessus.
                            </p>
                        </div>

                        <div class="mt-4">
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
    <SiteMapComponent />
</template>

<script setup>
import { useFormStore } from '../stors/FormStore.js'
import SiteMapComponent from '../components/SiteMapComponent.vue'
import { reactive, ref } from 'vue'

//HeadlessUi imports
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const data = useFormStore();

const info = reactive({
    full_name: '',
    phone_number: '',
    email: '',
    message: ''
});

const addContact = async () => {
    let mydata = {
        full_name: info.full_name,
        phone_number: info.phone_number.toString(),
        email: info.email,
        message: info.message
    }
    
    //console.log('Sending data:', mydata);

    try {
        await data.addFormData(mydata);
        // Reset form fields after successful submission
        info.full_name = '';
        info.phone_number = '';
        info.email = '';
        info.message = '';
        openModal();
    } catch (error) {
        console.error('Error submitting the form:', error);
    }
}

//headless
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

/* Firefox */
/* input[type=number] {
  -moz-appearance: textfield;
} */

</style>