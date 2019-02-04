export default {
    state: {
        user: {data: {}}
    },
    mutations: {
        updateUser(state, data) {
            state.user = data
        }
    },
    actions: {
        getCurrentUser(context) {
            return window.axios.get('/users/me').then((response) => {
                context.commit('updateUser', response.data)
                return response
            })
        }
    }
}