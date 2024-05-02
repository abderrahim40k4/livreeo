<template>
<div class="relative flex flex-col space-y-4">
    <label for="countries" class="text-base font-medium dark:text-white">{{ labale }}</label>
    <!-- <select id="countries" class="rounded-full ring-2 ring-dark-blue focus:ring-4 focus:ring-dark-blue focus:outline-none text-[#6192BF] text-sm font-medium w-44 py-3 pl-4">
        <option selected>{{ text }}</option>
    </select> -->
    <Listbox  v-model="selectedPerson">
        <ListboxButton class="relative rounded-full ring-2 ring-dark-blue focus:outline-none text-[#6192BF] text-sm font-medium w-44 py-3 flex pl-4">
            <span class="block truncate">{{ selectedPerson.name }}</span>
            <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4"
            >
                <img src="../../assets/icone-select.svg" class="w-3" alt="select">
            </span>
        </ListboxButton>
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
            <ListboxOptions class="absolute top-[75px] w-44 mt-1 text-white-color overflow-auto rounded-xl bg-[#6192BF] py-1 text-base shadow-lg ring-1 ring-white-color focus:outline-none sm:text-sm">
                <ListboxOption
                    v-for="person in people"
                    v-slot="{ active, selected }"
                    :key="person.id"
                    :value="person"
                    as="template"
                >
                <li
                    :class="[
                        active ? 'bg-dark-blue' : '',
                        'relative cursor-pointer select-none py-2 pl-5 pr-4',
                    ]"
                >    
                    {{ person.name }}
                </li>
                </ListboxOption>
            </ListboxOptions>
        </transition>
    </Listbox>
    
</div>

</template>
<script setup>
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const people = [
    { id: 1, name: 'Casablanca', unavailable: false },
    { id: 2, name: 'Marrakech', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedPerson = ref(people[0])

const props = defineProps({
    labale:{
        type: String,
        defualt:'',
    },
    text:{
        type: String,
        defualt:'',
    },
    option:{
        type: Array,
        defualt:[],
    }
})
</script>
<style scoped>

</style>
