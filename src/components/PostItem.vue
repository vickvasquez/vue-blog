<template>
    <div>
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <router-link :to="{ path: `posts/${post.id}`}">
            <a>Leer mas</a>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['post', 'type']
}
</script>
