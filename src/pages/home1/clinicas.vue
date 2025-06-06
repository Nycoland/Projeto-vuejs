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
              class="barra-pesquisa"
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
              color="primary" 
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
                <p>ID:{{ clinic.id }}</p>
              </v-card-text>
              <v-card-text class="pa-4">
                <div class="d-flex align-center mb-3">
                  <v-rating
                    v-model="clinic.rating"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                    class="mr-2"
                  ></v-rating>
                  <span class="text-body-1 text-grey-darken-2">
                    ({{ clinic.rating.toFixed(1) }})
                  </span>
                </div>
                
                <div class="d-flex align-center mb-3">
                  <v-icon class="text-primary mr-2">mdi-map-marker-outline</v-icon>
                  <span class="text-body-1 text-grey-darken-2">{{ clinic.location }}</span>
                </div>
                
                <p class="text-body-1 text-grey-darken-3 mb-0">
                  {{ clinic.description }}
                </p> 
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
              <v-form @submit.prevent="addClinic">
                <v-text-field
                  v-model="newClinic.name"
                  label="Nome da Clínica"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newClinic.location"
                  label="Localização"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-textarea
                  v-model="newClinic.description"
                  label="Descrição"
                  rows="2"
                  class="mb-4"
                ></v-textarea>
                
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
export default{
  data(){
    return {
      clinics: []
    }
  },

  mounted(){
    this.fetchClinics()
  },

  methods: {
    async fetchClinics() {
      try{
        const response = await fetch('http://127.0.0.1:8000/clinicas')
        const data = await response.json()
        
        this.clinics = data

        console.log("fucionou tlgd", data)
      }catch(error){
        console.error("ops", error)
      }
    }
  }

}





// import { ref, computed } from 'vue';

// const searchQuery = ref('');
// const showAddClinic = ref(false);
// const newClinic = ref({
//   name: '',
//   location: '',
//   description: '',
//   rating: 0,
//   image: null
// });

// const clinics = ref([
//   {
//     id: 1,
//     name: 'Clínica Veterinária Popular CVP',
//     location: 'Centro, Teresina-PI',
//     rating: 4.5,
//     description: 'Atendimento veterinário completo com preços acessíveis.',
//     image: 'https://lh3.googleusercontent.com/p/AF1QipMIirvnLWiCFKBvVjSlWbeTXMjayx_3K_ht4x8p=s680-w680-h510-rw'
//   },
//   {
//     id: 2,
//     name: 'Pet Care Hospital',
//     location: 'Jóquei, Teresina-PI',
//     rating: 4.8,
//     description: 'Clínica especializada em cuidados avançados para pets.',
//     image: 'https://source.unsplash.com/random/600x400/?animal,hospital'
//   },
//   {
//     id: 3,
//     name: 'Vet Center',
//     location: 'Noivos, Teresina-PI',
//     rating: 4.2,
//     description: 'Atendimento 24 horas com equipe especializada.',
//     image: 'https://source.unsplash.com/random/600x400/?pet,clinic'
//   }
// ]);

// const filteredClinics = computed(() => {
//   if (!searchQuery.value) return clinics.value;
//   const query = searchQuery.value.toLowerCase();
//   return clinics.value.filter(clinic => 
//     clinic.name.toLowerCase().includes(query) || 
//     clinic.location.toLowerCase().includes(query) ||
//     clinic.description.toLowerCase().includes(query)
//   );
// });

// function addClinic() {
//   const newId = Math.max(...clinics.value.map(c => c.id)) + 1;
//   clinics.value.push({
//     id: newId,
//     name: newClinic.value.name,
//     location: newClinic.value.location,
//     description: newClinic.value.description,
//     rating: 0,
//     image: null
//   });
  
//   // Reset form
//   newClinic.value = {
//     name: '',
//     location: '',
//     description: '',
//     rating: 0,
//     image: null
//   };
  
//   showAddClinic.value = false;
// }
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

.barra-pesquisa {
  background-color: white;
  border-radius: 8px;
}

.v-card-title {
  word-break: break-word;
}
</style>