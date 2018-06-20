export default {
    state: {
        listPostbacks: {data: []}
    },
    mutations: {
        updatePostbackList(state, data) {
            state.listPostbacks = data
        }
    },
    actions: {
        getPostbacks(context) {
            return window.axios.get('api/v1/postbacks').then(response => {
                context.commit('updatePostbackList', response.data)
            })
        },
        newPostback(context, data) {
            return window.axios.post('api/v1/postbacks', data)
        }
    }
}