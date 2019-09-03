<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código: {{id}}</strong></p>
    <router-link tag="button" primary :to="{name: 'editarUsuario', params:{id}, query:{completo: true, lingua:'pt'}, hash:'#rodape'}">Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data(){
  //     return{
  //         codigo: this.$route.params.id
  //     }
  // },
};
</script>

<style>
</style>
