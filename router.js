import { createRouter, createWebHistory } from "vue-router";
import HomePage from './src/page/HomePage.vue'

const toDoList = () => import('./src/page/toDoListapage')
//const toDoFormComponent = () => import('./src/components/toDoFormComponent')


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            name: 'Home',
            path: '/',
            component: HomePage
        },
        {
            name: 'List',
            path: '/list',
            component: toDoList
        }
        // {
        //     path:'/list',
        //     component: toDoList,
        //     children: [
        //         {
        //             path: 'add',
        //             name : 'toDoForm',
        //             component: toDoFormComponent
        //         },
        //         {
        //             path: '/list/:id/edit',
        //             name: 'redactTodoList',
        //             component: toDoFormComponent 
        //         }
        //     ]

        // },
        // {
        //     path:'/list/deleted',
        //     name: 'deletedToDoList',
        //     component: toDoList
        // }
    ]
})


export default router