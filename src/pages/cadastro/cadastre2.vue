<template>
  <v-app>
    <v-container fluid class="register-container pa-0">
      <!-- Back Button -->
      <v-btn fab small class="back-button" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      
      <v-row justify="center" align="center" class="fill-height py-8">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
          <v-card class="register-card pa-8">
            <v-card-text>
              <!-- Header -->
              <div class="text-center mb-6">
                <v-icon class="pet-icon">mdi-paw</v-icon>
                <h1 class="brand-title mb-2">Cadastre-se</h1>
                <p class="subtitle">Junte-se à nossa comunidade</p>
              </div>
              
              <!-- Form -->
              <v-form ref="form" class="text-black" v-model="valid">
                <v-text-field
                  v-model="form.name"
                  label="Nome completo *"
                  prepend-inner-icon="mdi-account"
                  outlined
                  rounded
                  :rules="nameRules"
                  required
                ></v-text-field>
                
                

                <v-text-field
                  v-model="form.email"
                  label="E-mail *"
                  type="email"
                  prepend-inner-icon="mdi-email"
                  outlined
                  rounded
                  :rules="emailRules"
                  required
                ></v-text-field>
                
                <v-text-field
                  v-model="form.password"
                  label="Senha *"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  outlined
                  rounded
                  :rules="passwordRules"
                  required
                ></v-text-field>
                
                <v-checkbox
                  v-model="form.acceptTerms"
                  :rules="[v => !!v || 'Você deve aceitar os termos']"
                  color="primary"
                  class="mt-4"
                >
                  <template v-slot:label>
                    <div>
                      Eu aceito os 
                      <a href="#" class="login-link" @click.stop="showTerms = true">
                        termos de uso
                      </a>
                    </div>
                  </template>
                </v-checkbox>
              </v-form>
              
              <!-- Register Button -->
              <v-btn
                block
                large
                class="register-btn white--text mt-4"
                @click="register"
                :loading="loading"
                :disabled="!valid || !form.acceptTerms"
              >
                <v-icon left>mdi-account-plus</v-icon>
                Criar conta
              </v-btn>
              
              <!-- Login Link -->
              <div class="text-center mt-6">
                <p class="mb-0 text-black">
                  Já tem uma conta? 
                  <a href="#" class="login-link" @click="goToLogin">
                    Entre aqui
                  </a>
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Terms Dialog -->
    <v-dialog v-model="showTerms" max-width="600px">
      <v-card>
        <v-card-title>Termos de Uso</v-card-title>
        <v-card-text>
          <p>Conteúdo dos termos de uso...</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showTerms = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- Success Snackbar -->
    <v-snackbar v-model="showSnackbar" :color="snackbarColor" timeout="4000">
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      loading: false,
      showPassword: false,
      showTerms: false,
      showSnackbar: false,
      snackbarMessage: '',
      snackbarColor: 'success',
      
      form: {
        name: '',
        email: '',
        password: '',
        acceptTerms: false
      },
      
      // Validation rules
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length >= 2) || 'Nome deve ter pelo menos 2 caracteres'
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v => (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres'
      ]
    }
  },
  
  methods: {
    register() {
      if (!this.valid || !this.form.acceptTerms) return;
      
      this.loading = true;
      
      // Simular registro
      setTimeout(() => {
        this.loading = false;
      
        this.showMessage('Cadastro realizado com sucesso!', 'success');
      }, 2000);
    },
    
    goBack() {
      this.$router.push('/login'); // Navegar para a página inicial ou anterior
      console.log('Voltar');
    },
    
    goToLogin() {
      // Implemente a navegação para login
      console.log('Ir para login');
    },
    
    showMessage(message, color) {
      this.snackbarMessage = message;
      this.snackbarColor = color;
      this.showSnackbar = true;
    }
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #8da0f7 0%, #f59bf5 100%);
  padding: 20px 0;
}
.register-card {
  border-radius: 15px !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
  background-color: white;
}
.brand-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #667eea;
}
.subtitle {
  color: #666;
  font-weight: 300;
}
.pet-icon {
  font-size: 3rem !important;
  color: #667eea;
  margin-bottom: 1rem;
}
.register-btn {
  background-color: #667eea;
  border-radius: 25px !important;
}
.login-link {
  color: #667eea !important;
  text-decoration: none !important;
}
.login-link:hover {
  text-decoration: underline !important;
}
.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: rgba(255,255,255,0.9) !important;
  color: #667eea !important;
}
</style>