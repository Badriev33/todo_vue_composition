<script setup>
import {useRouter} from "vue-router";
import {computed} from 'vue'
import {useStore} from 'vuex'
import uiButton from '../ui/uiButton'

const router = useRouter();
const { getters, commit } = useStore();

const getDelettedTask = computed(() => {
  return getters.getTasks.filter((v) => v.isDeleted === true);
})

const restoreTask = (id) => {
  commit('restoreTask', id)
}

const goToHomePage = () => {
  router.push({name: 'List'})
}

</script>
<template>
  <div class="flex justify-center mt-3">
    <div
      class="w-1/3 flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700"
    >
      <table v-if="getDelettedTask.length" width="400px">
          <tbody>
          <tr>
            <td><h4>ID</h4></td>
            <td><h4>Title</h4></td>
            <td><h4>Status</h4></td>
            <td @click="goToHomePage()" class="flex items-center"><h4 class="py-2">к списку дел</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>

            </td>
          </tr>
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
      <div v-if="!getDelettedTask.length" class="">
        <div>
          <p>Нет удалённых задач</p>
        </div>
        <button @click="goToHomePage()" class="ml-5 mt-1 text-green-700 font-semibold border border-green-500 rounded py-2 px-1">к списку дел</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
}
td {
  border: solid 1px #000;
  border-style: none solid solid none;
  padding: 10px;
}

tr:first-child td:first-child { border-top-left-radius: 10px; }
tr:first-child td:last-child { border-top-right-radius: 10px; }

tr:last-child td:first-child { border-bottom-left-radius: 10px; }
tr:last-child td:last-child { border-bottom-right-radius: 10px; }

tr:first-child td { border-top-style: solid; }
tr td:first-child { border-left-style: solid; }

</style>