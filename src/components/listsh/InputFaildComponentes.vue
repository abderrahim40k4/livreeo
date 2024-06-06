<template>
<div class="relative flex flex-col space-y-4">
    <label for="countries" class="text-base font-medium dark:text-white">{{ labale }}</label>
    <Listbox v-model="selectedValue">
        <ListboxButton class="relative rounded-full ring-2 ring-dark-blue focus:outline-none text-[#6192BF] text-sm font-medium w-44 py-3 flex pl-4">
            <span v-if="selectedPerson" class="block truncate">{{ selectedPerson.name }}</span>
            <span v-else class="block truncate"> {{ placeholder }} </span>
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
                    v-for="person in transformedOptions"
                    v-slot="{ active, selected }"
                    :key="getOptionKey(person)"
                    :value="person.id"
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
import { ref, computed, watch } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

//const people = props.options;


const props = defineProps({
    labale:{
        type: String,
        defualt:'',
    },
    options:{
        type: Array,
        required: true,
        default: () => []
    },
    modelValue: {
        type: [String, Number, Array],
        default: null
    },
    placeholder:{
        type: String,
        default: '',
    }
})

const emit = defineEmits(['update:modelValue']);

// Transform the options to a flat structure with combined group and language names
const transformedOptions = computed(() => {
    if(props.labale === "Classe :"){
        return props.options.flatMap(group => 
        group.languages.map(language => ({
            id: [group.id, language.id],
            name: `${group.name} (${language.name})`
            }))
        );
    }
    return props.options;  
});

const selectedValue = ref(props.modelValue);

watch(selectedValue, (newValue) => {
    emit('update:modelValue', newValue);
});

const selectedPerson = computed(() => {
    if (props.labale === "Classe :") {
        return transformedOptions.value.find(option => JSON.stringify(option.id) === JSON.stringify(selectedValue.value));
    }
    return props.options.find(option => option.id === selectedValue.value);
});

function getOptionKey(person) {
    return props.labale === 'Classe :' ? `${person.id[0]}-${person.id[1]}` : person.id;
}
</script>
<style scoped>

</style>
