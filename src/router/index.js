import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/Jobs.vue'
import JobDetailsView from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/jobs/:id',
        name: 'job_details',
        component: JobDetailsView,
        props: true // give parameters as props; no longer needed to access with $route.params.<param>
    },
    // redirect
    {
        path: '/old_jobs',
        redirect: '/jobs'
    },
    // catch all invalid pages
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
