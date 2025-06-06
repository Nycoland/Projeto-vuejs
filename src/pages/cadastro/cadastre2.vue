<template>
  <v-app>
    <v-container fluid class="register-container pa-0">
      <div class="floating-pets">
        <v-icon class="floating-pet mdi-dog" style="font-size: 3rem;"></v-icon>
        <v-icon class="floating-pet mdi-cat" style="font-size: 2.5rem;"></v-icon>
        <v-icon class="floating-pet mdi-rabbit" style="font-size: 2rem;"></v-icon>
        <v-icon class="floating-pet mdi-bird" style="font-size: 2.5rem;"></v-icon>
        <v-icon class="floating-pet mdi-turtle" style="font-size: 2rem;"></v-icon>
        <v-icon class="floating-pet mdi-fish" style="font-size: 2.5rem;"></v-icon>
      </div>
      
      <!-- Back Button -->
      <v-btn 
        fab 
        small 
        class="back-button"
        @click="goBack"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      
      <v-row justify="center" align="center" class="fill-height py-8">
        <v-col cols="12" sm="10" md="8" lg="6" xl="4">
          <v-card class="register-card pa-8">
            <v-card-text>
              <!-- Header -->
              <div class="text-center mb-6">
                <v-icon class="pet-icon">mdi-paw </v-icon>
                <h1 class="brand-title mb-2">Cadastre-se</h1>
                <p class="subtitle">Junte-se à nossa comunidade de tutores</p>
              </div>
              
              <!-- Progress Bar -->
              <v-progress-linear 
                :value="progressPercentage" 
                color="primary" 
                height="6" 
                rounded
                class="progress-bar text-black"
              ></v-progress-linear>
              <p class="text-center caption mb-6 text-black">
                Etapa {{ currentStep }} de {{ totalSteps }}
              </p>
              
              <!-- Form -->
              <v-form ref="form" v-model="valid">
                <!-- Step 1: Personal Information -->
                <div v-if="currentStep === 1" class="form-section">
                  <h3 class="section-title">
                    <v-icon>mdi-account</v-icon>
                    Informações Pessoais
                  </h3>
                  
                  <v-text-field
                    v-model="form.name"
                    label="Nome completo *"
                    prepend-inner-icon="mdi-account"
                    outlined
                    rounded
                    class="input-field"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.cpf"
                    label="CPF *"
                    prepend-inner-icon="mdi-card-account-details"
                    outlined
                    rounded
                    class="input-field"
                    :rules="cpfRules"
                    required
                    @input="formatCPF"
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.birthDate"
                    label="Data de nascimento *"
                    type="date"
                    prepend-inner-icon="mdi-calendar"
                    outlined
                    rounded
                    class="input-field" 
                    :rules="birthDateRules"
                    required
                  ></v-text-field>
                </div>
                
                <!-- Step 2: Contact Information -->
                <div v-if="currentStep === 2" class="form-section">
                  <h3 class="section-title">
                    <v-icon>mdi-phone</v-icon>
                    Informações de Contato
                  </h3>
                  
                  <v-text-field
                    v-model="form.email"
                    label="E-mail *"
                    type="email"
                    prepend-inner-icon="mdi-email"
                    outlined
                    rounded
                    class="input-field"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.phone"
                    label="Celular *"
                    prepend-inner-icon="mdi-phone"
                    outlined
                    rounded
                    class="input-field"
                    :rules="phoneRules"
                    required
                    @input="formatPhone"
                  ></v-text-field>
                </div>
                
                <!-- Step 3: Address Information -->
                <div v-if="currentStep === 3" class="form-section">
                  <h3 class="section-title">
                    <v-icon>mdi-home</v-icon>
                    Endereço
                  </h3>
                  
                  <v-text-field
                    v-model="form.cep"
                    label="CEP *"
                    prepend-inner-icon="mdi-map-marker"
                    outlined
                    rounded
                    class="input-field"
                    :rules="cepRules"
                    required
                    @input="formatCEP"
                    @blur="searchCEP"
                  ></v-text-field>
                  
                  <v-row>
                    <v-col cols="8">
                      <v-text-field
                        v-model="form.street"
                        label="Logradouro *"
                        prepend-inner-icon="mdi-road"
                        outlined
                        rounded
                        class="input-field"
                        :rules="streetRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="form.number"
                        label="Número *"
                        prepend-inner-icon="mdi-numeric"
                        outlined
                        rounded
                        class="input-field"
                        :rules="numberRules"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  
                  <v-text-field
                    v-model="form.complement"
                    label="Complemento"
                    prepend-inner-icon="mdi-home-plus"
                    outlined
                    rounded
                    class="input-field"
                  ></v-text-field>
                  
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        v-model="form.neighborhood"
                        label="Bairro *"
                        prepend-inner-icon="mdi-city"
                        outlined
                        rounded
                        class="input-field"
                        :rules="neighborhoodRules"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="form.reference"
                        label="Referência"
                        prepend-inner-icon="mdi-map-marker-radius"
                        outlined
                        rounded
                        class="input-field"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                
                <!-- Step 4: Security -->
                <div v-if="currentStep === 4" class="form-section">
                  <h3 class="section-title">
                    <v-icon>mdi-security</v-icon>
                    Segurança
                  </h3>
                  
                  <v-text-field
                    v-model="form.password"
                    label="Senha *"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    outlined
                    rounded
                    class="input-field"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="form.confirmPassword"
                    label="Confirmar senha *"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    prepend-inner-icon="mdi-lock-check"
                    :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showConfirmPassword = !showConfirmPassword"
                    outlined
                    rounded
                    class="input-field"
                    :rules="confirmPasswordRules"
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
                        e 
                        <a href="#" class="login-link" @click.stop="showPrivacy = true">
                          política de privacidade
                        </a>
                      </div>
                    </template>
                  </v-checkbox>
                </div>
              </v-form>
              
              <!-- Navigation Buttons -->
              <div class="d-flex justify-space-between mt-6">
                <v-btn
                  v-if="currentStep > 1"
                  outlined
                  color="primary"
                  @click="previousStep"
                >
                  <v-icon left>mdi-arrow-left</v-icon>
                  Anterior
                </v-btn>
                <v-spacer v-if="currentStep === 1"></v-spacer>
                
                <v-btn
                  v-if="currentStep < totalSteps"
                  class="register-btn white--text"
                  @click="nextStep"
                  :disabled="!canProceed"
                >
                  Próximo
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
                
                <v-btn
                  v-if="currentStep === totalSteps"
                  class="register-btn white--text"
                  @click="register"
                  :loading="loading"
                  :disabled="!valid || !form.acceptTerms"
                >
                  <v-icon left>mdi-account-plus</v-icon>
                  Criar conta
                </v-btn>
              </div>
              
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
          <p>Aqui ficariam os termos de uso do Smiling Friends...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showTerms = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- Privacy Dialog -->
    <v-dialog v-model="showPrivacy" max-width="600px">
      <v-card>
        <v-card-title>Política de Privacidade</v-card-title>
        <v-card-text>
          <p>Aqui ficaria a política de privacidade do Smiling Friends...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showPrivacy = false">Fechar</v-btn>
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
    
    <!-- Footer -->
    <div class="footer-info">
      <p>2024 - Sunshine - Todos os direitos reservados</p>
      <p>Email: sunshinecorporation@gmail.com | Contato: (86) 9 0000-0000</p>
      <div class="social-icons">
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-whatsapp</v-icon>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      valid: false,
      loading: false,
      showPassword: false,
      showConfirmPassword: false,
      showTerms: false,
      showPrivacy: false,
      showSnackbar: false,
      snackbarMessage: '',
      snackbarColor: 'success',
      
      form: {
        name: '',
        cpf: '',
        birthDate: '',
        email: '',
        phone: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        reference: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
      },
      
      // Validation rules
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length >= 2) || 'Nome deve ter pelo menos 2 caracteres'
      ],
      cpfRules: [
        v => !!v || 'CPF é obrigatório',
        v => (v && v.replace(/\D/g, '').length === 11) || 'CPF deve ter 11 dígitos'
      ],
      birthDateRules: [
        v => !!v || 'Data de nascimento é obrigatória'
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
      ],
      phoneRules: [
        v => !!v || 'Telefone é obrigatório',
        v => (v && v.replace(/\D/g, '').length >= 10) || 'Telefone deve ter pelo menos 10 dígitos'
      ],
      cepRules: [
        v => !!v || 'CEP é obrigatório',
        v => (v && v.replace(/\D/g, '').length === 8) || 'CEP deve ter 8 dígitos'
      ],
      streetRules: [
        v => !!v || 'Logradouro é obrigatório'
      ],
      numberRules: [
        v => !!v || 'Número é obrigatório'
      ],
      neighborhoodRules: [
        v => !!v || 'Bairro é obrigatório'
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v => (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirmação de senha é obrigatória',
        v => v === this.form.password || 'As senhas não coincidem'
      ]
    }
  },
  
  computed: {
    progressPercentage() {
      return (this.currentStep / this.totalSteps) * 100;
    },
    
    canProceed() {
      switch(this.currentStep) {
        case 1:
          return this.form.name && this.form.cpf && this.form.birthDate;
        case 2:
          return this.form.email && this.form.phone;
        case 3:
          return this.form.cep && this.form.street && this.form.number && this.form.neighborhood;
        case 4:
          return this.form.password && this.form.confirmPassword && this.form.acceptTerms;
        default:
          return false;
      }
    }
  },
  
  methods: {
    nextStep() {
      if (this.canProceed && this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    
    async register() {
      if (!this.valid || !this.form.acceptTerms) return;
      
      this.loading = true;
      
      // Simular registro
      setTimeout(() => {
        this.loading = false;
        this.showMessage('Cadastro realizado com sucesso! Bem-vindo ao Smiling Friends!', 'success');
        
        // Redirecionar para login ou dashboard
        setTimeout(() => {
          this.goToLogin();
        }, 2000);
      }, 2000);
    },
    
    goBack() {
      if (this.currentStep > 1) {
        this.previousStep();
      } else {
        this.goToLogin();
      }
    },
    
    goToLogin() {
      this.showMessage('Redirecionando para o login...', 'info');
      // Aqui você redirecionaria para a página de login
      console.log('Redirecionando para login...');
    },
    
    formatCPF() {
      let value = this.form.cpf.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      this.form.cpf = value;
    },
    
    formatPhone() {
      let value = this.form.phone.replace(/\D/g, '');
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
      this.form.phone = value;
    },
    
    formatCEP() {
      let value = this.form.cep.replace(/\D/g, '');
      value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
      this.form.cep = value;
    },
    
    async searchCEP() {
      const cep = this.form.cep.replace(/\D/g, '');
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
          
          if (!data.erro) {
            this.form.street = data.logradouro;
            this.form.neighborhood = data.bairro;
            this.showMessage('CEP encontrado!', 'success');
          }
        } catch (error) {
          console.error('Erro ao buscar CEP:', error);
        }
      }
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  
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
  background-color:#667eea ;
  border: none !important;
  border-radius: 25px !important;
  text-transform: none !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
}
.login-link {
  color: #667eea !important;
  text-decoration: none !important;
  font-weight: 500;
}
.login-link:hover {
  text-decoration: underline !important;
}
.input-field .v-input__control .v-input__slot {
  border-radius: 10px !important;
}
.floating-pets {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
  color: white;
}
.floating-pet {
  position: absolute;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}
.floating-pet:nth-child(1) {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.floating-pet:nth-child(2) {
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}
.floating-pet:nth-child(3) {
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}
.floating-pet:nth-child(4) {
  bottom: 20%;
  right: 10%;
  animation-delay: 1s;
}
.floating-pet:nth-child(5) {
  top: 50%;
  left: 5%;
  animation-delay: 3s;
}
.floating-pet:nth-child(6) {
  top: 60%;
  right: 20%;
  animation-delay: 5s;
}
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
.footer-info {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.8);
  text-align: center;
  font-size: 0.9rem;
  z-index: 10;
  
}
.social-icons {
  margin-top: 10px;
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
.step-indicator {
  margin-bottom: 20px;
}
.step-indicator .v-stepper__step {
  background: transparent !important;
}
.step-indicator .v-stepper__step--active .v-stepper__step__step {
  background: #667eea !important;
}
.form-section {
  margin-bottom: 30px;
  color:black;
}
.section-title {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.progress-bar {
  margin-bottom: 20px;
  
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