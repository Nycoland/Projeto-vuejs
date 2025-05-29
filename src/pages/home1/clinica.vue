<template>
  
  <AppHeader2></AppHeader2>
  <v-main class="main-background">
  <v-data-iterator
    :items="desserts"
    item-value="name"
  >

    <template v-slot:default="{ items, isExpanded, toggleExpand }">
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.raw.name"
          cols="12"
          md="6"
          sm="12"
        >
          <v-card class="card1">
            <v-card-title class="d-flex align-center">
          

              <h4>{{ item.raw.name }}</h4>
            </v-card-title>

            <v-card-text class="texto">
              {{ item.raw.description }}
            </v-card-text>

            <div class="px-4">
              <v-switch
                :label="`${isExpanded(item) ? 'Ver menos' : 'Sintomas'}`"
                :model-value="isExpanded(item)"
                density="compact"
                inset
                color="#ca399e"
                @click="() => toggleExpand(item)"
              ></v-switch>
            </div>

            <v-divider></v-divider>

            <v-expand-transition>
              <div v-if="isExpanded(item)">
                <v-list :lines="false" density="compact" class="lista">
                  <v-list-item :title="`- ${item.raw.calories}`" active></v-list-item>
                  <v-list-item :title="`- ${item.raw.fat}`"></v-list-item>
                  <v-list-item :title="`🍞 Carbs: ${item.raw.carbs}`"></v-list-item>
                  <v-list-item :title="`🍗 Protein: ${item.raw.protein}`"></v-list-item>
                  <v-list-item :title="`🧂 Sodium: ${item.raw.sodium}`"></v-list-item>
                  <v-list-item :title="`🦴 Calcium: ${item.raw.calcium}`"></v-list-item>
                  <v-list-item :title="`🧲 Iron: ${item.raw.iron}`"></v-list-item>
                </v-list>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</v-main>
<AppFooter></AppFooter>
</template>
<script>
  export default {
    data: () => ({
      desserts: [
        {
          name: 'ALERGIAS',
          description: 'A alergia alimentar é uma resposta imunológica exacerbada do sistema imune do animal a uma determinada substância presente em alimentos, podendo causar ferimentos na pele, quadros gastrointestinais, como diarreia, e com risco de morte.',
          color: '#6EC1E4',
          calories: 1,
          fat: 6,
          carbs: 24,
          protein: 4,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Depressão',
          description: 'Um clássico para situações que afetam o comportamento do animal, requerendo cuidado e atenção do tutor e de um profissional.',
          icon: 'mdi-cookie',
          color: '#F4A261',
          calories: 237,
          fat: 9,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Insuficiência Renal',
          description: 'Uma condição médica em que os rins não conseguem filtrar os resíduos do sangue de forma eficiente',
          icon: 'mdi-cake-variant',
          color: '#6D4C41',
          calories: 262,
          fat: 16,
          carbs: 23,
          protein: 6,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Doença do carrapato',
          description: 'Uma infecção causada por parasitas transmitidos por carrapatos. Pode causar febre, anemia e em casos graves levar à morte',
          color: '#FFADAD',
          icon: 'mdi-cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
        },
      ],
    }),
  }
</script>
<style scoped>

.main-background{
    background-color: #ffcbef;
    height: 100vh;
}
.card1{
  background-color: white;
  color:black;
  font-size: 18px;
}
.lista{
  background-color: white;
  color: black ;
  
}
.texto{
  font-size: 18px;
  
}
</style>
