<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código: {{id}}</strong></p>
    <router-link tag="button" primary :to="`/usuario/${id}/editar`">Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    paginaDestino(){
      return `/usuario/${id}/editar`
    }
  },
  // data(){
  //     return{
  //         codigo: this.$route.params.id
  //     }
  // },
};
</script>

<style>
</style>
