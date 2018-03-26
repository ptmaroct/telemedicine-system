<template>
  <div>
    Hello World
    <router-link to="/data">Goto Data?</router-link>
    <button @click="pop">Show Message</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    pop(){
      window.alert("Popped")
    }
  }
}
</script>

<style>
</style>
