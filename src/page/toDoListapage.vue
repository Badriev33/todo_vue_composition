<script setup>
    // import toDoForm from "@/components/toDoForm.vue";
    import toDoFormComponent from "../components/toDoComponent.vue";
    
</script>
<template>


    <div class="flex justify-center flex-col py-10 mx-auto">
        <toDoFormComponent class="mx-auto"/>
         <router-view></router-view>
    </div>

</template>