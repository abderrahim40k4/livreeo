import { createWebHashHistory, createRouter } from "vue-router";

import Home from '../views/HomeView.vue'
import PackSelection from '../views/packSelectionView.vue'
import LivresFourniture from '../views/LivresFourniture.vue'
import List from '../views/SchooleListView.vue'
import ListView from '../views/ListView.vue'
import Contact from '../views/ContatcView.vue'
import conditionLegal from '../views/about-views/ConditionsGeneralesView.vue'
import HowWeAre from '../views/about-views/HowWeAreView.vue'
import SuivreCommande from '../views/SuivreCommande.vue'
import LivreeoCrecheView from '../views/about-views/LivreeoCrecheView.vue'
import Partnerships from '../views/about-views/PartnershipsView.vue'
import PolitiqueRetour from '../views/about-views/PolitiqueRetour.vue'
import ModaliteLivraison from '../views/about-views/ModaliteLivraison.vue'
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
import Recrutement from '../views/about-views/RecrutementView.vue'
import RecrutementForm from '../views/about-views/RecrutementForm.vue'
import Bill from '../views/Bill.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
          {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/Pack',
            name: 'Pack',
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
            name: 'Accessoires Scolaires',
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
          path: '/about/conditions-generales',
          name: 'condition-generale',
          component: conditionLegal
        },
        {
          path: '/about/how-we-are',
          name: 'how-we-are',
          component: HowWeAre
        },
        {
          path: '/about/livreeo-creche',
          name: 'LivreeoCrecheView',
          component: LivreeoCrecheView
        },
        {
          path: '/about/partenariats-associatifs',
          name: 'Partenariats Associatifs',
          component: Partnerships
        },
        {
          path: '/about/politique-de-retour',
          name: 'Politique-de-retour',
          component: PolitiqueRetour
        },
        {
          path: '/about/modalite-de-livraison',
          name: 'ModaliteLivraison',
          component: ModaliteLivraison
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
        {
          path: '/about/livreeo-recrute',
          name: 'Livreeo Recrute',
          component: Recrutement
        },
        {
          path: '/about/livreeo-recrute/:id',
          name: 'Livreeo Recrute Form',
          component: RecrutementForm,
          props: (route) => ({ id: route.params.id, contract_type: route.query.contract_type, city: route.query.city, name: route.query.name })
        },
        {
          path: '/bill',
          name: 'Bill',
          component: Bill,
          meta: { hideNavBar: true }
        }
    ]
  })
  
export default router;