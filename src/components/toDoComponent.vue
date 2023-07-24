<script setup>
//import { useRouter } from 'vue-router';
import { computed } from 'vue'
import { useStore } from 'vuex'

//const router = useRouter()
const {getters} = useStore()

const computedTascs = computed(() => {return getters.getTasks})

const openModalTask = (id) => {
    console.log(id);
}
</script>

<template>
    <div class="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 class="flex justify-center">component</h1>
        <div class="grid grid-cols-5 flex justify-center">
            <span>Sort</span>
            <span>Task</span>
            <span>Status</span>
            <span>Edit</span>
            <span>Remove</span>
        </div>
        <div class="mt-5">
        <div @click="openModalTask(task.id)" v-for="task of computedTascs" :key="task.id" class="items-center h-10 task my-3 grid grid-cols-5 flex justify-center rounded-md border-solid border-2 border-indigo-300">
            <span class="pl-2">{{task.sort}}</span>
            <span>{{task.title}}</span>
            <span>{{task.status}}</span>
            <span>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2M6 1v4a1 1 0 0 1-1 1H1m13.14.772 2.745 2.746M18.1 5.612a2.086 2.086 0 0 1 0 2.953l-6.65 6.646-3.693.739.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/>
                </svg>
            </span>
            <span>
               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
               </svg>
            </span>
        </div>
        </div>
    </div>
</template>
<style>
    .task:hover {
        border-color: #9B59B6;
    }
</style>