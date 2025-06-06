<template>
  <v-app>
    <v-container fluid class="login-container pa-0">
      <!-- Ícones animados flutuantes -->
      <div class="floating-pets">
        <v-icon class="floating-pet">mdi-dog</v-icon>
        <v-icon class="floating-pet">mdi-cat</v-icon>
        <v-icon class="floating-pet">mdi-rabbit</v-icon>
        <v-icon class="floating-pet">mdi-bird</v-icon>
      </div>

      <!-- Conteúdo centralizado -->
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card class="login-card pa-8">
            <v-card-text class="text-center">
              <!-- Logo/Icon -->
              <v-icon class="pet-icon">mdi-paw</v-icon>
              <!-- Título -->
              <h1 class="brand-title mb-2">Smilling Friends</h1>
              <p class="subtitle mb-6">Aqui ajudamos tutores e seus amiguinhos!</p>

              <!-- Formulário de Login -->
              <v-form @submit.prevent="login" class="text-black">
                <v-text-field 
                  v-model="email"
                  label="E-mail"
                  type="email"
                  prepend-inner-icon="mdi-email"
                  outlined
                  rounded
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Senha"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  outlined
                  rounded
                  :rules="passwordRules"
                  required
                ></v-text-field>

                <!-- Lembrar-me / Esqueceu senha -->
                <v-row class="mb-4">
                  <v-col cols="6">
                    <v-checkbox v-model="rememberMe" label="Lembrar-me" color="primary" class="mt-0"></v-checkbox>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <a href="#" class="register-link">Esqueceu a senha?</a>
                  </v-col>
                </v-row>

                <!-- Botão de Login -->
                <v-btn
                  type="submit"
                  block
                  large
                  class="login-btn white--text"
                  :loading="loading"
                  :disabled="!isFormValid"
                >
                  <v-icon left>mdi-login</v-icon>
                  Entrar
                </v-btn>
              </v-form>

              <!-- Divider -->
              <v-divider class="my-6"></v-divider>

              <!-- Cadastre-se -->
              <p class="mb-0 text-black">
                Não tem uma conta?
                <a href="#" class="register-link" @click="showRegisterDialog = true">
                  Cadastre-se aqui
                </a>
              </p>

              <!-- Redes sociais -->
              <div class="mt-4 text-center">
                <p class="caption mb-3">Ou entre com:</p>
                <v-btn color="red" dark small class="mr-2" @click="socialLogin('google')">
                  <v-icon left small>mdi-google</v-icon>
                  Google
                </v-btn>
                <v-btn color="indigo" dark small @click="socialLogin('facebook')">
                  <v-icon left small>mdi-facebook</v-icon>
                  Facebook
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Rodapé -->
      <div class="footer-info">
        <p>© 2024 - Smilling Friends Corporation - Todos os direitos reservados</p>
        <p>smillingfriends.cop@gmail.com.br | Contato: (86) 9 0000-0000</p>
        <div class="social-icons">
          <v-icon>mdi-instagram</v-icon>
          <v-icon>mdi-facebook</v-icon>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-whatsapp</v-icon>
        </div>
      </div>
    </v-container>

    <!-- Modal de Cadastro -->
    <v-dialog v-model="showRegisterDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-center">
          <span class="brand-title">Cadastre-se</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="registerForm.name" label="Nome completo" prepend-inner-icon="mdi-account" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.cpf" label="CPF" prepend-inner-icon="mdi-card-account-details" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.birthDate" label="Data de nascimento" type="date" prepend-inner-icon="mdi-calendar" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.email" label="E-mail" type="email" prepend-inner-icon="mdi-email" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.phone" label="Celular" prepend-inner-icon="mdi-phone" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.password" label="Senha" type="password" prepend-inner-icon="mdi-lock" outlined rounded></v-text-field>
            <v-text-field v-model="registerForm.confirmPassword" label="Confirmação de senha" type="password" prepend-inner-icon="mdi-lock-check" outlined rounded></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showRegisterDialog = false">Cancelar</v-btn>
          <v-btn color="primary" @click="register">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar de sucesso -->
    <v-snackbar v-model="showSnackbar" :color="snackbarColor" timeout="3000">
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #8da0f7 0%, #f59bcd 100%);
  position: relative;
}
.login-card {
  border-radius: 15px !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  background-color: white;
}
.brand-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #667eea;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}
.subtitle {
  color: #464646;
  font-weight: 300;
}
.pet-icon {
  font-size: 4rem !important;
  color: #667eea;
  margin-bottom: 1rem;
}
.login-btn {
  /* background: linear-gradient(45deg, #8da0f7, #f59bf5) !important; */
  background-color: #667eea;
  border: none !important;
  border-radius: 25px !important;
  text-transform: none !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
}
.register-link {
  color: #667eea !important;
  text-decoration: none !important;
  font-weight: 500;
}
.register-link:hover {
  text-decoration: underline !important;
}
.input-field .v-input__control .v-input__slot {
  border-radius: 10px !important;
}
.floating-pets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.floating-pet {
  position: absolute;
  opacity: 0.2;
  font-size: 3rem;
  animation: float 6s ease-in-out infinite;
}
.floating-pet:nth-child(1) { top: 10%; left: 10%; }
.floating-pet:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
.floating-pet:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 4s; }
.floating-pet:nth-child(4) { bottom: 20%; right: 10%; animation-delay: 1s; }
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
.footer-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.8);
  text-align: center;
  font-size: 0.9rem;
}
.social-icons .v-icon {
  color: rgba(255,255,255,0.8) !important;
  margin: 0 10px;
  transition: all 0.3s ease;
}
.social-icons .v-icon:hover {
  color: white !important;
  transform: scale(1.2);
}
</style>


<script>
import auth from '@/services/auth';

export default {
  name: 'LoginPage',
  
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v => (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres'
      ],
      showPassword: false,
      rememberMe: false,
      loading: false,
      showRegisterDialog: false,
      registerForm: {
        name: '',
        cpf: '',
        birthDate: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      showSnackbar: false,
      snackbarMessage: '',
      snackbarColor: 'success'
    };
  },

  computed: {
    isFormValid() {
      return this.email && 
             this.password && 
             this.emailRules.every(rule => rule(this.email) === true) &&
             this.passwordRules.every(rule => rule(this.password) === true);
    }
  },

methods: {
  async login() {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      });
      
      // Salva o token no localStorage
      localStorage.setItem('userToken', response.data.token);
      
      // Redireciona após login bem-sucedido
      this.$router.push('/PagInicial');
    } catch (error) {
      console.error("Erro no login:", error.response.data);
      alert("Login falhou: " + (error.response.data.message || "Credenciais inválidas"));
    }
  }
},
    
    async register() {
      try {
        this.loading = true;
        
        // Validação simples de senha
        if (this.registerForm.password !== this.registerForm.confirmPassword) {
          throw { message: 'As senhas não coincidem' };
        }
        
        const userData = {
          name: this.registerForm.name,
          email: this.registerForm.email,
          password: this.registerForm.password,
          cpf: this.registerForm.cpf,
          birthDate: this.registerForm.birthDate,
          phone: this.registerForm.phone
        };
        
        await auth.register(userData);
        
        this.showNotification('Cadastro realizado com sucesso! Faça login.', 'success');
        this.showRegisterDialog = false;
        this.resetRegisterForm();
        
      } catch (error) {
        this.showNotification(
          error.message || 'Erro ao cadastrar. Tente novamente.', 
          'error'
        );
      } finally {
        this.loading = false;
      }
    },
    
    async socialLogin(provider) {
      try {
        this.loading = true;
        await auth.socialLogin(provider);
      } catch (error) {
        this.showNotification(
          `Erro ao conectar com ${provider}. Tente novamente.`, 
          'error'
        );
      } finally {
        this.loading = false;
      }
    },
    
    showNotification(message, color) {
      this.snackbarMessage = message;
      this.snackbarColor = color;
      this.showSnackbar = true;
    },
    
    resetRegisterForm() {
      this.registerForm = {
        name: '',
        cpf: '',
        birthDate: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      };
    }
  }

</script>

