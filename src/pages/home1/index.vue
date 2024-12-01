<template>
    <v-app>
      <AppHeader2></AppHeader2>
  
      <v-main class="main-background">
       
        <v-container>
          <router-view />
        </v-container>
      </v-main>
      <AppFooter></AppFooter>
    </v-app>
  </template>
  
  <script setup>
import AppHeader2 from '@/components/AppHeader2.vue';

    //
  </script> 
  
  <style scoped>
  .mt-10 {
    margin-top: 40px;
    color: #000000;
  }
  
 
  .main-background {
    background-color: #ffcbef;
  }
  
  .bold-title {
    font-weight: bold;
  }
  
  
  </style>
  
  