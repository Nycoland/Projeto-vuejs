<template>
 <div>
    <!-- Barra de Navegação -->
    <v-app-bar flat color="white" height="64" elevation="3">
      <!-- Ícone e Título à esquerda -->
      <div class="d-flex align-center">
        <v-icon size="28" class="mr-3 ml-3" color="#7681f8">mdi-paw</v-icon>
        <span class="title">Smiling Friends</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/">
        <v-icon left>mdi-home</v-icon>
        HOME
      </v-btn>

      <v-btn to="/home1/clinicas">
        <v-icon left>mdi-hospital-box</v-icon>
        CLÍNICAS
      </v-btn>

      <!-- <v-btn to="./home1/ongs">
        <v-icon left>mdi-heart</v-icon>
        ONGS
      </v-btn> -->

      <v-btn to="/home1/doencas">
        DOENÇAS
      </v-btn>

      <!-- Botões com borda -->
      <v-btn color="#7681f8" variant="outlined" class="ml-4 mr-4" to="/login">
        ENTRAR
      </v-btn>

      <v-btn color="#7681f8" to="/cadastro/cadastre2">
        CADASTRAR
      </v-btn>
    </v-app-bar>
  </div>

  </template>


<style scoped>
.btn-text-uppercase{
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ffcbef;
  border: 1.5px solid;
}

.title{
  /* font-size: 30px; */
  color: #7681f8;
  font-weight:bold; 
  text-align: center;
  font-size: 20px;
}

</style>