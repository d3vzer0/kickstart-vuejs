<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col cols="3" class="center-block">
        <b-card header="Authentication" header-tag="header" id="card-login">
          <div id="card-login-header">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </div>
          <b-form method="post" @submit.prevent="login">
            <b-row>
              <b-col cols="12" class="top-10">
                <b-form-input type="text" v-model="username" required placeholder="Username"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="top-10">
                <b-form-input type="password" v-model="password" required placeholder="Password"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="top-10">
                <b-button type="submit" variant="primary">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode"

export default{
  name: 'Login',
  data() {
    return {
      username: "",
      password: "",
      error: false
    }
  },
  methods: {
    login (){
      this.$http
        .post('login', {username: this.username, password: this.password})
        .then(response => this.login_success(response))
        .catch(response => this.login_failed(response))
    },
    login_success (response){
      if (!response.data.access_token) {
        this.login_failed()
        return
      }
      localStorage.token = response.data.access_token
      this.$store.commit('auth/update_session', response.data.access_token)
      // this.$store.commit('template/change_template', "main-template")
      console.log( this.$store.getters['auth/session'])
      // this.$router.replace(this.$route.query.redirect || '/home')
    },

    login_failed (response){
      console.log( this.$store.getters['auth/session'])
      this.error = "Unable to login"
      delete localStorage.token
    }
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans')
@import "@/assets/style.sass"

body
  background-color: #eeeeee

#card-login
  margin-top: 50px
  #sidebar-header-image
    width: 80%
  
#app
  font-family: 'Open Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale


</style>
