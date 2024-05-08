<template>
    <div class="bg-[#FFFFFF] text-dark-blue container mx-auto">
        <div class="w-full flex flex-col items-center justify-center space-y-3 pt-6">
            <h3 class="text-xl lg:text-3xl font-bold">Modalité de livraison </h3>
            <p class="w-1/2 font-bold text-sm md:text-base text-center">Quelles options de livraison s'offrent à vous et à quelle prix ? Chez Livréeo, nous mettons à votre disposition différentes solutions adaptées à vos besoins.</p>
        </div>
        <div class="px-16 text-dark-blue pt-10">
            <hr >
        </div>
        <div class="w-full flex items-center justify-center text-sm px-20 py-6">
            <div class="w-3/5 space-y-4">
                <h3 class="font-bold">Livraison Standard par amana colis<br> <span class="font-semibold">Au tarif de 19 MAD</span> </h3>
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
                <h3 class="font-bold">Livraison Express par amana colis<br> <span class="font-semibold">Au tarif de 76 MAD</span></h3>
                <p> + Délais de livraison : 8 jour ouvrées</p>
                <p>+ Signature : requise</p>
                <p>+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifiez egalement vos couriers indesirables)</p>
            </div>
        </div>
        <div class="px-16 text-dark-blue">
            <hr >
        </div>
        <div class="w-full flex items-center justify-center text-sm px-20 py-8">
            <div class="w-3/5 space-y-4">
                <h3 class="font-bold">Livraison Flash par amana colis<br> <span class="font-semibold">Au tarif de 30 MAD</span></h3>
                <p>Réservé aux articles “Fournitures“ à savoir : Calculatrices, trousses, cartables, ainsi que toute les fourniutres scolaires) </p>
                <p>+ Délais de livraison : 4 jours ouvrées</p>
                <p>+ Signature : requise.</p>
                <p>+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifie egalement vos couriers indesirables.)</p>
            </div>
            <div class="w-2/5 flex items-center justify-center">
                <img src="../../assets/livraison.svg" class="h-60" alt="">
            </div>
        </div>
        <div class="px-16 text-dark-blue">
            <hr >
        </div>
        <div class="flex w-full px-16 pb-16 pt-6">
            <div class="w-1/2 space-y-16">
                <div class="w-full flex items-center justify-around">
                    <div>
                        <img src="../../assets/suivi2.webp" class="h-56" alt="">
                    </div>
                    <div></div>
                </div>
                <div class="space-y-8">
                    <h3 class="font-bold text-sm md:text-base">Fonctionnement de l'outil de suivi de commande</h3>
                    <div class=" w-11/12 space-y-4">
                        <p>Munissez-vous d'abord de votre numéro de commande. <br>Notre outil de suivi de commande vous permet de :</p>
                        <ul class="list-disc space-y-4 pl-6">
                            <li>Vous renseigner sur le statut de livraison de votre commande, qu'il s'agisse d'une livraison par transporteur ou par envoi postal.</li>
                            <li>Modifier la date de livraison</li>
                            <li>Annuler une commande*</li>
                        </ul>
                        <p>*L'annulation de commande est possible si vous avez commandé en ligne et que l'email de confirmation de commande reçu comporte la mention "Commande Annulable ". <a href="#" class="underline">Cliquez-ici pour annuler votre commande</a>.</p>
                    </div>
                </div>
            </div>
            <div class="w-1/2 space-y-8">
                <div class="w-full flex items-center justify-center">
                    <div>
                        <img src="../../assets/women-delevery.svg" class="h-64" alt="">
                    </div>
                </div>
                <div class="space-y-6 pl-12">
                    <h3 class="font-bold text-sm md:text-base">Comprendre le statut de votre commande</h3>
                    <div class="space-y-4">
                        <p>Après avoir commandé, que se passe-t-il ensuite ? Voici un guide des étapes qui attendent votre commande avant que vous la receviez.</p>
                        <p>Commande reçue : Nous avons reçu votre commande, qui sera traitée dès que possible.</p>
                        <p>Traitement en cours : Votre commande est en cours de traitement et de finalisation. </p>
                        <p>Prête à être envoyée : Votre commande est prête et sur le point d'être expédiée.</p>
                        <p>En route : Votre commande a quitté les locaux de notre expéditeur et elle est en cours de livraison chez vous.</p>
                        <p>Livrée : Votre commande a été livrée.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
</script>