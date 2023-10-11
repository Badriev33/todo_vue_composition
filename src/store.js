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
        title: 'Удалённая',
        status: 'Progress',
        description: 'Отжумания 10 раз, Пресс 15 раз, Подтягивания 8 раз',
        isDeleted: true
    },
    {
        id: 59,
        sort: 7,
        title: 'Удалённая',
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
    }, editTasc) {
        tasks.map((v) => {
            if (v.id == editTasc.id) {
                v.title = editTasc.title
                v.sort = editTasc.sort
                v.status = editTasc.status
                v.description = editTasc.description
            }
        })
    },
    deletTask({tasks}, id) {
        tasks.map((v) => {
            if (v.id == id) {
                v.isDeleted = true
            }

        })
    },
    restoreTask({tasks}, id) {
        tasks.map((v) => {
            if (v.id == id) {
                v.isDeleted = false
            }

        })
    }
}

export default createStore({
    state,
    getters,
    mutations
})