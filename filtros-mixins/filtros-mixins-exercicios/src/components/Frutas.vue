<template>
  <div>
    <hr>
    <input type="text" placeholder="Insira uma fruta" v-model="fruta" @keydown.enter="add">
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
  </div>
</template>

<script>
import frutasMixins from "../mixins/frutasMixins";

export default {
  mixins: [frutasMixins],
};
</script>

<style>
</style>
