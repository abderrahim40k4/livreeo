<template>
    <div class="bg-[#F9FDFE] py-6 md:py-12">
        <div class="container mx-auto max-w-7xl text-dark-blue flex items-center justify-center">
            <div class="w-full md:w-5/6 flex flex-col space-y-5 md:space-y-8">
                <h1 class="text-xl lg:text-3xl font-bold px-5 md:px-0">Politique de retour</h1>
                <div class="text-sm md:text-base space-y-8 md:space-y-12 px-2 md:px-0">
                    <div class="space-y-2 md:space-y-5 px-3 md:px-0">
                        <h3 class="font-bold">Notre Mission et Vision</h3>
                        <p class="font-medium">Vous pouvez soumettre une demande de retour pour les articles éligibles (voir tableau ci-dessous) dans les 7 jours suivant la date de livraison. Un retour est conditiconditionné aux articles non conforme, endommagé, défectueux, contrefait, ou en cas de changement d'avis * .</p>
                        <p class="font-medium">Lors du retour d'un article, assurez-vous qu'il est dans son état d'origine (incluant l'emballage) et que tous les sceaux, étiquettes, accessoires, etc. sont intacts. Sinon, votre retour sera refusé.</p>
                    </div>
                    <tableComponent />
                    <demandeForm />
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import demandeForm from '../../components/about/demandeForm.vue';
import tableComponent from '../../components/about/tableComponent.vue';
import SiteMapComponent from '../../components/SiteMapComponent.vue'



</script>