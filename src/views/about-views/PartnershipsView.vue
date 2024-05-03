<template>
    <div class="my-[56px] w-full flex items-center justify-center font-Poppins text-dark-blue flex-col">
        <div class="container flex flex-col items-center justify-between">
            <div class="w-full md:w-3/4 py-[28px] font-bold md:text-[41px] text-[20px]">Partenariats associatifs   </div>
            <div>
                <paragraphComponent />
            </div>
            <div class="w-full">
                <formDevenirPartenaire />
            </div>
            
        </div> 
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import paragraphComponent from '../../components/about/paragraphComponent.vue';
import formDevenirPartenaire from '../../components/about/formDevenirPartenaire.vue';
import SiteMapComponent from '../../components/SiteMapComponent.vue';
// const articls = [
//     {
//         articl:"Notre Mission et Vision",
//         text:`Chez Livréeo, nous croyons fermement que la collaboration est la clé du succès. Créée par des parents pour des parents, notre mission va au-delà de la simple vente de manuels et de fournitures scolaires. Nous visons à bâtir un pont solide entre Livréeo et les associations de parents d'élèves, afin de mieux comprendre et répondre aux besoins spécifiques des familles marocaine`
//     },
//     {
//         articl:"Pourquoi les Associations de Parents d'Élèves?",
//         text:`Les associations de parents d'élèves sont au cœur du système éducatif . Elles représentent la voix collective des familles . En collaborant étroitement avec ces associations, nous pouvons non seulement offrir des solutions sur mesure mais aussi développer des initiatives éducatives bénéfiques pour tous.`
//     },
//     {
//         articl:"Une Stratégie Axée sur l'Écoute et l'Innovation",
//         text:`L'innovation chez Livréeo ne réside pas seulement dans nos produits ou services, mais aussi dans notre manière d'interagir avec notre communauté. Chaque retour, chaque suggestion des parents et des associations est une pierre apportée à l'édifice que nous construisons ensemble. C'est cette écoute active et cette adaptabilité constante qui nous permettent de rester à la pointe, proposant des solutions qui sont non seulement génératrices de revenus pour nous, mais également justes, équitables et réellement bénéfiques pour les parents et leurs enfants.`
//     },
//     {
//         articl:"Possibilités et Engagements de Livréeo :",
//         text:`Chez Livréeo, nous comprenons l'importance d'une approche flexible et adaptée à chaque association. Nous sommes ouverts à la discussion pour façonner ensemble des partenariats qui répondent à vos besoins spécifiques, tout en gardant une vision commune pour l'éducation.`
//     },
//     {
//         articl:"",
//         text:`Des Offres Sur-Mesure : Nous offrons des réductions sur les manuels et fournitures scolaires, avec des tarifs justes et transparents. Ces réductions sont négociables et peuvent varier entre 13 % et 17 %, selon les modalités établies avec chaque association. Notre objectif est de fournir une valeur ajoutée tout en respectant l'équilibre financier de chaque partie.`
//     },
//     {
//         articl:"",
//         text:`.`
//     },
//     {
//         articl:"",
//         text:`Collaborations Innovantes : Notre volonté est de collaborer sur des projets éducatifs adaptés aux attentes et besoin des élves. `
//     },
//     {
//         articl:"",
//         text:`Ateliers et Séminaires : Nous souhaitons mettre en place des événements liés aux diverses problématiques éducatives que peuvent rencontrer les parents et le personnel encadrant, tout en étant planifiés selon vos suggestions`
//     },
//     {
//         articl:"Des engagements Flexibles Selon l'Ampleur de la Collaboration :",
//         text:`Selon le volume de la collaboration, nous pouvons offrir un soutien supplémentaire, flexible qui pourrais prendre la forme de  :`
//     },
//     {
//         articl:"",
//         text:`Campagnes de Sensibilisation et de Soutien aux Événements Locaux : Nous pourrions lancer des campagnes de sensibilisation ou soutenir financièrement des événements locaux comme des kermesses.`
//     },
//     {
//         articl:"",
//         text:`Aide Directe aux Familles :  Nous sommes prêts à contribuer à des fonds d'aide pour les familles en difficulté, participant ainsi activement au bien-être de la communauté.`
//     },
//     {
//         articl:"Nos Attentes en Termes de Partenariat :",
//         text:`Nous envisageons que nos partenaires favorisent la visibilité de Livréeo auprès de leurs membres. Cette promotion peut prendre diverses formes, à définir ensemble, pour une collaboration respectueuse et enrichissante pour tous.`
//     },
//     {
//         articl:"Construisons Ensemble l'Avenir de l'Éducation :",
//         text:`Notre objectif est de bâtir des partenariats évolutifs et dynamiques, qui grandissent et s'adaptent aux changements et aux besoins des associations et de leurs membres. Ensemble, explorons les possibilités, innovons et œuvrons pour un avenir éducatif meilleur pour toutes les familles marocaines.`
//     },
//     {
//         articl:"Devenir un Partenaire Livréeo :",
//         text:`Pour initier ce voyage collaboratif, nous avons simplifié le processus de mise en contact. En remplissant notre formulaire de contact, disponible sur notre page dédiée, vous ouvrez la porte à des discussions fructueuses et constructives.`
//     },
//     {
//         articl:"",
//         text:`Voici Comment Ça Marche :`
//     },
//     {
//         articl:"",
//         text:`+ Remplissez le Formulaire : Juste en dessous de ce texte, vous trouverez notre formulaire spécialement conçu pour les associations de parents d'élèves. Nous vous invitons à le remplir pour nous fournir les informations essentielles sur votre association`
//     },
//     {
//         articl:"",
//         text:`+ Planification de Réunions Préparatoires : Suite à votre prise de contact, notre équipe vous rejoindra pour organiser des réunions préparatoires. Ces rencontres seront l'occasion de discuter plus en détail de vos besoins, de nos propositions et de la manière dont nous pouvons travailler ensemble efficacement.`
//     },
//     {
//         articl:"",
//         text:`+ Vers la Signature d'une Convention : Ces réunions sont les prémices à la formalisation de notre partenariat. Notre objectif est de parvenir ensemble à la signature d'une convention qui respecte les intérêts et les aspirations de chaque partie.`
//     }
// ]
</script>