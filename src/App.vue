<template>
  <v-app>
    <v-app-bar color="#a9b0ff" dark>
        <v-toolbar-title class="bold-title mr-2">SMILING FRIENDS</v-toolbar-title>
        <v-icon class="ml-1">mdi-paw</v-icon>
      <v-spacer></v-spacer>
      <v-btn text rounded outlined class="mx-2 btn-text-uppercase elevation-2">SEJA NOSSO ALIADO</v-btn>
      <v-btn text rounded outlined class="mx-2 btn-text-uppercase elevation-2">CADASTRE-SE</v-btn>
      <v-btn text rounded outlined class="mx-2 btn-text-uppercase elevation-2">ENTRAR</v-btn>
    </v-app-bar>

    <v-main class="main-background">
      <v-container class="text-center mt-10">
        <h1>SMILING FRIENDS</h1>
        <h2>AQUI AJUDAMOS TUTORES E SEUS AMIGUINHOS</h2>
      </v-container>

      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <footer class="custom-footer">
      <v-col class="text-center white--text footer-text" cols="12" sm="8" md="6">
        © 2024 - SUNSHINE - TODOS OS DIREITOS RESERVADOS
      </v-col>
    </footer>
  </v-app>
</template>

<script setup>
  //
</script> 

<style scoped>
.mt-10 {
  margin-top: 40px;
  color: #000000;
}

.btn-text-uppercase{
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ffcbef;
  border: 1.5px solid;
}

.main-background {
  background-color: #ffcbef;
}

.bold-title {
  font-weight: bold;
}

.custom-footer {
  background-color:#a9b0ff;
  color: #000000;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

.footer-text {
  font-size: 14px;
}

@media (min-width: 600px){
  .footer-text{
    font-size: 16px;
  }
}

@media(min-width: 960px){
  .footer-text{
    font-size: 18px;
    padding-top: 12px;
  }
}
</style>

