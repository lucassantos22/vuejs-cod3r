<template>
  <div id="app">
    <h1>Projeto Simples</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComponentTest :msg="titulo"/>
    <button @click="alerta">Alerta</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentTest from './components/ComponentTest.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ComponentTest
  },
  data:function(){
    return{
      titulo: "Titulo de teste"
    }
  },
  methods:{
    alerta(){
      alert("Alerta!");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
