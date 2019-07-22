<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{cpf | filtroCpf}}</p>
    <input type="text" :value="cpf | filtroCpf">
    <hr>
    <input type="text" placeholder="Insira uma fruta" v-model="fruta" @keydown.enter="add">
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <Frutas/>
  </div>
</template>

<script>

import frutasMixins from "./mixins/frutasMixins"
import Frutas from "./components/Frutas.vue";

export default {
  components: {
    Frutas
  },
  mixins:[frutasMixins],
  filters: {
    filtroCpf(valor) {
      let arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },
  data() {
    return {
      cpf: "11817799002",
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
