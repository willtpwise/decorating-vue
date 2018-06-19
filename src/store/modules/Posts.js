import axios from 'axios'

export default {
  namespaced: true,

  state: {
    posts: []
  },

  mutations: {
    setPosts (state, payload) {
      state.posts = payload
    }
  },

  actions: {
    async fetchPosts ({ commit }) {
      const endpoint = 'https://jsonplaceholder.typicode.com/posts/'
      const { data } = await axios.get(endpoint)

      commit('setPosts', data)
    }
  }
}
