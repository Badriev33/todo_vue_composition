<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'


const { getters } = useStore();

const getDelettedTask = computed(() => {
  return getters.getTasks.filter((v) => v.isDeleted == true);
})

</script>
<template>
  <div class="flex justify-center">
    {{getDelettedTask}}
    <div
      class="w-1/3 flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700"
    >
      <div 
        class="w-3/4 items-center h-10 task my-3 grid grid-cols-3 flex justify-center content-center"
      >
        <span class="text-center">title</span>
        <span class="text-center">status</span>
        <span class="text-center">button</span>
      </div>
    </div>
  </div>
</template>