<script setup>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import { ref } from 'vue'
import uniqueId from 'lodash/uniqueId'

const router = useRouter()

const {commit} = useStore()

const closeModal = ()=> {
    router.push({name: 'List'})
}

const title = ref('')
const description = ref('')
const sortTask = ref(0)
const statusTask = ref('toDo')

const saveTask = ()=> {

    const newTask = {
        id: uniqueId(),
        sort: sortTask,
        title: title,
        status: statusTask,
        description: description,
        isDeleted: false,
    }
    
    commit('newTask', newTask)
    router.push({name: 'List'})
}



</script>
<template>
  <div
    class="absolute top-20 left-1/3 right-1/3 z-50 w-1/3 bg-white border border-black rounded-lg"
  >
    <div class="p-5">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Заголовок:</label
      >
      <textarea
      v-model="title"
        id="message"
        rows="4"
        class="block h-10 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Напишите здесь что-нибудь..."
      ></textarea>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Сортировка:</label
      >
      <textarea
        v-model="sortTask"
        id="message"
        rows="4"
        class="block h-10 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Напишите здесь что-нибудь..."
      ></textarea>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Описание</label
      >
      <textarea
        v-model="description"
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Напишите здесь что-нибудь..."
      ></textarea>
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Cтатус задачи:</label
      >
      <select
        v-model="statusTask"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Todo</option>
        <option value="Work">Work</option>
        <option value="Done">Done</option>
        <option value="Deleted">Deleted</option>
      </select>
      <div class="flex justify-end py-3">
         <button
         @click="saveTask()"
        class="mr-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      >
        Сохранить
      </button>
       <button
       @click="closeModal()"
        class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Закрыть
      </button>
      </div>
    </div>
  </div>
</template>
<style>
.modal {
  transform: translate(-50%, -50%);
}
</style>