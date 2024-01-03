<script setup>
import { useRouter } from "vue-router"
import { computed, ref } from "vue"
import { useStore } from "vuex"

const router = useRouter()
const { getters } = useStore()
const { commit } = useStore()

const sort = ref(false)

const computedTasks = computed(() => {
  return getters.getTasks.filter((v) => v.isDeleted === false)
})

const truncateTask = (taskName) => {
  return taskName.length > 7 ? taskName.slice(0, 7 - 1) + '…' : taskName
}

const openModalTask = (id) => {
  router.push({ name: "redactMode", params: { id } })
}

const openDeletedList = () => {
  router.push({ name: "deletedList"})
}

const createTask = () => {
  router.push({ name: "Form" })
}

const deleteTask = (id) => {
  commit("deletedTask", id)
}

const sortTask = () => {
  sort.value = !sort.value
  sort.value
    ? commit("sortTaskList", "asc")
    : commit("sortTaskList", "desc")
}

</script>
<template>
  <div
    class="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700"
  >
    <div class="grid grid-cols-5 flex justify-center">
      <div
          class="flex"
          @click="sortTask()"
        >
        <span>Sort</span>
        <span>
          <svg v-if="sort" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
      </span>
      </div>
      <span>Task</span>
      <span>Status</span>
      <span>Edit</span>
      <span>Remove</span>
    </div>
    <div class="mt-5">
      <div v-if="!computedTasks.length">Нет активных задач</div>
      <div
        v-for="task of computedTasks"
        :key="task.id"
        class="castom items-center h-10 task my-3 grid grid-cols-5 flex justify-center rounded-md border-solid border-2 border-indigo-300"
      >
        <span @click="openModalTask(task.id)" class="pl-2">{{
          task.sort
        }}</span>
        <span @click="openModalTask(task.id)">{{ truncateTask(task.title) }}</span>
        <span @click="openModalTask(task.id)">{{ task.status }}</span>
        <span class="ml-2" @click="openModalTask(task.id)">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17v1a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2M6 1v4a1 1 0 0 1-1 1H1m13.14.772 2.745 2.746M18.1 5.612a2.086 2.086 0 0 1 0 2.953l-6.65 6.646-3.693.739.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"
            />
          </svg>
        </span>
        <span class="ml-3" @click="deleteTask(task.id)">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex justify-end">
       <button
        @click="openDeletedList"
        class="bg-transparent mr-2 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Удалённые задачи
      </button>
      <button
        @click="createTask"
        class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      >
        Создать задачу
      </button>
    </div>
  </div>
</template>
<style>
.task:hover {
  border-color: #9b59b6;
}
.castom {
  transition: all 0.3s ease;
}
</style>