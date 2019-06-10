<template>
  <div>
    <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{width: tarefasFeitas + '%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><span v-if="tarefasFeitas">{{tarefasFeitas}}%</span><span v-else>0%</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: Array
  },
  computed: {
      tarefasFeitas(){
          const tarefasFeitas = this.tarefas.filter(el=>{
              return el.status || 0;
          });
          return Math.round((tarefasFeitas.length/this.tarefas.length) * 100)
      }
  },
};
</script>

<style>
    .progress{
        width: 1025px;
        margin: 20px;
        height: 30px;
        color: #e9ecef
    }

    .progress span{
        color: #e9ecef
    }
</style>
