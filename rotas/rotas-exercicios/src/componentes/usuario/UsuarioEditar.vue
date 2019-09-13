<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código: {{id}}</strong></p>
    <p><strong>Completo: {{$route.query.completo ? "Sim" : "Não"}}</strong></p>
    <p><strong>Língua: {{$route.query.lingua}}</strong></p>
    <hr>
    <button primario @click="confirmado=true">Continuar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return{
      confirmado: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.confirmado){
      next();
    }else{
      if(confirm('Tem certeza que deseja retornar?')){
        next();
      }else{
        next(false);
      }
    }
  }
};
</script>

<style>

#rodape{
  margin-top: 1000px
}

</style>
