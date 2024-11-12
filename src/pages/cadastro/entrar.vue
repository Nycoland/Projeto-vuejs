<template>
    <v-sheet class="form-wrapper">
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
  
        <v-btn class="submit-bnt mt-4" type="submit" block>Entrar</v-btn>
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
    .form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color:  #f5f5f5;
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