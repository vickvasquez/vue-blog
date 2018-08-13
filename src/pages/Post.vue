<template>
    <div>
        <post-item :post="post"></post-item>
    </div>
</template>
<script>
import api from 'api'
import PostItem from 'components/PostItem.vue'
export default {
    components: {
        PostItem
    },
    data: function () {
        return {
            post: {}
        }
    },
    created: async function() {
        const idPost = parseInt(this.$route.params.id)
        this.post = await api.postById(idPost)
        
    }
}
</script>
