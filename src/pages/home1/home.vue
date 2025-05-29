<template>
    <v-app>
      <AppHeader2></AppHeader2>
      <v-container>
        
      </v-container>
      <v-main class="main-background">
        <div class="quadrado">

          <v-card class="custom-card">
            <v-card-title>
              <v-icon left>mdi-paw</v-icon>
              <span class="title">Home</span>
            </v-card-title>
            <v-card-text class="card">
              Um site dedicado a transformar a vida dos nossos amiguinhos para melhor! Aqui, oferecemos conteúdos detalhados, dicas práticas e recursos úteis para ajudar você a proporcionar o máximo de conforto, saúde e felicidade aos seus animais de estimação.         
              Queremos ser seu parceiro no cuidado com os pets, disponibilizando informações que abrangem desde nutrição e saúde até treinamento, socialização e bem-estar emocional.
            </v-card-text>
          </v-card>

          
        </div>
        <div class="img1">
          <v-container>
            <v-img 
            src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\animais1.jpg"
            width="550px"
            aspect-ratio="16/9"
            ></v-img>
          </v-container>
        </div>
        <div class="img">
          <v-container>
            <v-img
            src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\animais.jpg"
            width="700"
            aspect-ratio="16/9"
            ></v-img>
          </v-container>
        </div>
        
        <div class="quadrado1">
        <v-card class="custom-card1">
      

            <v-card-text class="card1">
              Nossa missão é criar um ambiente acolhedor e informativo, onde o amor, a empatia e o cuidado com os animais estejam sempre em primeiro lugar. Além disso, compartilhamos histórias inspiradoras, atualizações sobre causas animais e projetos sociais que promovem a adoção e a conscientização sobre os direitos dos bichinhos.
              
              Acreditamos que, com conhecimento e dedicação, podemos melhorar não só a vida dos nossos companheiros de quatro patas, mas também fortalecer o vínculo entre humanos e animais. Juntos, podemos fazer a diferença, garantindo um futuro mais feliz e seguro para todos os nossos amigos peludos!"
            </v-card-text>
          </v-card>
          </div>
          <div class="img5">
          <v-container>
            <v-img
            src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\animal5.jpg"
            width="700"
            aspect-ratio="16/9"
            ></v-img>
          </v-container>
        </div>
            <div class="quadrado2">
              
              <v-card class="custom-card2">
                <v-card-title class="title2">
                  Quem Somos Nós
                </v-card-title  >
                <div class="imgs">
                  <v-img class="imga"
                  src="C:\Users\annek\SmileFriends-ak\Projeto-vuejs\src\assets\anne.jpg"
                  width="400"
                  ></v-img>
                </div>
                <v-spacer></v-spacer>

                  <v-card-text class="card2">
                    <p>Somos Nycole e Anne, estudantes de Análise e Desenvolvimento de Sistemas (ADS), que decidiram unir nossas habilidades tecnológicas ao amor pelos animais.</p> Com o desejo de fazer a diferença, criamos um projeto especial: um site informativo dedicado a ajudar animais e conscientizar as pessoas sobre o cuidado e a proteção deles.  
                    Nosso objetivo é facilitar o acesso a informações úteis, promover iniciativas de adoção, compartilhar dicas de cuidado e bem-estar animal e conectar quem ama os bichinhos com causas que precisam de apoio. <p>Acreditamos que a tecnologia pode ser uma poderosa ferramenta para transformar o mundo e, com isso, melhorar a vida de quem não tem voz: os animais.  
                    Junte-se a nós nessa jornada! Vamos construir um futuro melhor para nossos amigos de quatro patas.</p>
                </v-card-text>
              </v-card>
            </div>
            

            <div>
              <h2 class="titulo">COMO NOS AJUDAR?</h2>
              <v-card class="custom-card3">
                  <v-card-text class="card3">
                    Existem várias maneiras de fazer isso, seja compartilhando conhecimento, ajudando a promover o conteúdo ou participando de iniciativas que ampliem o impacto do site. Se você tem experiência ou interesse no mundo animal, pode colaborar escrevendo artigos educativos sobre espécies, cuidados, saúde ou comportamento, além de compartilhar histórias inspiradoras ou enviar fotos e vídeos para registro no site.
                </v-card-text>
              </v-card>

              <v-card class="custom-card4">
                  <v-card-text class="card4">
                    Divulgar o site também é essencial. Compartilhe com os amigos e famlia nas redes sociais, e participe ativamente das discussões, respondendo a dúvidas ou sugerindo tópicos relevantes. Além disso, você pode oferecer seu tempo como voluntário, ajudando em eventos como feiras de adoção ou campanhas de conscientização. Caso tenha habilidades específicas, como design, marketing ou fotografia, disponibilizá-las para o projeto pode fazer uma grande diferença. Dar feedback sobre o site, sugerir melhorias ou até mesmo apontar erros também são formas valiosas de colaborar, garantindo que o conteúdo seja sempre de qualidade e acessível.
                </v-card-text>
              </v-card> 

              <v-card class="custom-card5">
                  <v-card-text class="card5">
                    Ao se envolver, você estará contribuindo para ampliar o impacto do site e ajudando a criar um futuro melhor para os animais e para as pessoas que desejam conhecê-los e protegê-los. Cada pequena ação pode gerar uma grande mudança, e sua participação pode ser o impulso que o projeto precisa para crescer ainda mais.
                </v-card-text>
              </v-card>
            </div>
          <router-view />
      </v-main>
    </v-app>
    <AppFooter></AppFooter>
  </template>
  
  <script setup>
import AppHeader2 from '@/components/AppHeader2.vue';
import AppFooter from '@/components/AppFooter.vue';

    //
  </script> 
  
  <style scoped>
  .mt-10 {
    margin-top: 40px;
    color: #000000;
  }

  .main-background {
    background-color: #ffcbef;
    height: 300vh;
  }
  
  .bold-title {
    font-weight: bold;
  }
  /*card e imagem*/
  .custom-card {
  background-color: white;
  padding-left: 10px;
  width: 600px;
  color: #000000;
  bottom: 40px;
}
.title {
  font-weight: bold;
  font-size: 30px;

}
.quadrado{
  padding-left: 50px;
}
.quadrado1{
  top:1000px
}
.card{
  font-weight: bold;
  font-size: 18px;
  text-align: center;
}
.img{
  position: absolute;
  right:50px;
  top:90px;
}

/*card e imagem 1*/
.img1{
  position: relative;
  right: 100px;
  bottom:30px
}
.custom-card1{
  width: 650px;
  position: relative;
  left:780px;
  bottom:350px;
  background-color: white;
  
}
.card1{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  padding: 20px;
}
/*card e imagem 2*/
.custom-card2{
  width: 650px;
  height: 700px;
  position: relative;
  left:50px;
  bottom: 1050px;
  background-color: white;
}
.card2{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding: 20px;
  margin:0;
  text-align: center;
}
.title2{
  color: #000000;
  font-weight: bold;
  font-size: 30px;
}
.imga{
  left:120px;
  
  padding-top:20px;
}
.img5{
  position:relative;
  left:600px;
  bottom:320px
}
.titulo{
  color: #000000;
  
}
/* card 3 */
.custom-card3{
  width: 400px;
  height: 340px;
  position: relative;
  left:60px;
  bottom: 850px;
  background-color: white;
}
.card3{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding: 20px;
  text-align: center;
}

/* card 4 */
.custom-card4{
  width: 500px;
  height: 380px;
  position: relative;
  left:510px;
  bottom: 1190px;
  background-color: white;
}
.card4{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding: 20px;
  text-align: center;
}
.custom-card5{
  width: 400px;
  height: 340px;
  position: relative;
  left:1060px;
  bottom:1570px;
  background-color: white;
}
.card5{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding: 20px;
  text-align: center;
}
.titulo{
  color: black;
  position: relative;
  bottom:900px;
  text-align: center;
  font-weight: bold;
}
  </style>
  
  