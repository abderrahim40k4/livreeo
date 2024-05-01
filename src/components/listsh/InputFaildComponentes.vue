<template>
<div class="flex flex-col space-y-4">
    <label for="countries" class="text-base font-medium dark:text-white">{{ labale }}</label>
    <!-- <select id="countries" class="rounded-full ring-2 ring-dark-blue focus:ring-4 focus:ring-dark-blue focus:outline-none text-[#6192BF] text-sm font-medium w-44 py-3 pl-4">
        <option selected>{{ text }}</option>
    </select> -->
    <select class="custom-select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
</div>

</template>
<script setup>
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
.custom-select::before {
  content: url(../../assets/icone-select.svg);
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  pointer-events: none;
}
</style>
