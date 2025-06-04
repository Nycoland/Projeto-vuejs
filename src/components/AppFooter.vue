<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="mb-3">Smilling Friends</h3>
          <p>Conectanto tutores aos aos melhores cuidados com seus pets</p>
        </v-col>
        <v-col cols="12" md="4">
          <h4>Contato</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
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
