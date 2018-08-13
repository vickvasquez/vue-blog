<template>
    <div>
        <h1> Posts nuevos </h1>
        <div v-show="!posts.length">
            <p>Cargando datos...</p>
        </div>
        <div v-for="post in posts" :key="post.id" v-if="posts.length">
            <post-item v-bind:post="post"></post-item>
        </div>
    </div>
    
</template>

<script>
import api from 'api'
import PostItem from 'components/PostItem.vue'

export default {
    data: function() {
        return {
            posts: [],
        }
    },
    components: {
        PostItem
    },
    created: async function() {
        const posts = await api.posts()
        this.posts = posts
    },
}
</script>

