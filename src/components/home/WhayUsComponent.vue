<template>
    <div class="container mx-auto max-w-7xl">
        <div class="w-full flex flex-col items-center justify-center pb-10 px-12">
            <div class="flex flex-col items-center justify-center py-2 md:py-6">
                <h1 class="text-soft-dark-blue text-xl md:text-3xl font-semibold">3 RAISONS</h1>
                <p class="text-[10px] md:text-sm font-light leading-6 text-[#6192BF]">D'utiliser Livreeo.ma</p>
            </div>
            <div class="w-full flex flex-col lg:flex-row items-center justify-between pt-6 lg:pt-12 gap-6 lg:gap-20">
                <div class="w-full xl:w-1/3 flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center space-y-3 lg:space-y-6">
                        <img src="../../assets/simplicon.svg" class="h-16 lg:h-24" alt="simple">
                        <h3 class="text-lg md:text-xl text-dark-blue left-6 font-medium">Simple</h3>
                        <p class="w-full sm:w-1/2 lg:w-full text-[#3273BA] text-center text-xs md:text-sm font-normal leading-4 md:leading-5 h-36 lg:h-44 pt-2 lg:pt-6">Avant pour préparer la rentrée, c'était un temps fou perdu dans les rayons et une attente interminable en caisse ! Avec Livréeo.ma, les courses pour la rentrée des classes de votre enfant se font en quelques clics.</p>
                    </div>
                </div>
                <div class="w-full xl:w-1/3 flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center space-y-3 lg:space-y-6">
                        <img src="../../assets/lamp.svg" class="h-16 lg:h-24" alt="lamp">
                        <h3 class="text-lg md:text-xl text-dark-blue left-6 font-medium">Malin</h3>
                        <p class="w-full sm:w-1/2 lg:w-full text-[#3273BA] text-center text-xs md:text-sm font-normal leading-4 md:leading-5 h-36 lg:h-44 pt-2 lg:pt-6">On a mis la main sur la liste des fournitures scolaires de votre enfant pour vous simplifier la vie à la rentrée. Dites-nous juste son école et sa classe, et on vous prépare le pack qui colle au plus près de sa liste. Vous nous remercierez plus tard !</p>   
                    </div>
                </div>
                <div class="w-full xl:w-1/3 flex flex-col items-center justify-center">
                    <div class="flex flex-col items-center justify-center space-y-3 lg:space-y-6">
                        <img src="../../assets/emojismiling.svg" class="h-16 lg:h-24" alt="economique">
                        <h3 class="text-lg md:text-xl text-dark-blue left-6 font-medium">Économique</h3>
                        <p class="w-full sm:w-1/2 lg:w-full text-[#3273BA] text-center text-xs md:text-sm font-normal leading-4 md:leading-5 h-36 lg:h-44 pt-2 lg:pt-6">Nos packs ne sont pas uniquement pratiques, ils vous permettent aussi de faire des économies. Avec Livréeo.ma, vous bénéficierez toujours d'une sélection de produits et de marques référencées au meilleur rapport qualité-prix.</p>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-center pt-4">
                <router-link to="/pack"><button class="text-[#FFFFFF] text-sm md:text-lg font-semibold bg-[#3273BA] hover:bg-[#3683d4dd] transition duration-200 ease-in-out px-6 py-3 rounded-full lg:mt-5">Je Commande</button></router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
const content = [
    {
        id:1,
        title:'Simple ',
        text:'Avant pour préparer la rentrée, c était un temps fou perdu dans les rayons et une attente interminable en caisse ! Avec Livréeo.ma, les courses pour la rentrée des classes de votre enfant se font en quelques clics.',
    },
    {
        id:2,
        title:'Malin',
        text:'On a mis la main sur la liste des fournitures scolaires de votre enfant pour vous simplifier la vie à la rentrée. Dites-nous juste son école et sa classe, et on vous prépare le pack qui colle au plus près de sa liste. Vous nous remercierez plus tard !',
    },
    {
        id:3,
        title:'Économique',
        text:'Nos packs ne sont pas uniquement pratiques, ils vous permettent aussi de faire des économies. Avec Livréeo.ma, vous bénéficierez toujours d une sélection de produits et de marques référencées au meilleur rapport qualité-prix.',
    }
]
</script>