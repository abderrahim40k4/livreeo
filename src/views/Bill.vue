<template>
    <div class="container pt-10 pb-5 px-8">
        <div class="flex items-center justify-between pb-4">
            <div class="space-y-3">
                <img src="../assets/logo-liv.svg" class="w-44 pb-5" alt="">
                <div class="flex flex-col pl-5">
                    <h1 class="text-[#000] font-bold text-base">Date</h1>
                    <span class="text-[#004079] font-medium text-sm inline-block align-top">Avr 02, 2023</span>
                </div>
                <div class="pl-6">
                    <p class="text-sm font-semibold">Status de commande : <span class="text-[#004079]">Payé par Carte Bancaire</span></p>
                </div>
            </div>
            <div class="flex flex-col space-y-6 pr-5">
                <div class="flex flex-col items-end">
                    <p class="text-sm font-medium text-[#000]">www.livreeo.ma</p>
                    <p class="text-sm font-medium text-[#000]">contact@livreeo.ma</p>
                </div>
                <div class="flex flex-col items-end">
                    <p class="text-lg font-bold">Numéro de commande :</p>
                    <p class="text-2xl font-bold">#6578</p>
                </div>
            </div>
        </div>
        <div class="border-[1px] border-[#D1D1D1] mx-6">
        </div> 
        <div class="pt-4 px-8 space-y-5">
            <h1 class="text-lg font-semibold">Info de commande</h1>
            <div class="w-full flex items-start pl-1">
                <div class="w-1/2 space-y-3 text-sm">
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Nom Complet :</p><p class="font-semibold">Younes idtalab</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Email :</p><p class="font-semibold">younesidtalab@gmail.com</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Ville :</p><p class="font-semibold">Agadir</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Adress :</p><p class="font-semibold">Agadir</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Apartment/Etage :</p><p class="font-semibold">04 hgfhhg jhgjjj</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Num de Télèphone :</p><p class="font-semibold">0655555555</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Postal Code :</p><p class="font-semibold">70000</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Code de Paiement :</p><p class="font-semibold">111111</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Mode de livraison :</p><p class="font-semibold">Standard</p>
                    </div>
                </div>
                <div class="w-1/2 space-y-3 text-sm">
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Type de Paiement :</p><p class="font-semibold">Younes idtalab</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Ecole :</p><p class="font-semibold">younesidtalab@gmail.com</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Classe:</p><p class="font-semibold">Agadir</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Langues:</p><p class="font-semibold">04 hgfhhg jhgjjj</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Pack Livres :</p><p class="font-semibold">0655555555</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Pack Fournitures :</p><p class="font-semibold">70000</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Plastification :</p><p class="font-semibold">111111</p>
                    </div>
                    <div class="flex space-x-2">
                        <p class="text-[#004079] font-normal">Accessoires Scolaires :</p><p class="font-semibold">Standard</p>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="font-medium text-lg pt-6 pl-6 pb-2">Detail de paiement</h1>
        <div class="border-[1px] border-[#D1D1D1] mx-6">
        </div> 
        <div class="w-full flex items-center justify-between px-6 pt-6 font-medium text-base">
            <div>
                <p>Pack Livres</p>
                <p>Cartable</p>
                <p>TVA</p>
                <p>Livraison</p>
                <p class="text-lg font-semibold pt-4">Total de la commande</p>
            </div>
            <div class="flex flex-col items-end">
                <p>1788,88 DHS</p>
                <p>800 DHS</p>
                <p>233,88 DHS</p>
                <p>1788,88 DHS</p>
                <p class="font-bold text-2xl pt-4">1468,90DHS</p>
            </div>
        </div>
        <div class="pl-6 py-8">
            <img src="../../public/qrcode.svg" class="w-24 h-24" alt="qrcode">
        </div>
        <div class="w-full flex items-center justify-between px-6">
            <div class="w-1/2 text-[#004079] flex flex-col">
                <h1 class="text-3xl font-bold pb-2">Contactez-Nous</h1>
                <p class="text-sm font-normal">Si vous rencontrez des difficultés à passer</p>
                <p class="text-sm font-normal inline-block align-top"> votre commande</p>
                <p class="text-sm font-normal inline-block align-top">merci de nous <span class="font-semibold">appeler sur le numéro</span> suivant :</p>
                <p class="text-lg font-semibold pt-3">+212 663 635 204</p>
            </div>
            <div class="w-1/2 flex flex-col items-end justify-start">
                <div class="text-[#004079] text-sm flex flex-col">
                    <p>Agroparc Km 5, Route</p>
                    <p class="inline-block align-top">d'Azemmour</p>
                    <p class="inline-block align-top">Dar Bouazza, Casablanca </p>
                    <p class="inline-block align-top">20220.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>