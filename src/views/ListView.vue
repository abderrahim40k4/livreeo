<template>
    <div class="container mx-auto max-w-7xl">
        <div class="flex flex-col-reverse lg:flex-row items-center">
            <div class="w-full lg:w-3/5 flex flex-col items-start p-5 lg:p-10 2xl:p-14">
                <h2 class="text-base md:text-lg font-bold text-dark-blue pb-16">Liste de fourniutres scolaires : {{ groupeId.name }} - {{ schoolName }} </h2>
                <div class="flex items-center space-x-2 pb-6">
                    <p class="text-sm md:text-base font-normal">Télécharger vôtre liste format PDF</p>
                    <a :href="pdfLink" target="_blank" rel="noopener noreferrer">
                        <button class="flex items-center py-1 px-3 bg-white-blue hover:bg-light-blue transition duration-200 ease-in-out rounded-full">
                            <img src="../assets/download.svg" class="h-6" alt="download">
                        </button>
                    </a>
                </div>
                <p class="text-sm md:text-base font-normal w-full md:w-[60%] 2xl:w-3/4 pb-16">
                    Nous avons la liste officielle de votre enfant,
                    Faite vous livrée à un prix imbattable en <span class="font-bold underline text-dark-blue cursor-pointer">cliquant ici</span>
                </p>
                <router-link to="/Pack"><button class="text-base md:text-lg font-light bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out rounded-full px-4 py-2 text-white-color">Faire Son Shopping</button></router-link>
            </div>
            <div class="w-full lg:w-2/5 flex justify-center">
                <img src="../assets/pdf.webp" class="h-[300px] md:h-[500px]">
            </div>
        </div>
    </div>
</template>
<script setup>
import { useFirstStepStore } from '../stors/FirstStepStore';

const data = useFirstStepStore();

// console.log('id groupe :' + data.SelectedGroupL[0]);
// console.log('id langue :' + data.SelectedGroupL[1]);

const schoolName = data.Schools.find(school => school.id === data.SelectedSchool).name;
const groupeId = data.Class.find(groupe => groupe.id === data.SelectedGroupL[0]);
const pdfLink = groupeId.languages.find(langue => langue.id === data.SelectedGroupL[1]).scoolList;

</script>