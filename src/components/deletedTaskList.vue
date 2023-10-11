<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import uiButton from '../ui/uiButton'


const { getters, commit } = useStore();

const getDelettedTask = computed(() => {
  return getters.getTasks.filter((v) => v.isDeleted == true);
})

const restoreTask = (id) => {
  console.log(id);
  commit('restoreTask', id)
}



</script>
<template>
  <div class="flex justify-center mt-3">
    <div
      class="w-1/3 flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700"
    >
      <!-- <div 
        class="w-3/4 items-center h-10 task my-3 grid grid-cols-3 flex justify-center content-center"
      >
        <span class="text-center">title</span>
        <span class="text-center">status</span>
        <span class="text-center">button</span>
      </div>
      <div v-for="task in getDelettedTask" :key="task.id">

      </div> -->
      <table width="400px">
          <thead>
            <tr>
              <td><h4>ID</h4></td>
              <td><h4>Title</h4></td>
              <td><h4>Status</h4></td>
              <td><h4>*</h4></td>
            </tr>
          </thead> 
          <tbody>
          <tr v-for="task in getDelettedTask" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.title }}</td>
            <td>{{task.status}}</td>
            <td class="flex justify-center">
              <uiButton @clickBtn="restoreTask(task.id)" title="Восстановить"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
  td {
    border: solid 1px black;
  }



</style>