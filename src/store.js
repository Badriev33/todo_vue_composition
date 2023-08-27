import { createStore } from "vuex";

    const state = {
            count: 3,
            tasks: [
                {
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
        editTasc({tasks}, editTasc) {
            console.log(tasks);
            console.log(editTasc);
        },

        deletTask({tasks}, id) {
            //tasks = tasks.filter((v) => {return v.id !== id})
            //tasks = tasks.filter(v => (v.id == id))
            let deleteTask = tasks.findIndex(v => (v.id == id))
            console.log('deleteTask', deleteTask);
            tasks = tasks.splice(deleteTask, 1)
           // tasks.splise(deleteTask, 1)
          // return tasks
        }
    }



export default createStore ({
    state,
    getters,
    mutations
})