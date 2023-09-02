import { createRouter, createWebHistory } from "vue-router";
import HomePage from './src/page/HomePage.vue'

const toDoList = () => import('./src/page/toDoListapage')
const toDoForm = () => import('./src/components/toDoForm')
const deletedTasks = () => import('./src/components/deletedTaskList')


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
            component: toDoList,
            children: [
                {
                    path: 'add',
                    name: 'Form',
                    component: toDoForm
                },
                {
                    path: '/list/:id/edit',
                    name: 'redactMode',
                    component: toDoForm,
                    props: true
                }
            ]
        },
        {
            name: 'deletedList',
            path: '/dellist',
            component: deletedTasks,
        }
    ]
})


export default router