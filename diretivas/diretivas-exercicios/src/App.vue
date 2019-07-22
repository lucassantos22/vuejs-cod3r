<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Show de bola'"></p>
    <p v-html="'Show de <strong>bola</strong>'"></p>
    <hr>
    <p v-destaque:fundo.atraso="'red'">Teste de diretiva simples</p>
    <p v-destaque.atraso="'red'">Teste de diretiva simples</p>
    <hr>
    <p v-destaque-local:fundo.atraso.alternar="'red'">Teste de diretiva simples</p>
    <p v-destaque-local.atraso="'red'">Teste de diretiva simples</p>

    <!-- <p v-nome:arg.mod1.mod2="'blue'"></p> -->
  </div>
</template>

<script>
// import Directive from "./directive.js"
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        const aplicarCor = cor => {
          if (binding.arg === "fundo") {
            el.style.color = cor || "lightgreen";
          } else {
            el.style.backgroundColor = cor || "lightgreen";
          }
        };

        let atraso = 0;
        atraso = binding.modifiers["atraso"] ? 3000 : 0;

        const cor1 = binding.value;
        const cor2 = "purple";
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, 1000);
          }else{
            aplicarCor(binding.value);
          }
        }, atraso);
      }
    }
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
