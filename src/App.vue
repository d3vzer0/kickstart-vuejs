<template>
  <div id="app">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import MainTemplate from './templates/Main'
import LoginTemplate from './templates/Login'
export default {
  name: "CoreApp",
  computed: {
    layout () {
      return this.$store.getters['template/current_template']
    }
  },
  components: {
    "main-template": MainTemplate,
    "login-template": LoginTemplate
  }
}
</script>