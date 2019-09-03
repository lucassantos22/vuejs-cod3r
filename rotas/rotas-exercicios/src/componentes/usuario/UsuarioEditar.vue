<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código: {{id}}</strong></p>
    <p><strong>Completo: {{$route.query.completo ? "Sim" : "Não"}}</strong></p>
    <p><strong>Língua: {{$route.query.lingua}}</strong></p>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>

#rodape{
  margin-top: 1000px
}

</style>
