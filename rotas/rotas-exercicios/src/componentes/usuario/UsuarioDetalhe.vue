<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>
      <strong>Código: {{id}}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"]
  // data(){
  //     return{
  //         codigo: this.$route.params.id
  //     }
  // },
};
</script>

<style>
</style>
