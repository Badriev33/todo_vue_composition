<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['title'])
</script>
<template>
    <button 
        class="
            bg-transparent
            mr-2
            hover:bg-green-500
            text-green-700
            font-semibold
            hover:text-white
            py-2
            px-1
            border
            border-green-500
            hover:border-transparent
            rounded"
            @click="$emit('clickBtn')">
        {{ props.title }}
    </button>
</template>