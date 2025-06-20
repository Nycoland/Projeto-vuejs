<template>
  <div>
    <AppHeader1 />
    <v-main class="main-background">
      <div class="py-4"></div>
      <v-container>
        <!-- Cabeçalho -->
        <v-row class="mb-2">
          <v-col cols="12">
            <div class="d-flex align-center">
              <v-icon class="mr-3" size="40" color="#7681f8">mdi-hospital-building</v-icon>
              <h1 class="text-h3 font-weight-bold text-grey-darken-4">Clínicas Veterinárias</h1>
            </div>
            <v-divider class="my-4"></v-divider>
          </v-col>
        </v-row>

        <!-- Barra de pesquisa e botão -->
        <v-row class="mb-6">
          <v-col cols="12" md="8">
            <v-text-field
              v-model="searchQuery"
              class="seachBar"
              prepend-inner-icon="mdi-magnify"
              label="Buscar clínicas..."
              variant="outlined"
              clearable
              hide-details
              density="comfortable"
              bg-color="grey-lighten-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4"> 
            <v-btn 
              color="#667eea" 
              size="large" 
              block 
              @click="showAddClinic = true"
              prepend-icon="mdi-plus"
            >
              Adicionar clínica
            </v-btn>  
          </v-col>
        </v-row>

        <!-- Lista de clínicas -->
        <v-row>
          <v-col 
            v-for="clinic in filteredClinics" 
            :key="clinic.id" 
            cols="12" 
            md="6" 
            lg="4"
          >
            <v-card class="clinic-card h-100" elevation="6" rounded="lg">
              <v-img 
                :src="clinic.image || ''" 
                height="250" 
                cover
                gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height bg-grey-lighten-3">
                    <v-icon size="60" color="grey">mdi-hospital-building</v-icon>
                  </div>
                </template>
                <v-card-title class="text-white text-h5 font-weight-bold pt-6 px-4">
                  {{ clinic.name }}
                </v-card-title>
              </v-img>
              <v-card-text>
                <p>{{ clinic.id }}</p>
              </v-card-text>
              <v-card-text class="pa-4">
                <div class="d-flex align-center mb-3">
                  <!-- <v-rating
                    v-model="clinic.rating"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                    class="mr-2"
                  ></v-rating> -->
                  <!-- <span class="text-body-1 text-grey-darken-2">
                    ({{ clinic.rating }})
                  </span> -->
                </div>
                
                <div class="d-flex align-center mb-3">
                  <v-icon class="text-primary mr-2">mdi-map-marker-outline</v-icon>
                  <span class="text-body-1 text-grey-darken-2">{{ clinic.location }}</span>
                </div>
                
                <!-- <p class="text-body-1 text-grey-darken-3 mb-0">
                  {{ clinic.description }}
                </p>  -->
              </v-card-text> 
              
              <v-card-actions class="px-4 pb-4">
                <v-btn 
                  color="primary" 
                  variant="outlined" 
                  size="large"
                  block
                  prepend-icon="mdi-information-outline"
                  class="mr-2"
                >
                  Sobre
                </v-btn>
                <v-btn 
                  color="success" 
                  size="large"
                  block
                  prepend-icon="mdi-phone"
                >
                  Contato
                </v-btn>
              </v-card-actions> 
            </v-card>
          </v-col>
        </v-row>

        <!-- Diálogo para adicionar clínica -->
        <v-dialog v-model="showAddClinic" max-width="600">
          <v-card>
            <v-card-title class="d-flex justify-space-between align-center">
              <span class="text-h5">Adicionar Nova Clínica</span>
              <v-btn icon @click="showAddClinic = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" @submit.prevent="addClinic">
                <v-text-field
                  v-model="newClinic.name"
                  label="Nome da Clínica"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newClinic.location"
                  label="Endereço"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newClinic.email"
                  label="E-mail"
                  required
                  :rules="emailRules"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="newClinic.phone"
                  label="Telefone"
                  required
                  :rules="phoneRules"
                  @blur="formatPhone"
                  class="mb-4"
                ></v-text-field>

                <v-file-input
                  v-model="newClinic.imageFile"
                  label="Imagem da Clínica"
                  prepend-icon="mdi-camera"
                  accept="image/*"
                  ref="fileInput" 
                  class="mb-4"
                ></v-file-input>


                
                <v-btn 
                  color="primary" 
                  type="submit" 
                  block 
                  size="large"
                >
                  Adicionar Clínica
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clinics: [], // Inicializado como array vazio
      searchQuery: '',
      showAddClinic: false,
      loading: false,
      newClinic: {
        name: '',
        email: '',
        location: '',
        phone: '',
        // rating: 0, 
        image: null,
        imageFile: null
      },
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
      ],
      phoneRules: [
        v => !!v || 'Telefone é obrigatório',
        v => (v && v.length >= 11) || 'Telefone deve ter pelo menos 10 dígitos'
      ]
    };
  },

  computed: {
    filteredClinics() {
      if (!this.searchQuery) return this.clinics;

      const query = this.searchQuery.toLowerCase();
      return this.clinics.filter(clinic =>
        clinic.name?.toLowerCase().includes(query) ||
        clinic.location?.toLowerCase().includes(query) ||
        clinic.description?.toLowerCase().includes(query)
      );
    },
  },

  mounted() {
    this.fetchClinics();
  },

  methods: {
async fetchClinics() {
  try {
    this.loading = true;
    const response = await axios.get('http://127.0.0.1:8000/api/clinicas');
    
    console.log('Resposta completa da API:', response); // Debug
    
    // Verificação profunda dos dados
    if (!response || !response.data) {
      throw new Error('Resposta inválida da API');
    }
        try {
      // Verifica se há dados no localStorage
      const cachedClinics = localStorage.getItem('cachedClinics');
      if (cachedClinics) {
        this.clinics = JSON.parse(cachedClinics);
      }

      const response = await axios.get('http://127.0.0.1:8000/api/clinicas');
      this.clinics = response.data;
      
      // Salva no localStorage
      localStorage.setItem('cachedClinics', JSON.stringify(this.clinics));
      
    } catch (error) {
      console.error("Erro:", error);
    }
  
    // Mapeamento seguro com fallbacks
    this.clinics = (Array.isArray(response.data) ? response.data : [response.data]
      .map(clinic => ({
        id: clinic.id || null,
        name: clinic.nome || 'Clínica sem nome',
        email: clinic.email || '',
        location: clinic.endereco ||'',
        phone: clinic.telefone || '',
        image: this.getImageUrl(clinic.image) // Função para tratar URLs de imagem
      })));

    console.log('Clínicas processadas:', this.clinics);// Debug

  } catch (error) {
    console.error("Erro detalhado:", error);
    this.$toast.error('Erro ao carregar clínicas');
    this.clinics = [];
  } finally {
    this.loading = false;
  }
},

  getImageUrl(imagePath) {
    if (!imagePath) return null;
    // Se for um caminho local, transforma em URL completa
    if (imagePath.startsWith('/tmp/') || imagePath.startsWith('storage/')) {
      return `http://127.0.0.1:8000/${imagePath}`;
    }
    return imagePath;
  },
  // ... outros métodos

    formatPhone() {
      if (this.newClinic.phone) {
        this.newClinic.phone = this.newClinic.phone.replace(/\D/g, '');
      }
    },

   async addClinic() {
     try {
       // Validação do formulário
       if (!this.$refs.form || !(await this.$refs.form.validate())) {
         return;
       }
       
       this.loading = true;
       
       const formData = new FormData();
       formData.append('name', this.newClinic.name);
       formData.append('email', this.newClinic.email);
       formData.append('location', this.newClinic.location);
       formData.append('phone', this.newClinic.phone);
       
       if (this.newClinic.imageFile) {
         formData.append('image', this.newClinic.imageFile);
       }

       const response = await axios.post('http://127.0.0.1:8000/api/clinicas', formData, {
         headers: {
           'Content-Type': 'multipart/form-data'
         }
       });

       // Adiciona a nova clínica à lista
       this.clinics.push(response.data);
       
       // Atualiza a lista de clínicas
       await this.fetchClinics(); // Chame a função para atualizar a lista
       
       this.closeDialog();
      //  this.$toast.suc('Clínica adicionada com sucesso!');
     } catch (error) {
       console.error("Erro ao adicionar clínica:", error);
       this.$toast.error('Erro ao adicionar clínica');
     } finally {
       this.loading = false;
     }
   },
   
    closeDialog() {
      this.showAddClinic = false;
      if (this.$refs.form) {
        this.$refs.form.reset();
      }
      // Limpa o input de arquivo manualmente
      this.newClinic = {
        name: '',
        email: '',
        location: '',
        phone: '',
        // description: '',
        // rating: 0,
        image: null,
        imageFile: null
      };
    },

    showClinicDetails(clinic) {
      // Implemente a navegação ou diálogo de detalhes
      this.$toast.info(`Detalhes da clínica ${clinic.name}`);
      // this.$router.push(`/clinicas/${clinic.id}`);
    },

    contactClinic(clinic) {
      // Implemente a lógica de contato
      this.$toast.info(`Contatando clínica ${clinic.name}`);
      // window.location.href = `tel:${clinic.phone}`;
    }
  },
};
</script>

<style scoped>
.main-background {
  background-color: #f5f7fa;
}

.clinic-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
}

.clinic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.searchBar {
  background-color: white;
  border-radius: 8px;
}

.v-card-title {
  word-break: break-word;
}
</style>