import { createStore } from "vuex";


    const state = {
            count: 3
    }

    const getters = {
        getCount: ({count}) => {return count}
    }

export default createStore ({
    state,
    getters
})