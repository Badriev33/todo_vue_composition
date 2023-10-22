import {
    createStore
} from "vuex";

const state = {
    tasks: [{
        id: 23,
        sort: 3,
        title: 'Заполни',
        status: 'toDo',
        description: 'Заполнять весь день ту-ду лист',
        isDeleted: false
    },
    {
        id: 55,
        sort: 2,
        title: 'Зарядка',
        status: 'Progress',
        description: 'Отжумания 10 раз, Пресс 15 раз, Подтягивания 8 раз',
        isDeleted: false
    },
    {
        id: 58,
        sort: 5,
        title: 'Удалённая1',
        status: 'Progress',
        description: 'Отжумания 5 раз, Пресс 15 раз, Подтягивания 7 раз',
        isDeleted: true
    },
    {
        id: 59,
        sort: 7,
        title: 'Удалённая2',
        status: 'Progress',
        description: 'Отжумания 10 раз, Пресс 15 раз, Подтягивания 8 раз',
        isDeleted: true
    }
    ]
}

const getters = {
    getTasks: ({
        tasks
    }) => {
        return tasks
    }
}

const mutations = {
    newTask({
                tasks
            }, todo) {
        return tasks.push(todo)
    },
    editTasc({
                 tasks
             }, task) {
        tasks.map((v) => {
            if (v.id == task.id) {
                v.title = task.title
                v.sort = task.sort
                v.status = task.status
                v.description = task.description
            }
        })
    },
deletedTask({tasks}, id) {
        tasks.map((v) => {
            if (v.id === id) {
                v.isDeleted = true
            }
        })
    },
    restoreTask({tasks}, id) {
        tasks.map((v) => {
            if (v.id === id) {
                v.isDeleted = false
            }
        })
    },
    sortTaskList({tasks}, sort) {
      sort === 'asc'
        ? tasks = tasks.sort((a, b) => a.sort > b.sort ? 1 : -1)
        : tasks = tasks.sort((a, b) => a.sort < b.sort ? 1 : -1)
    }
}

export default createStore({
    state,
    getters,
    mutations
})