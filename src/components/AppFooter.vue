<template>
  <footer class="custom-footer">
    <v-container>
      <v-row justify="center">
        <v-col class="text-center white--text footer-text" cols="12" sm="8" md="6">
          © 2024 - SUNSHINE - TODOS OS DIREITOS RESERVADOS
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

</template>
<style cooper>
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
.footer-link {
  color: #ffffff;
  text-decoration: underline;
}
</style>
