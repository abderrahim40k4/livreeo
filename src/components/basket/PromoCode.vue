<template>
    <div class="w-[90%] md:w-3/4 lg:w-fit bg-white-color rounded-3xl px-4 py-3 space-y-2 mt-4 xl:mt-0">
        <h3 class="text-dark-blue text-base font-medium">Saisir un code promo </h3>
        <hr style="color: #EDEDED;">
        <div class="flex items-center justify-between">
            <form class="flex" @submit.prevent="addPromoCode">
                <div>
                    <input type="text" v-model="info.code" placeholder="LIVR456HG" class="placeholder:text-[#EDEDED] focus:outline-none text-base">
                </div>
                <div>
                    <button type="submit" class="text-white-color bg-dark-blue hover:bg-[#004179e5] text-sm rounded-full font-light px-4 py-1 transition duration-200 ease-in-out">Valider</button>
                </div>
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
                        class="text-lg font-bold leading-6 text-dark-blue"
                    >
                        Code Promo Appliqué !
                    </DialogTitle>
                    <div class="mt-2">
                        <p class="text-sm text-dark-blue">
                            Félicitations, votre code promo a été accepté.<br> 
                            Vous bénéficiez maintenant d'une réduction de {{ data.reduction * 100 }}%.
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
</template>
<script setup>
import { useLastStepStore } from '../../stors/endpoint';
import { reactive, ref } from 'vue';
//HeadlessUi imports
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const data = useLastStepStore();
const info = reactive({
    code: ''
});

const addPromoCode = async () => {
    let mydata = {
        code: info.code
    }
    try {
        await data.fetchPromoCode(mydata);
        if(data.reduction !== 0){
            info.code = '';
            openModal();
        }
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