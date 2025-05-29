<template>
    <v-btn
      class="back-button ms-10 mt-10"
      color="secondary"
      variant="outlined"
      @click="goBackTohome1"
    >
      <v-icon>mdi-arrow-left</v-icon>
      Voltar
    </v-btn>
  </template>
  
  <script>
  export default {
    methods: {
      goBackTohome1() {
        this.$router.push("/home");
      },
    },
  };
  </script>