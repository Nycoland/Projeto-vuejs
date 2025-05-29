<template>
  <AppHeader2></AppHeader2>
  <v-main class="main-background">
    <v-data-iterator :items="doencas" item-value="name">
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
                  <v-list :lines="false" density="default" class="lista">
                    <v-list-item
                      v-for="(phraseKey, index) in Object.keys(item.phrases)"
                      :key="index"
                      :title="getPhrase(item, phraseKey)"
                      :active="index === 0"
                    ></v-list-item>
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
    doencas: [
      {
        name: 'ALERGIAS',
        description:
          'A alergia alimentar é uma resposta imunológica exacerbada do sistema imune do animal a uma determinada substância presente em alimentos, podendo causar ferimentos na pele, quadros gastrointestinais, como diarreia, e com risco de morte.',
        phrases: {
          sin1: 'Pode causar irritação na pele.',
          sin2: 'Alergias podem levar a quadros gastrointestinais graves.',
          sin3: 'Manter controle da dieta é essencial.',
          sin4: 'Necessário evitar alimentos que causem alergia.',
          sin5: 'Monitorar sinais de anafilaxia.',
          sin6: 'Consultar veterinário é essencial.',
          sin7: 'Cuidado com exposição prolongada ao alérgeno.',
        },
      },
      {
        name: 'Depressão',
        description:
          'Um clássico para situações que afetam o comportamento do animal, requerendo cuidado e atenção do tutor e de um profissional.',
        phrases: {
          sin1: 'Mudança no comportamento do animal.',
          sin2: 'Apatia ou falta de interesse em brincar.',
          sin3: 'Perda de apetite pode ser um sinal.',
          sin4: 'Isolamento social observado no animal.',
          sin5: 'Consultar veterinário para diagnóstico.',
          sin6: 'Terapia ou medicamentos podem ser necessários.',
          sin7: 'Requer atenção e cuidado do tutor.',
        },
      },
      {
        name: 'Insuficiência Renal',
        description:
          'Uma condição médica em que os rins não conseguem filtrar os resíduos do sangue de forma eficiente.',
        phrases: {
          sin1: 'Dificuldade para urinar.',
          sin2: 'Presença de sangue na urina.',
          sin3: 'Letargia e fraqueza no animal.',
          sin4: 'Vômitos frequentes podem ocorrer.',
          sin5: 'Manter hidratação adequada.',
          sin6: 'Acompanhamento veterinário regular é crucial.',
          sin7: 'Pode levar a complicações sérias se não tratada.',
        },
      },
      {
        name: 'Doença do carrapato',
        description:
          'Uma infecção causada por parasitas transmitidos por carrapatos. Pode causar febre, anemia e em casos graves levar à morte.',
        phrases: {
          sin1: 'Febre persistente é um sintoma comum.',
          sin2: 'Perda de apetite e letargia.',
          sin3: 'Pode causar anemia grave.',
          sin4: 'Sinais de sangramento precisam de atenção.',
          sin5: 'Remoção imediata do carrapato é essencial.',
          sin6: 'Tratamento com medicamentos específicos.',
          sin7: 'Evitar áreas infestadas por carrapatos.',
        },
      },
    ],
  }),
  methods: {
    getPhrase(item, key) {
      return item?.phrases?.[key] || 'Informação não disponível';
    },
  },
};
</script>

<style scoped>
.main-background {
  background-color: #ffcbef;
  height: 120vh;
}
.card1 {
  background-color: white;
  color: black;
  font-size: 18px;
}
.lista {
  background-color: white;
  color: black;
}
.texto {
  font-size: 18px;
}
</style>
