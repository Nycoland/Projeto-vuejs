<template>
  <AppHeader></AppHeader>
    <div class="total"> 
    <v-form v-model="valid">
      <v-sheet class="background">
        
        <div class="square">
         
        <v-container class="mt-10">
          <v-container class="text-left ">
          
            <!-- cadastro -->

            <h2>CADASTRO ALIADO</h2>
      </v-container>
          <v-row justify="center">
            <v-col
            cols="12"
            
            
            >
            <v-text-field
            v-model="nomecompleto"
            :counter="10"
            :rules="nameRules"
            label="Nome Completo"
            rounded
            
            color=white
            class="campo-nome1"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="cpf"
            :counter="13"
            :rules="cpfRules"
            label="CPF"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="datadenascimento"
            :counter="10"
            :rules="dateRules"
            label="Data de nascimento"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            
            
            >
            <v-text-field
            v-model="email"
            :counter="100"
            :rules="emailRules"
            label="E-mail"
            type="email"
            rounded
            color=white
            class="campo-nome1"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="senha"
            :counter="100"
            :rules="senhaRules"
            type="password"
            label="Senha"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="confSenha"
            :counter="100"
            :rules="confsenhaRules"
            type="password"
            label="Confirmação de senha"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            
            
            >
            <v-text-field
            v-model="celular"
            :counter="11"
            :rules="celularRules"
            label="Celular"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>

          <v-container>
          <v-container class="text-left ">
         
          <!-- endereco -->

            <h2>ENDEREÇO</h2>
      </v-container>
          <v-row justify="center">
           
            <v-col
            cols="12"
            
            
            >
            <v-text-field
            v-model="bairro"
            :counter="100"
            :rules="bairroRules"
            label="Bairro"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="CEP"
            :counter="7"
            :rules="cepRules"
            label="CEP"
            rounded
            color=white
            class="campo-nome1"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="numero"
            :counter="10"
            :rules="numeroRules"
            label="Número"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            
            
            >
            <v-text-field
            v-model="logradouro"
            :counter="100"
            :rules="logradouroRules"
            label="Logradouro"
            rounded
            color=white
            class="campo-nome1"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="referencia"
            :counter="100"
            :rules="refRules"
            label="Referencia"
            rounded
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            
            >
            <v-text-field
            v-model="complemento"
            :counter="100"
            :rules="complementoRules"
            label="Complemento"
            rounded
            
            color=white
            class="campo-nome"
            ></v-text-field>
          </v-col>
          <v-btn class="submit-bnt mt-3" type="submit" v-size="small">Cadastrar</v-btn>
          
        </v-row>
          </v-container>
            </v-row>
          </v-container>
        </div>
      </v-sheet>
  </v-form>
</div> 
  <AppFooter></AppFooter>
    </template>
<script setup>
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';

const nomeCompleto = ref();
const cpf = ref();
const dataNascimento = ref();
const email = ref();
const senha = ref();
const confSenha = ref();
const celular = ref();
const bairro = ref();
const cep = ref();
const numero = ref();
const logradouro = ref();
const referencia = ref();
const complemento = ref();
const visivel = ref(false);

const snackbar = ref(false);
const text = ref();
const router = useRouter();

async function add(){
    try{
        const {data, error} = await supabase.auth.signUp({
            email: email.value,
            password: senha.value
        });
        if (error){
            console.error("Erro ao cadastrar usuário:", error.message);
            text.value = "Erro ao cadastrar usuário:" + error.message;
            snackbar.value = true;
            return;
        }
        const {error: profileError} = await supabase
        .from("profiles")
        .insert([
            {
                id: data.user.id,
                nomeCompleto: nomeCompleto.value,
                cpf: cpf.value,
                dataNascimento: dataNascimento.value,
                celular: celular.value,
                bairro: bairro.value,
                cep: cep.value,
                numero: numero.value,
                logradouro: logradouro.value,
                referencia: referencia.value,
                complemento: complemento.value
            }
        ]);
        if (profileError){
            console.error("Erro ao cadastrar perfil:", profileError.message);
            text.value = "Erro ao cadastrar perfil:" + profileError.message;
            snackbar.value = true;
            return;
        }
        nomeCompleto.value = '';
        cpf.value = '';
        dataNascimento.value = '';
        celular.value = '';
        bairro.value = '';
        cep.value = '';
        numero.value = '';
        logradouro.value = '';
        referencia.value = '';
        complemento.value = '';
        email.value = '';
        senha.value = '';
        confSenha.value = '';

        text.value = " Cadastrado com sucesso!!";
        snackbar.value = true;

        setTimeout(() => {
            router.push("/login");
        }, 1000);
    } catch(error){
        console.error("Erro inesperado ao cadastrar:", error);
        text.value = "Erro:" + error.message;
        snackbar.value = true;
    }
}
onMounted(() => {});
</script>

<style scoped>

    .background{
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color:  #ffcbef;
  }

  .square{
        margin-bottom: 20px;
        margin-top:50px;
        font-size: 16px;
        border-radius: 10px;
        background-color: #ffffff;
        color: #ffcbef;
        box-sizing: border-box;
        width: 900px;
        height: 1150px;
        align-items: center;
        display:flex;
        padding: 8px 12px 60px;
    
    }
  html,body{
    height: 100%;
    
  }
  .submit-bnt {
        background-color: #ffcbef;
        color: #000000;
        font-weight: bold;
        border-radius: 16px;
        border: solid 1.5px;
        border-color: #000000;

        height: 30px;

  }
  .submit-bnt:hover {
        background-color: #ca399e;
    }
    .mt-10 {
  margin-top: 40px;
  color: #000000;
}


</style>