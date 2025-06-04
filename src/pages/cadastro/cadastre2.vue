<template>
    <AppHeader></AppHeader>
      <div class="total"> 
      <v-form v-model="valid">
        <v-sheet class="background">
          
          <div class="square">
           
          <v-container class="mt-10">
            <v-container class="text-left ">
              <h2 >Caso voce queira somente adotar um amiguinho, clique em Adotante.</h2>
              <v-switch 
              v-model="model"
              :label="`Switch: ${model.toString()}`">
              false-value="no"
              true-value="yes"
              hide-details
              inset
              </v-switch>
              <!-- cadastro  -->
  
              <h2>DADOS DA ONG</h2>
        </v-container>
            <v-row justify="center">
                <v-col
              cols="12"
              md="6"
              
              >
              <v-text-field
              v-model="rsocial"
              :counter="100"
              :rules="rsocialRules"
              label="Razão Social"
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
              v-model="aemail"
              :counter="100"
              :rules="aemailRules"
              label="E-mail"
              type="email"
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
              v-model="telefone"
              :counter="10"
              :rules="telefoneRules"
              label="Telefone"
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
              v-model="acelular"
              :counter="10"
              :rules="atelefoeRules"
              label="Telefone"
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
              v-model="cnpj"
              :counter="20"
              :rules="cnpjRules"
              label="CNPJ"
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
              v-model="ie"
              :counter="20"
              :rules="ieRules"
              label="IE (Inscrição Estadual)"
              rounded
              color=white
              class="campo-nome"
              ></v-text-field>
            </v-col>
                <!-- cadastro do aliado -->
              <v-container>
              <v-container class="text-left">
                  
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
            </v-row>
        </v-container>
                <!-- endereco -->
            <v-container>
            <v-container class="text-left ">
            
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
            <v-btn class="submit-bnt mt-3" type="submit" v-size="small" to="/home1">Cadastrar</v-btn>
            
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
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
  
    export default {
      data: () => ({
        model:'yes',
        valid: false,
        nomecompleto: '',
        nameRules: [
          value => {
            if (value) return true
            
            return 'Nome completo é necessário'
          },
          value => {
            if (value?.length <= 10) return true
            
            return 'Nome precisa ter pelo menos 10 letras.'
          },
        ],
        senha:'',
        senhaRules: [
          value => {
            if (value) return true
            
            return 'Senha é nessecária'
          },
          value => {
            if (value?.length <= 10) return true
            
            return 'A senha precisa ter pelo menos 10 caracteres.'
          },
        ],
        confSenhasenha:'',
        confsenhaRules: [
          value => {
            if (value) return true
            
            return 'Confirme a senha.'
          },
          value => {
            if (value?.length <= 10) return true
            
            return 'A senha precisa ser a mesma.'
          },
        ],
        email: '',
        emailRules: [
          value => {
            if (value) return true
  
            return 'E-mail é necessário.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true
  
            return 'E-mail precisa ser válido.'
          },
        ],
      }),
    }
  
  
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
          height: 1660px   ;
          align-items: center;
          display:flex;
          padding: 8px 12px 50px;
      
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
-->