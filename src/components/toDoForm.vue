<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, defineProps, onMounted } from "vue";
import uniqueId from "lodash/uniqueId";

const router = useRouter();
const { getters } = useStore();
const { commit } = useStore();

let showError = ref(false);
const id = ref("");
const title = ref("");
const description = ref("");
const sortTask = ref(0);
const statusTask = ref("toDo");
const errorMessage = "Заполните обязательные поля: title, sort";

const props = defineProps({
  id: [String, Number],
});

const computedError = computed(() => {
  return !title.value || !sortTask.value || sortTask.value == 0 ? true : false;
});

const getTaskById = ref([]);

onMounted(() => {
  if (props.id) {
    getTaskById.value = getters.getTasks.filter((v) => v.id == props.id);
  }

  if (getTaskById.value && props.id) {
    (id.value = props.id),
      (title.value = getTaskById.value[0]?.title),
      (sortTask.value = getTaskById.value[0].sort),
      (description.value = getTaskById.value[0].description),
      (statusTask.value = getTaskById.value[0].status);
  }
});

const closeModal = () => {
  router.push({ name: "List" });
};

const checkForm = () => {
  if (title.value && sortTask.value) {
    return true;
  }
  if (!title.value) {
    return false;
  }
  if (!sortTask.value || sortTask.value == 0) {
    return false;
  }
};

const saveTask = () => {
  if (getTaskById.value && props.id) {
    commit("editTasc", {
      id: id.value,
      sort: sortTask.value,
      title: title.value,
      status: statusTask.value,
      description: description.value,
      isDeleted: false,
    });
    router.push({ name: "List" });
  } else {
    showError.value = true;
    if (!checkForm()) {
      return;
    }
    const newTask = {
      id: uniqueId(),
      sort: sortTask,
      title: title,
      status: statusTask,
      description: description,
      isDeleted: false,
    };

    commit("newTask", newTask);
    router.push({ name: "List" });
  }
};
</script>
<template>
  <div
    class="absolute top-20 left-1/3 right-1/3 z-50 w-1/3 bg-white border border-black rounded-lg"
  >
    {{ props.id }}
    <div class="p-5">
      <div></div>
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
        <option selected value="toDo">Todo</option>
        <option value="Progress">Work</option>
        <option value="Done">Done</option>
        <option value="Deleted">Deleted</option>
      </select>

      <div
        v-if="computedError && showError"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"
        role="alert"
      >
        <span class="block sm:inline">{{ errorMessage }}</span>
      </div>

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