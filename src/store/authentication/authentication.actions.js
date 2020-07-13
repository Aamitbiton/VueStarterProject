import router from '../../router'

export default {
    // Callback fired when user login
    login: async ({ commit, dispatch }, firebaseAuthUser) => {
        commit('setUser', firebaseAuthUser);
        localStorage.setItem('user', JSON.stringify(firebaseAuthUser))
    },

    // Callback fired when user logout
    logout: ({ commit }) => {
        commit('setUser', null);
        localStorage.setItem('user', null)
        if (!router.currentRoute.meta.authNotRequired) {
            router.push('/login').catch(err => err)
        }
    }
}