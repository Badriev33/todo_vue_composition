
<script setup>

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
        <div class="task my-2 grid grid-cols-5 flex justify-center rounded-md border-solid border-2 border-indigo-300">
            <span>1</span>
            <span>Traning</span>
            <span>toDo</span>
            <span>Edit</span>
            <span>Remove</span>
        </div>
    </div>
</template>
<style>
    .task:hover {
        border-color: #9B59B6;
    }
</style>