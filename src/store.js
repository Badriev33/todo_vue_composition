import { createStore } from "vuex";


    const state = {
            count: 3,
            tasks: [
                {
                    id: 1,
                    sort: 3,
                    title: 'Заполни',
                    status: 'toDo',
                    description: 'Заполнять весь день ту-ду лист'
                },
                {
                    id: 2,
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

export default createStore ({
    state,
    getters
})