import { createWebHashHistory, createRouter } from "vue-router";

import Home from '../views/HomeView.vue'
import PackSelection from '../views/packSelectionView.vue'
import LivresFourniture from '../views/LivresFourniture.vue'
import List from '../views/SchooleListView.vue'
import ListView from '../views/ListView.vue'
import Contact from '../views/ContatcView.vue'
import conditionLegal from '../views/about-views/ConditionGeneralView.vue'
import HowWeAre from '../views/about-views/HowWeAreView.vue'
import SuivreCommande from '../views/SuivreCommande.vue'
import Liveryocriche from '../views/about-views/LiveryocricheView.vue'
import Partnerships from '../views/about-views/PartnershipsView.vue'
import RouterPolicy from '../views/about-views/RouterPolicyView.vue'
import Livreson from '../views/about-views/LivresonModalitiView.vue'
import StatutCommande from '../views/StatutCommande.vue'
import Bascket from '../views/BasketView.vue'
import ModeLivraison from '../views/ModeLivraison.vue'
import Fourniture from '../views/FournitureView.vue'
import Addresse from '../views/UserInfo/AddresseView.vue'
import UserInfo from '../views/UserInfo/userInformation.vue'
import paymentMethod from '../views/UserInfo/paymentMethod.vue'
import cartInfo from '../views/UserInfo/cartInfoView.vue'
import facture from '../views/UserInfo/comondView.vue'
import TypeFourniture from '../views/TypeFourniture.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
          {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/pack-selection',
            name: 'pack-selection',
            component: PackSelection
          },
          {
            path: '/bascket',
            name: ' bascket',
            component:  Bascket
          },
          {
            path: '/Livres-Fourniture',
            name: 'Livres-Fourniture',
            component: LivresFourniture
          },
          {
            path: '/Fourniture/:categorie',
            name: 'Fourniture',
            component: Fourniture
          },
          {
            path: '/mode-livraison',
            name: 'ModeLivraison',
            component:  ModeLivraison
          },
          {
            path: '/adresse-de-livraison',
            name: 'Addresse',
            component:  Addresse
          },
          {
            path: '/informations-personnelles',
            name: 'Informations-personnelles',
            component:UserInfo
          },
          {
            path: '/moyen-de-payement',
            name: 'moyen-de-payement',
            component:paymentMethod
          },
          {
            path: '/carte-bancaire',
            name: 'cart-info',
            component:cartInfo
          },
          {
            path: '/facture',
            name: 'facture',
            component:facture
          },
          
          {
            path: '/list',
            name: 'Listes Scolaires',
            component: List
          },
          {
            path: '/list-view',
            name: 'list-view',
            component: ListView
          },
        {
          path: '/contactez-nous',
          name: 'contact',
          component: Contact
        },
        {
          path: '/about/condition-general',
          name: 'condition-general',
          component: conditionLegal
        },
        {
          path: '/about/how-we-are',
          name: 'how-we-are',
          component: HowWeAre
        },
        {
          path: '/about/livero-criche',
          name: 'livero-criche',
          component: Liveryocriche
        },
        {
          path: '/about/partenariats-associatifs',
          name: 'Partenariats-associatifs',
          component: Partnerships
        },
        {
          path: '/about/router-polic',
          name: 'router-policy',
          component: RouterPolicy
        },
        {
          path: '/about/Livreson',
          name: 'livreson',
          component: Livreson
        },
        {
          path: '/suivre-commande',
          name: 'Suivre Ma Commande',
          component: SuivreCommande
        },
        {
          path: '/statut-commande',
          name: 'Statut Commande',
          component: StatutCommande
        },
        {
          path: '/type-fournitures',
          name: 'Type Fournitures',
          component: TypeFourniture
        },
    ]
  })
  
export default router;