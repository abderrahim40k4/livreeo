<template>
    <div class="bg-[#FFFFFF] text-dark-blue">
        <div class="w-full flex flex-col items-center justify-center space-y-3 pt-6">
            <h3 class="text-xl lg:text-3xl font-bold">Modalité de livraison </h3>
            <p class="w-1/2 font-bold text-sm md:text-base text-center">Quelles options de livraison s'offrent à vous et à quelle prix ? Chez Livréeo, nous mettons à votre disposition différentes solutions adaptées à vos besoins.</p>
        </div>
        <div class="px-16 text-dark-blue pt-10">
            <hr >
        </div>
        <div class="w-full flex items-center justify-center text-sm px-20 py-6">
            <div class="w-3/5 space-y-4">
                <h3 class="font-semibold">Livraison Standard par amana colis<br> Au tarif de 19 MAD </h3>
                <p>Obligatoire pour le paymement en 3 ou 2 fois sans frais </p>
                <p>+ Délais de livraison : 2 semaine avant la rentrée soclaire ( Vous aurez la possiblité une fois le payement effectuer de choisir le jour qu'il vous conviendra le mieu. )</p>
                <p>+ Signature : rquise.</p>
                <p>+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifie egalement vos couriers indesirables.)</p>
            </div>
            <div class="w-2/5 flex items-center justify-center">
                <img src="../../assets/suivi1.webp" class="h-60" alt="">
            </div>
        </div>
        <div class="px-16 text-dark-blue">
            <hr >
        </div>
        <div class="w-full flex items-center justify-center text-sm px-20 py-6">
            <div class="w-3/5">
                <img src="../../assets/suivi3.webp" class="h-64 pl-5" alt="">
            </div>
            <div class="w-2/5 flex flex-col items-start justify-center space-y-4">
                <h3 class="font-semibold">Livraison Express par amana colis<br> Au tarif de 76 MAD</h3>
                <p> + Délais de livraison : 8 jour ouvrées</p>
                <p>+ Signature : requise</p>
                <p>+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifiez egalement vos couriers indesirables)</p>
            </div>
        </div>
        <div class="px-16 text-dark-blue pb-20">
            <hr >
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
</script>