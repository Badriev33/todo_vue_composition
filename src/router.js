import { createRouter, createWebHistory } from "vue-router";
import HomePage from './page/HomePage.vue'

const toDoList = () => import('./page/TodoListPage')
const TodoForm = () => import('./components/TodoForm')
const deletedTasks = () => import('./components/DeletedTaskList')


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
                    component: TodoForm
                },
                {
                    path: '/list/:id/edit',
                    name: 'redactMode',
                    component: TodoForm,
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