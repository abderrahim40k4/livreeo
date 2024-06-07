<template>
    <Listbox :model-value="props.modalClass"><!--multiple-->
        <ListboxOptions static>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-10 gap-y-2 md:gap-y-5">
            <!--Default langues cards-->
            <ListboxOption
              v-if="props.options.length == 0"
              v-for="person in classes"
              :key="person.id"
              :value="person"
              as="template"
            >
              <li
              class="rounded-full border-[3px] border-[#E8E8E8] text-[#6192BF] font-normal text-xs md:text-sm cursor-default pointer-events-none blur-[2px] min-w-36 text-center py-4 transition duration-200 ease-in-out"
              >
              {{ person.nom }}
              </li>
            </ListboxOption>

            <!--fetch langue from API-->
            <ListboxOption
              v-for="person in props.options"
              :key="person.id"
              :value="person.id"
              as="template"
              v-slot="{ selected }"
            >
              <li
              :class="{
                  'text-dark-blue bg-[#E4F3FF] border border-[#1E94FD] font-semibold': selected,
                  'border-[3px] border-[#E8E8E8] text-[#6192BF] font-normal': !selected,
              }"
              class="rounded-full text-xs md:text-sm cursor-pointer w-32 md:w-36 text-center py-3 md:py-4 transition duration-200 ease-in-out"
              >
              {{ person.name }}
              </li>
            </ListboxOption>
          </div>
        </ListboxOptions>
    </Listbox>

</template>
<script setup>
import {
  Listbox,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'



const props = defineProps({
  modalClass: [String, Number],
  options: Array
})


const classes = [
  {
    id: 1,
    nom: 'Anglais LV1',
  },
  {
    id: 2,
    nom: 'Anglais LV2',
  },
  {
    id: 3,
    nom: 'Anglais LV3',
  },
  {
    id: 4,
    nom: 'Francais LV1',
  },
  {
    id: 5,
    nom: 'Francais LV2',
  },
  {
    id: 6,
    nom: 'Francais LV3',
  },
  {
    id: 7,
    nom: 'Francais LV4',
  },
  {
    id: 8,
    nom: 'Anglais LV4',
  },
]

</script>

