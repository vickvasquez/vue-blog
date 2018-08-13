import Vue from 'vue'
import Router from 'vue-router'

/*
* import components
*/

import Home from 'pages/Home.vue'
import Post from 'pages/Post.vue'

Vue.use(Router)

const routers = new Router({
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/posts/:id',
            component: Post
        }
    ]
})

export default routers