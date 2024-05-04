<template>
    <div class="md:my-[56px] my-[26.5px] w-full flex items-center justify-center font-Poppins text-dark-blue flex-col md:px-0 px-[12px]">
        <div class="container flex flex-col items-center justify-between">
            <div class="w-full md:w-3/4 py-[28px] font-bold md:text-[41px] text-[20px]">Politique de retour</div>
            <div v-for="articl in articls" class="w-full">
                <!-- <paragraphComponent :articl="articl.articl" :content="articl.text"/> -->
            </div>
            <div class="w-full mt-[40px] flex justify-center items-center">
                <tableComponent/>
            </div>
            <div class="w-full">
                <RetourForm/>
            </div>
        </div> 
    </div>
    <SiteMapComponent/>
</template>
<script setup>
//import paragraphComponent from '../../components/about/paragraphComponent.vue';
import tableComponent from '../../components/about/tableComponent.vue';
import RetourForm from '../../components/about/comndRetourForm.vue';
import SiteMapComponent from '../../components/SiteMapComponent.vue'

const articls = [
    {
        articl:"Retourner un article :",
        text:`Vous pouvez soumettre une demande de retour pour les articles éligibles (voir tableau ci-dessous) dans les 7 jours suivant la date de livraison. Un retour est conditiconditionné aux articles non conforme, endommagé, défectueux, contrefait, ou en cas de changement d'avis * .`
    },
    {
        articl:"",
        text:`Lors du retour d'un article, assurez-vous qu’il est dans son état d’origine (incluant l’emballage) et que tous les sceaux, étiquettes, accessoires, etc. sont intacts. Sinon, votre retour sera refusé.`
    },
]
</script>