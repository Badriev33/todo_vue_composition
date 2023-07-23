<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue'


import { useStore } from 'vuex'

const router = useRouter()

const {getters} = useStore()

const computedCount = computed(() => {
    return getters.getCount
})

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <h1>Тестовый проект "To do List"</h1>
        <button class="h-10 rounded-lg bg-black text-white" @click="router.push('List')" type="button">
            Перейти к списку дел
        </button>

        {{computedCount}}
        
    </div>
</template>