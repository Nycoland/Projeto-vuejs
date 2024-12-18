<template>
    <v-sheet class="form-wrapper">
      <h2 class="welcome-text">Ebaaa, estamos felizes por ter você aqui</h2>
      <v-form class="form-container" fast-fail @submit.prevent>
      
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          class="custom-field"
          prepend-inner-icon="mdi-email"
          outlined
          color="white"
          hide-details="auto"
        ></v-text-field>
  
        <v-text-field
          v-model="senha"
          :rules="senhaRules"
          label="Senha"
          type="password"
          class="custom-field"
          color="white"
          prepend-inner-icon="mdi-lock"
         outlined
         hide-details="auto"
        ></v-text-field>
  
        <v-btn class="submit-bnt mt-4" type="submit" block to="/homee">Entrar</v-btn>
      </v-form>
    </v-sheet>
  </template>
  <script>
    export default {
      data: () => ({
        email: '',
        senha:'',
        emailRules: [
          value => !!value || 'Email is required.',
          value => /.+@.+\..+/.test(value) || 'Email must be valid.'
        ],
        senhaRules: [
          value => !!value || 'Password is required',
          value => value.length >= 6 || 'Password must be at least 6 characters.'
           
        ],
      }),
    }
  </script>



<style scoped>

  .welcome-text {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 20px;
  }
  .form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color:  #ffcbef;
        flex-direction: column;
  }
    .form-container {
        width: 300px;
        color: #000000;
        padding: 20px;
        border-radius: 12px;
        background-color:#ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }



    .custom-field {
        margin-bottom: 10px;
        font-size: 16px;
        border-radius: 10px;
        background-color: #ffffff;
        color: #000000;
        box-sizing: border-box;
        width: 100%;
        border: 0.1rem solid #000000;
        padding: 8px 12px;
    
    }


    .submit-bnt {
        background-color: #ffcbef;
        color: #000000;
        font-weight: bold;
        border-radius: 16px;
        border: solid 1.5px;
        border-color: #000000;
    }

    .submit-bnt:hover {
        background-color: #ca399e;
    }

</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/composables/supabase';

// Estados reativos
const visible = ref(false); // Para um campo de senha visível (se necessário)
const email = ref(''); // Inicializando com string vazia
const senha = ref('');
const snackbar = ref(false);
const feedback = ref('');
const router = useRouter();

// Função de login
async function logIn() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: senha.value,
    });

    if (error) {
      feedback.value = `Erro ao registrar login: ${error.message}`;
      snackbar.value = true;
    } else if (data.session) {
      feedback.value = 'Logado com sucesso!';
      snackbar.value = true;

      // Redireciona para a página principal após 1 segundo
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  } catch (err) {
    console.error('Erro:', err);
    feedback.value = 'Erro ao registrar login.';
    snackbar.value = true;
  }
}
</script>