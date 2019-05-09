<template>
  <div id="app">
    <h1>Contadores</h1>
    <contador numeroInicial="10"/>
  </div>
</template>

<script>

import Contador from "./Contador.vue";

export default {
  components:{
    contador: Contador
  }
}
</script>

<style>

</style>
