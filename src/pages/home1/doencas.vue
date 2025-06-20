<template>
  <div>
    <AppHeader1 />
    <v-main class="main-background">
      <div v-if="currentSection === 'doencas'">
        <v-container class="py-8">
          <h1 class="text-h3 font-weight-bold mb-6 text-black">
            <v-icon class="mr-1" color="#7681f8">mdi-alert</v-icon>
            Guia de Doenças
          </h1>
          <p class="text-body-1 mb-6">
            Conheça as principais doenças que podem afetar seu pet, seus sintomas e como preveni-las.
          </p>

          <!-- Barra de pesquisa -->

          <v-row class="mb-6 ">
            <v-col cols="12" md="6" lg="4">
              <v-text-field
                v-model="searchQuery"
                class="searchBar"
                label="Pesquisar Doenças"
                prepend-inner-icon="mdi-magnify"
                variant= "outlined"
                clearable
                hide-details
                density="comfortable"
                bg-color="grey-lighten-4"

              />
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                color="#667eea"
                prepend-icon="mdi-plus"
                size="large"
                class="px-4"
                block
                @click=""              
            >
              Adicionar Doença

              </v-btn>
            </v-col>
            <v-dialog v-model="showAddDisease" max-width="600">
          <v-card class="card-add-disease">
            <v-card-title class="d-flex justify-space-between align-center">
              <span class="text-h5">Adicionar Nova Doença</span>
              <v-btn icon @click="showAddDisease = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" @submit.prevent="addDisease">
                <v-text-field
                  v-model="newDisease.name"
                  label="Nome da Doença"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newDisease.sintomas"
                  label="Sintomas"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newDisease.grau"
                  label="Grau de Gravidade"
                  required
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="newDisease.prevention"
                  label="Prevenção"
                  required
                  class="mb-4"
                ></v-text-field>

                <v-btn 
                  color="primary" 
                  type="submit" 
                  block 
                  size="large"
                >
                  Adicionar Doença
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>
            <!-- <v-col cols="12" md="6" lg="4">
              <v-select
                v-model="selectedType"
                :items="['Todas', 'Doenças Comuns', 'Doenças Raras']"
                label="Tipo de Doença"
                outlined
                dense
                bg-color="white"
              />
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-select
                v-model="selectedSeverity"  
                :items="['Todas', 'Leve', 'Moderada', 'Grave']"
                label="Gravidade"
                outlined
                dense
                bg-color="white"
              />
            </v-col> -->
          </v-row>    

          <v-row>
            <v-col v-for="disease in diseases" :key="disease.id" cols="12" md="6" lg="4">
              <v-card class="card-disease h-100" elevation="6" rounded="lg">
                <v-card-title class="bg-orange-lighten-4 d-flex align-center py-4">
                  <v-icon color="orange-darken-2" size="28" class="mr-3">mdi-alert</v-icon>
                  <span class="text-h5 font-weight-bold">{{ disease.name }}</span>
                </v-card-title>
                
                <v-card-text class="pa-5">
                  <div class="mb-5">
                    <div class="d-flex align-center mb-2">
                      <v-icon color="orange" class="mr-2">mdi-clipboard-list-outline</v-icon>
                      <h3 class="text-h6 font-weight-medium">Sintomas:</h3>
                    </div>
                    <v-list density="compact" class="bg-transparent">
                      <v-list-item
                        v-for="(symptom, index) in disease.symptoms"
                        :key="index"
                        class="pl-8 text-black"
                      >
                        <template v-slot:prepend>
                          <v-icon color="orange-lighten-1" size="small">mdi-circle-small</v-icon>
                        </template>
                        <v-list-item-title>{{ symptom }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>

                  <div>
                    <div class="d-flex align-center mb-2">
                      <v-icon color="orange" class="mr-2">mdi-shield-check</v-icon>
                      <h3 class="text-h6 font-weight-medium">Prevenção:</h3>
                    </div>
                    <p class="text-body-1 pl-8">
                      {{ disease.prevention }}
                    </p>
                  </div>
                </v-card-text>

                <v-card-actions class="px-4 pb-4 justify-space-between">
                  <!-- <v-btn
                    color="orange-darken-2"
                    variant="outlined"
                    prepend-icon="mdi-information"
                    size="small"
                    class="px-4"
                  >
                    Detalhes
                  </v-btn> -->
                  <v-btn
                    color="orange-darken-2"
                    prepend-icon="mdi-hospital-building"
                    size="small"
                    class="px-4"
                    variant="outlined"
                  >
                    Buscar Clínica
                  </v-btn>

                    <v-btn
                    color="orange-darken-2"
                    prepend-icon="mdi-square-edit-outline"
                    size="small"
                    class="px-4"
                    >
                      Editar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
    <AppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'doencas',
      searchQuery: '',
      showAddDisease: false,
      diseases: [
        {
          id: 1,
          name: 'Alergia Alimentar',
          symptoms: ['Coceira excessiva', 'Problemas digestivos', 'Irritação na pele'],
          prevention: 'Evite alimentos com ingredientes alergênicos conhecidos e mantenha uma dieta equilibrada.'
        },
        {
          id: 2,
          name: 'Dermatite',
          symptoms: ['Vermelhidão na pele', 'Descamação', 'Coceira intensa'],
          prevention: 'Mantenha a higiene adequada e use produtos específicos para pets.'
        },
        {
          id: 3,
          name: 'Parasitas Intestinais',
          symptoms: ['Diarreia', 'Vômitos', 'Perda de peso'],
          prevention: 'Vermifugação regular e cuidados com a alimentação.'
        },
      ]
    }
  },
  methods: {
    getPhrase(item, key) {
      return item?.phrases?.[key] || 'Informação não disponível';
    },
  },

  
};
</script>

<style scoped>
.main-background {
  background-color: white;
  min-height: 100vh;
}
.card-disease{
  background-color: white;
  /* width: px; */
}
/* Estilos adicionais para melhorar a aparência */
.v-card-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.searchBar {
  background-color: #f5f5f5;
  border-radius: 8px;
}
.v-list-item {
  min-height: 36px;
}

.text-h6 {
  color: #424242;
}

.text-body-1 {
  color: #616161;
}
</style>  