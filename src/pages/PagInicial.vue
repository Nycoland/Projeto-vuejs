<template>
 <AppHeader1></AppHeader1>
    <v-main class="main-background">
      <section class="cardVue">
        <v-container>
          <v-row align="center" justify="center" style="min-height: 60vh;">
            <v-col cols="12" md="6">
              <h1 class="text-h2 font-weight-bold mb-4">
                Aqui ajudamos tutores e seus amiguinhos
              </h1>
              <p class="text-h6 mb-6 opacity-90">
                Conectando voce aos nossos melhores serviços de veterinarios e oranizaçoes de proteçao ao animal
              </p>
                <v-btn size="large" color="white" class="primary-text mr-4">
                  <v-icon>mdi-magnify</v-icon>   
                  Encontrar clinicas
                </v-btn>
                <v-btn size="large" variant="outlined" color="white">
                  <v-icon>mdi-heart</v-icon>
                  Encontrar Ongs
                </v-btn>
            </v-col>
              <v-col cols="12" md="6" class="text-center">
                <v-icon color="white" style="font-size: 300px; opacity: 0.4;">mdi-dog</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <!-- Cards informativoss -->
      
      <section class="py-8">
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card class="stats-card pa-6 text-center" elevation="8">
                <v-icon class="mb-4">mdi-hospital-box</v-icon>
                <h3 class="text-h4 font-weight-bold">50</h3>
                <h6 class="text-h6">Clinicas parceiras</h6>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="stats-card pa-6 text-center" elevation="8">
                <v-icon class="mb-4">mdi-heart</v-icon>
                <h3 class="text-h4 font-weight-bold">50</h3>
                <h6 class="text-h6">Ongs Cadastradas</h6>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="stats-card pa-6 text-center" elevation="8">
                <v-icon class="mb-4">mdi-account-group</v-icon>
                <h3 class="text-h4 font-weight-bold">50</h3>
                <h6 class="text-h6">Tutores Cadastrados</h6>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- como podemos ajudar? -->

      <section class="py-6 bg-grey-lighten-4">
        <v-container>
          <h2 class="py-12 text-h3 text-center mb-u font-weight-bold">Como podemos ajudar?</h2>
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="feature-card pa-6 text-center h-100" elevation="4">
                  <v-icon class="text-primary mb-4">mdi-magnify</v-icon>
                    <h3 class="text-h5 mb-3">Econtre clinicas</h3>
                    <p>Localize clinicias proximas a voce, com avaliaçoes e descricoes detalhadas</p>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="feature-card pa-6 text-center h-100" elevation="4">
                  <v-icon class="text-success mb-4">mdi-shield</v-icon>
                    <h3 class="text-h5 mb-3">Informaçao sobre as doenças</h3>
                    <p>Acesse um guia completo sobre doenças comuns em pets, sintomas e cuidados preventivos.</p>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="feature-card pa-6 text-center h-100" elevation="4">
                  <v-icon class="text-warning mb-4">mdi-handshake-outline</v-icon>
                    <h3 class="text-h5 mb-3">Apoie Ong</h3>
                    <p>Conecte-se com organizações de proteção animal e faça a diferença na vida dos animais necessitados.</p>
                </v-card>
              </v-col>
            </v-row>
        </v-container>
      </section>

      <!-- carrosel de noticias -->

      <section class="py-12">
        <v-container>
          <h2 class="text-h3 text-center mb-8 font-weight-bold">Últimas notícias</h2>
            <v-carousel height="300" cycle>
              <v-carousel-item>
                <v-card class="h-100" color="primary">
                  <v-card-text class="white--text">
                    <h3 class="text-h4 mb-4">{{ news.title }}</h3>
                    <p class="text-h6">{{ news.description }}</p>
                  </v-card-text>
                </v-card>
              </v-carousel-item>
            </v-carousel>
        </v-container>
      </section>
      </v-main>
      <AppFooter></AppFooter>
    
</template>

<script setup>
import axios from 'axios';

// axios.get()
// .then((response) =>{
//   console.log(response)
// })

</script> 

<style scoped>

.cardVue{
  background-color: #7681f8;
  min-height: 60vh;
  color: white;

}
.stats-card{
  background-color: rgb(255, 98, 124);
  color: white;
  
}
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  color: #000000;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}



/* .container{
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 150px;
} */

/* .cardInfo{
  width: 700px;
  height: 300px;
  margin: 20px;
  margin-top: 30px;
  align-items: center;
  background-color:#8c52ff ;
} */
/* .card{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
} */

/* .texto{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;

}

h1, h4{
  color:#000000;
  font-weight: bold;
  text-shadow: 1px 3px 4px rgba(0,0,0,0.8);

} */

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
  background-color: white;
}

.bold-title {
  font-weight: bold;
}

/* .custom-footer {
  background-color:#a9b0ff;
  color: #000000;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
} */

/* .footer-text {
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
} */

/* .pata{ */
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* width: 1000px;   */
  /* opacity: 0.5;  */
  /* z-index: 1; */
/* } */
/* 
.container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: white;
} */
</style>