<template>
    <div class="w-full flex items-center gap-5">

        <input 
        class="w-5 h-5 text-teal-800 bg-gray-100 rounded-xl border-gray-300 focus:ring-teal-600 accent-teal-600  focus:ring-2 cursor-pointer"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        />
        
        <span class="text-left font-medium">{{text}}</span>
    </div>
</template>
<script setup>
    const props = defineProps(['text','modelValue'])
</script>