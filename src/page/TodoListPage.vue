<script setup>
import TodoComponent from "../components/TodoComponent";    
</script>
<template>
    <div class="flex justify-center flex-col py-10 mx-auto">
        <TodoComponent class="mx-auto"/>
         <router-view></router-view>
    </div>
</template>