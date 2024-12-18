<template>
    <v-container>
      <v-app-bar class="header" color="#a9b0ff">
        <v-toolbar-title class="d-flex align-center justify-start">
          <span class="bold-title font-weight-bold">SMILING FRIENDS</span>
          <v-icon icon="mdi-paw" class="ml-3" size="24"></v-icon>
        </v-toolbar-title>
        <v-spacer></v-spacer> <v-btn rounded outlined class="mx-2 btn-text-uppercase elevation-2" to="/cadastro">CADASTRE-SE</v-btn>
        <v-btn rounded outlined class="mx-2 btn-text-uppercase elevation-2" to="/login">ENTRAR</v-btn>
      </v-app-bar>
    </v-container>
  </template>
<style scoped>
.btn-text-uppercase{
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ffcbef;
  border: 1.5px solid;
}

</style>