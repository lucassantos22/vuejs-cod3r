<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert show dismissible v-for="mensagem in mensagens" :variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"/>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o E-mail"
        />
      </b-form-group>
    </b-card>
    <hr>
    <b-button size="lg" variant="primary" @click="enviar">Enviar</b-button>
    <b-button size="lg" variant="success" class="ml-2" @click="obterUsuarios">Obter Usuários</b-button>
    <div v-for="usuario in usuarios" :key="usuario.id">
    <hr>
    <p><b>Usuario:</b> {{usuario.nome}}</p>
    <p><b>E-mail:</b> {{usuario.email}}</p>
    <p><b>Id:</b> {{usuario.id}}</p>
    <br>
    <b-button variant="warning" size="lg" @click="carregar(usuario.id)">Carregar</b-button>
    <b-button variant="danger" size="lg" class="ml-2" @click="excluir(usuario.id)">Excluir</b-button>
    </div>
  </div>
</template>

<script>
// import axios from './src/plugins/axios'; IMPORTAR DE FORMA LOCAL
export default {
  data() {
    return {
      mensagens: [],
      usuarios: [],
      id: null,
      usuario: {
        nome: "",
        email: ""
      }
    };
  },
  methods: {
    enviar() {
      this.$http.post("usuarios.json", this.usuario)
      .then(() => {
        this.limpar();
        this.mensagens.push({
          texto: "Usuario salvo",
          tipo: "success"
        })
      })
      .catch(err=>{
        this.mensagens.push({
          texto: "Algo ocorreu errado",
          tipo: "danger"
        })
      })
    },
    obterUsuarios() {
      this.$http.get("usuarios.json").then(res => {
        this.usuarios = res.data;
      });
      console.log(this.usuarios);
    },
    limpar(){
      this.usuario = {};
      this.id = null;
      this.mensagens = [];
    },
    carregar(id){
      this.id = id;
      this.usuario = {...this.usuarios[id]}
    },
    excluir(id){
      this.$http.delete(`/usuarios/${id}.json`).then(() => {
        this.limpar();
        this.obterUsuarios()
      });
    }
  }
  // destroyed(){
  // 	this.$http.post('usuarios.json',{
  // 		nome:'Maria',
  // 		email:'maria@gmail.com'
  // 	}).then(res => console.log(res));
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
