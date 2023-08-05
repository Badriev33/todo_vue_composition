import { createStore } from "vuex";

    const state = {
            count: 3,
            tasks: [
                {
                    id: 23,
                    sort: 3,
                    title: 'Заполни',
                    status: 'toDo',
                    description: 'Заполнять весь день ту-ду лист'
                },
                {
                    id: 55,
                    sort: 2,
                    title: 'Зарядка',
                    status: 'Progress',
                    description: 'Отжумания 10 раз, Пресс 15 раз, Подтягивания 8 раз',
                }
            ]
    }

    const getters = {
        getCount: ({count}) => {return count},
        getTasks: ({tasks}) => {return tasks}
    }

    const mutations = {
        newTask({tasks}, todo) {
          return tasks.push(todo)
        },

        deletTask({tasks}, id) {
            tasks= tasks.filter((v) => {return v.id !== id})
           //console.log(tasks);
           //state.tasks
           //return tasks
           // tasks.pop()
           return tasks
        }
    }



export default createStore ({
    state,
    getters,
    mutations
})