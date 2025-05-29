<template>
  <v-app>
 <AppHeader1></AppHeader1>

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
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" class="text-center white--text footer-text">
            <p> © 2024 - SUNSHINE - TODOS OS DIREITOS RESERVADOS</p>
            <p>Contato: <a href="mailto:contato@smilingfriends.com" class="footer-link">contato@smilingfriends.com</a></p>
            <div class="social-icons">
              <v-icon class="mx-2">mdi-instagram</v-icon>
              <v-icon class="mx-2">mdi-github</v-icon>
              <v-icon class="mx-2">mdi-linkedin</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
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

.footer-link {
  color: #ffffff;
  text-decoration: underline;
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