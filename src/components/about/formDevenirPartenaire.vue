<template>
    <div class="pt-4 md:pt-6">
        <h3 class="font-bold text-lg md:text-2xl pb-6">Devenir partenaire</h3>
        <form action="" class="space-y-4">
            <div class="flex flex-col space-y-2">
                <label for="Nom-association" class="font-semibold text-xs md:text-sm">Nom de l'association </label>
                <input type="text" placeholder="API" v-model="info.association_name" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="Nom-ecole" class="font-semibold text-xs md:text-sm">Nom de l'École</label>
                <input type="text" placeholder="Lycée lyaytey" v-model="info.school_name" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="Nom-ecole" class="font-semibold text-xs md:text-sm">Vôtre nom et prénom</label>
                <input type="text" placeholder="Nom" v-model="info.name" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="Numero-telephone" class="font-semibold text-xs md:text-sm">Numèro de telephone</label>
                <input type="number" placeholder="Nº" v-model="info.phone_number" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="fonction" class="font-semibold text-xs md:text-sm">Votre fonction au sein de l'association</label>
                <input type="text" placeholder="Fonction" v-model="info.function_in_association" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-2">
                <label for="fonction" class="font-semibold text-xs md:text-sm">E-mail :</label>
                <input type="text" placeholder="Email" v-model="info.email" class="border-[2px] border-dark-blue rounded-full w-3/4 md:w-[42%] py-2 font-medium text-xs md:text-sm px-3 md:px-5 placeholder:text-[#EBEBEB]">
            </div>
            <div class="flex flex-col space-y-5 pb-5 md:pb-8">
                <label for="fonction" class="font-semibold text-xs md:text-sm">Merci de nous préciser vos attentes en matière de partenariats :</label>
                <textarea name="message" rows="5" placeholder="Écrire" v-model="info.message" class="border-[2px] border-dark-blue rounded-2xl w-full md:w-[43%] px-3 py-2 font-medium text-xs md:text-sm placeholder:text-[#EBEBEB]"></textarea>
            </div>
            <button type="submit" @click.prevent="devenirPartenair" class="text-white-color bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out rounded-full text-sm md:text-base font-normal px-8 md:px-12 py-2">Devenir partenaire</button>
        </form>
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
                            Nous avons bien reçu votre demande de partenariat et notre équipe va l'examiner dans les plus brefs délais.
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
</template>
<script setup>
import { useFormStore } from '../../stors/FormStore.js'
import { reactive, ref } from 'vue';

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
    association_name: '',
    school_name: '',
    name: '',
    surname: '',
    phone_number: '',
    function_in_association: '',
    email: '',
    message: '',
});

const devenirPartenair = async () => {
    let mydata = {
        association_name: info.association_name,
        school_name: info.school_name,
        name: info.name,
        surname: info.name,
        phone_number: info.phone_number.toString(),
        function_in_association: info.function_in_association,
        email: info.email,
        message: info.message,
    }
    
    //console.log('Sending data:', mydata);

    try {
        await data.addPartenaire(mydata);
        // Reset form fields after successful submission
        info.association_name = '';
        info.school_name = '';
        info.name = '';
        info.surname = '';
        info.phone_number = '';
        info.function_in_association = '';
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