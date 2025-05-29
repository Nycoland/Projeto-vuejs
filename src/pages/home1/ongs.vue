<template>
  <AppHeader2></AppHeader2>
  <v-main class="main-background">
    <botao></botao>
    <!-- ONG1 -->
    <div class="quadrado">
          <v-card class="custom-card">
            <v-card-title>
              <v-icon left>mdi-paw</v-icon>
              <span class="title">PROTETORES DE ANIMAIS INDEPENDENTES DE PARNAIBA</span>
            </v-card-title>
          <div class="img6">
            <v-img 
            src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\animais6.jpg"
            width="500px"
            >
          </v-img>
        </div>
            <v-card-text class="card">
              Um grupo de voluntários que se unem para cuidar de animais abandonados, oferecendo comida, abrigo e tratamento médico.
              <a href="https://www.instagram.com/protetoresdeanimaisdeparnaiba?fbclid=IwZXh0bgNhZW0CMTAAAR3zCsyh-cwIy_uj45ezpuXneC-rCxbqe36e146oN0PLrMW31aUP7N_UtcE_aem_nP284OhjmJb3_qIerccbZg"></a>
            </v-card-text>
          </v-card>
        </div>
      

      <!-- ONG2 -->
       
      <div class="quadrado1">
          <v-card class="custom-card1">
            <v-card-title>
              <v-icon left>mdi-paw</v-icon>
              <span class="title">ADOTAR</span>
            </v-card-title>
          <div class="adotar">
            <v-img 
            src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\adotar.png"
            width="500px"
            >
          </v-img>
        </div>
            <v-card-text class="card1">
              Plataforma online que conecta pessoas interessadas em adotar animais com ONGs e protetores independentes da cidade.
              <a href="https://adotar.com.br/parnaiba-pi"></a>
            </v-card-text>
            
          </v-card>
        </div>
        
      </v-main>
  <AppFooter></AppFooter>
</template>

<script>

  </script>
  <style scoped>
.main-background{
  background-color: #ffcbef;
  height: 130vh;

}
.custom-card{
  background-color: white;
  color: black; 
  width: 650px;
  height: 700px;
  align-items: center;
  justify-content: center;

}
.card{
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.img6{
padding-left: 70px;
padding-top: 20px;
}
.quadrado{
  padding-left: 100px;
  position: absolute;
}
.custom-card1{  
  background-color: white;
  color: black;
  width: 600px ;
  height: 700px;
}
.adotar{
  padding-left: 50px;
  padding-top: 20px;
}
.card1{
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.quadrado1{
  padding-left: 820px;
  padding-bottom: 100px;
  position: absolute;
}
  </style>
  
  