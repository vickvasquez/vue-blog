import { get } from 'axios'

const API_BASE = 'https://jsonplaceholder.typicode.com'

const api = {
    posts: async() => {
        const response = await get(`${API_BASE}/posts`)

        const { data } = response 
        
        return data
    },
    postById: async(id) => {
        const reqPost =  get(`${API_BASE}/posts/${id}`)

        const reqComments = get(`${API_BASE}/posts/${id}/comments`)

        const [ post, comments ] = await Promise.all([reqPost, reqComments])

        return [post , comments ]
    },
}

export default api