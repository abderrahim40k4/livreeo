<template>
    <RadioGroup :model-value="props.modalClass">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-10 gap-y-2 md:gap-y-5">
          <RadioGroupOption
            v-if="props.options.length == 0"
            as="template"
            v-for="classe in classes"
            :key="classe.nom"
            :value="classe.id"
          >
            <div
              class="relative flex cursor-default pointer-events-none blur-[2px] rounded-full w-36 md:w-48 pt-1 md:pt-1.5 focus:outline-none border-[3px] border-[#E8E8E8] transition duration-200 ease-in-out"
            >
                <div class="w-full flex items-center justify-center">
                  <div class="text-center space-y-0">
                    <RadioGroupLabel
                      as="p"
                      class="text-[#6192BF] text-sm md:text-base font-medium transition duration-200 ease-in-out"
                    >
                      {{ getFirstLettersUppercase(classe.nom) }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      class="text-[#6192BF] text-[8px] md:text-xs font-medium inline-block align-text-top transition duration-200 ease-in-out">
                      <span>{{ classe.nom }}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
            </div>
          </RadioGroupOption>

          <RadioGroupOption
            as="template"
            v-for="classe in props.options"
            :key="classe.id"
            :value="classe.id"
            v-slot="{ checked }"
          >
            <div
              :class="[
                checked ? 'bg-[#E4F3FF] border border-[#1E94FD]' : 'border-[3px] border-[#E8E8E8]',
              ]"
              class="relative flex cursor-pointer rounded-full w-36 md:w-48 pt-1 md:pt-1.5 focus:outline-none transition duration-200 ease-in-out"
            >
                <div class="w-full flex items-center justify-center">
                  <div class="text-center space-y-0">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-dark-blue font-semibold' : 'text-[#6192BF] font-medium'"
                      class="text-sm md:text-base transition duration-200 ease-in-out"
                    >
                      {{ getFirstLettersUppercase(classe.name) }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-dark-blue font-semibold inline-block align-text-top ' : 'text-[#6192BF] font-medium inline-block align-text-top'"
                      class="text-[8px] md:text-xs transition duration-200 ease-in-out"
                    >
                      <span>{{ classe.name }}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
</template>
<script setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const props = defineProps({
  options: Array,
  modalClass: [String, Number]
})



const classes = [
  {
    id: 1,
    nom: '1ère Année primaire',
  },
  {
    id: 2,
    nom: '2ème année primaire',
  },
  {
    id: 3,
    nom: '3ème année primaire',
  },
  {
    id: 4,
    nom: '4ème Année primaire',
  },
  {
    id: 5,
    nom: '5ème Année primaire',
  },
  {
    id: 6,
    nom: '6ème année primaire',
  },
  {
    id: 7,
    nom: '1ère année primaire',
  },
  {
    id: 8,
    nom: '2ème année primaire',
  },
]

function getFirstLettersUppercase(input) {
  const words = input.split(/\s+/);
  
  const firstLetters = words.map(word => word.charAt(0).toUpperCase());
  
  return firstLetters.join('');
}
</script>

