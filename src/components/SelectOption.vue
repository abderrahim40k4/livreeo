<template>
    <Listbox @update:modelValue="value => emit('update:modelValue', value)" :model-value="props.modelValue">
        <div class="relative w-[85%] md:w-3/4">
            <!--<ListboxButton v-if="props.namechamp === 'ville'" class="w-full cursor-pointer rounded-full text-sm md:text-base font-medium bg-[#E4F3FF] focus:outline-none py-3 md:py-5 pl-4 md:pl-6 text-left border border-[#1E94FD] focus-visible:border-[#1E94FD] focus-visible:ring-2">
                <span v-if="label" class="block truncate">{{ label }}</span>
                <span v-else>{{ props.placeholder }}</span>
            </ListboxButton>
            <ListboxButton v-if="props.namechamp === 'ecole'" >
                <span v-if="label_two" class="block truncate">{{ label_two }}</span>
                <span v-else>{{ props.placeholder }}</span>
            </ListboxButton>-->
            <ListboxButton :class="`${mystore.SelectedCity === null && props.namechamp === 'ecole' ? 'bg-[#F0F9FF] focus:outline-none border border-[#F0F9FF] focus-visible:border-[#F0F9FF] text-[#6192BF] cursor-default pointer-events-none':'bg-[#E4F3FF] focus:outline-none border border-[#1E94FD] focus-visible:border-[#1E94FD] cursor-pointer'} w-full rounded-full text-sm md:text-base font-medium py-3 md:py-5 pl-4 md:pl-6 text-left focus-visible:ring-2`">
                <span v-if="selectedOne" class="block truncate">{{ selectedOne.name }}</span>
                <span v-else>{{ props.placeholder }}</span>
            </ListboxButton>

            <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            >
            <ListboxOptions
                class="z-10 absolute mt-1 max-h-60 w-full overflow-y-auto no-scrollbar rounded-xl bg-[#E4F3FF] py-1 shadow-lg text-xs md:text-sm font-medium focus:outline-none">
                <ListboxOption 
                v-slot="{ active, selected }"
                v-for="option in props.options"
                :key="option.id"
                :value="option.id"
                as="template"
                >
                <li
                    :class="[
                    active && !option.unavailable ? 'bg-dark-blue text-white-color' : 'text-dark-blue',
                    'relative select-none py-2 pl-8 pr-4 cursor-pointer transition duration-200 ease-in-out',
                    ]"
                >
                    <span
                    :class="[
                        selected ? 'font-bold' : 'font-normal',
                        'block truncate',
                    ]"
                    >{{ option.name }}</span>
                    <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                    </span>
                </li>
                </ListboxOption>
            </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
import { useFirstStepStore } from '../stors/FirstStepStore';
import { ref,computed } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const mystore = useFirstStepStore();

const props = defineProps({
    options: {
        type: Array,
        required: true,
        default: () => []
    },
    namechamp: String,
    modelValue: [String, Number],
    placeholder: {
        type: String,
        default: "Select Option"
    },
});

const emit = defineEmits(['update:modelValue']);

const selectedOne = computed(() => {
    return Array.isArray(props.options) ? props.options.find(option => option.id === props.modelValue) : null;
});
// const label = computed(() => {
//     return props.options.find(option => option.id === props.modelValue)?.name; 
// })

// const label_two = computed(() => {
//     return props.options.find(option => option.id === props.modelValue)?.ecole; 
// })

//:key="props.namechamp === 'ville' ? option.name : option.ecole"
//>{{ props.namechamp === 'ville' ? option.name : option.ecole }}</span>
</script>