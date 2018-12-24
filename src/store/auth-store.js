import VueJwtDecode from 'vue-jwt-decode'

export default {
  namespaced: true,
  state: {
    token: localStorage.token || "",
    username: "",
    role: ""
  },
  actions: {
  },
  mutations: {
    update_session(state, payload){
      console.log(VueJwtDecode.decode(payload))
      state.username = VueJwtDecode.decode(payload).identity;
      state.role = VueJwtDecode.decode(payload).user_claims.role;
    }
  },
  getters: {
    session(state){
      return { role: state.role, username: state.username };
    }
  }
}