<template>
    <div class="my-[56px] w-full flex items-center justify-center font-Poppins text-dark-blue flex-col">
        <div class="container flex flex-col items-center justify-between">
            <div class="w-full md:w-3/4 py-[28px] font-bold md:text-[41px] text-[20px]">Livréeo créche  </div>
            <div v-for="articl in articls" class="w-full">
                <!-- <paragraphComponent :articl="articl.articl" :content="articl.text"/> -->
            </div>
        </div> 
    </div>
    <SiteMapComponent/>
</template>
<script setup>
//import paragraphComponent from '../../components/about/paragraphComponent.vue';
import SiteMapComponent from '../../components/SiteMapComponent.vue'
const articls = [
    {
        articl:"Un Concept Unique pour les Professionnels des Crèches au Maroc",
        text:`Livréeo Crèche est une extension naturelle de notre passion et de notre engagement envers l'éducation au Maroc. En reconnaissant les défis uniques auxquels sont confrontés les professionnels des crèches, nous avons développé une solution innovante : une plateforme dédiée qui répond spécifiquement à vos besoins d'approvisionnement en fournitures de qualité à des prix justes et cohérents.`
    },
    {
        articl:"",
        text:`Notre mission est de simplifier votre gestion quotidienne en vous libérant des contraintes d'approvisionnement. Grâce à notre site web intuitif et convivial, vous pouvez commander tout le nécessaire pour votre crèche, assurant ainsi un environnement d'apprentissage riche et stimulant pour les tout-petits. `
    },
    {
        articl:"Pourquoi Choisir Livréeo Crèche ?",
        text:`+ Prix Justes et Coherents : Nous nous engageons à fournir des tarifs transparents et compétitifs, minimisant vos coûts sans compromettre la qualité. `
    },
    {
        articl:"",
        text:`+ Simplicité et Commodité : Notre plateforme vous permet de gérer facilement vos commandes, avec une livraison directement à votre crèche `
    },
    {
        articl:"",
        text:`+ Qualité et Sélection : Nous sélectionnons soigneusement nos fournitures pour garantir leur adéquation avec le milieu éducatif des jeunes enfants `
    },
    {
        articl:"Découvrez en Plus sur Livréeo Crèche",
        text:` Nous invitons tous les professionnels des crèches à découvrir comment Livréeo Crèche peut transformer votre expérience d'approvisionnement. Pour en savoir plus et commencer à bénéficier de notre expertise, visitez notre site web : www.livreeo-creche.ma `
    },
    {
        articl:"Rejoignez la Révolution de l'Approvisionnement des Crèches",
        text:`Ne laissez pas l'approvisionnement en fournitures être un casse-tête. Avec Livréeo Crèche, vous avez un partenaire fiable à vos côtés. Naviguez vers notre site dès maintenant et prenez le premier pas vers une gestion simplifiée et économique de votre crèche `
    },
]
</script>