<template>
<div class="container__form">

  <div class="title_form">
    <p>Cadastro Pessoa Fisica</p>
  </div>

  <div class="forms">
    <div class="form__descrincao">
      <p>Indentificação</p>
    </div>
    <q-form class="q-forms" method="post" @submit="onSubmit">
      <q-input
      label="Seu nome completo *"
      hint="Nome Completo"
      />

      <q-input
      label="Telefone *"
      mask="(##) ##### - ####"
      hint="Numero de Telefone"
      />

      <q-input
      label="E-mail *"
      hint="E-mail Valido"
      />

      <div class="fomr-sex q-gutter-sm">
        <p>Sexo</p>
        <q-radio v-model="shape" val="line" label="Masculino" />
        <q-radio v-model="shape" val="rectangle" label="Feminino" />
      </div>

      <q-input
      label="CPF *"
      hint="Numero de CPF"
      mask="###.###.###-##"
      />

      <q-input
      label="RG *"
      hint="Carteira de Indentidade"
      mask="#.###.###"
      />

      <q-select v-model="Orgao_" :options="O_options"  hint="Orgão Expedidor *" label="Orgão Expedidor"/>

      <q-input v-model="data"
      type="date"
      hint="Data de Nascimento">
      </q-input>

      <div class="form__Estado">

        <div class="form__descrincao">
          <p>Endereço</p>
        </div>

        <q-select v-model="Cidade_" :options="C_options"  hint="Cidade *" label="Cidade"/>

        <q-input
        label="Estado *"
        hint="Estado"
        />

        <q-input
        label="CEP *"
        hint="CEP"
        />

        <q-input
        label="Lagadouro *"
        hint="Lagadouro"
        />

        <q-input
        label="Complemento *"
        hint="Complemento"
        />

        <q-input
        label="Numero *"
        hint="Numero"
        />

        <q-input
        label="Bairro *"
        hint="Bairro"
        />

        <q-select v-model="Pais_" :options="options"  hint="Pais"/>

      </div>
      <div class="boton_cadastrar" padding vertical align="right">
        <q-btn color="secondary" label="Cadastrar" @submit="onSubmit"/>
      </div>
    </q-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro',
  data () {
    return {
      shape: 'line',
      data: '',
      Pais_: null,
      options: [
        'Brasil'
      ],
      Cidade_: null,
      C_options: [
        'Recife', 'Olinda'
      ],
      Orgao_: null,
      O_options: [
        'SDS', 'SSC'
      ]
    }
  },

  methods: {
    onSubmit (evt) {
      console.log('@submit - do something here', evt)

      evt.target.submit()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&display=swap');

.container__form {
    margin: auto;
    width: 70vw;
}

.boton_cadastrar{
  padding:20px;
}

.forms{
    padding-right: 50px;
    padding-left: 50px;
    padding-top:50px;
    padding-bottom: 20px;
    background: white;
    border-radius: 5px;
}

.title_form p{
  padding: 30px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;

  /* Cor textos */

  color: #14213D;
}

.form__descrincao{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height, or 104% */

  letter-spacing: 0.01em;

  /* Cor textos */

  color: #14213D;
}

.q-input{
padding-top: 20px;
padding-bottom: 20px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;
/* or 125% */

letter-spacing: 0.01em;
color: #000000;
}

.form__Estado{
    padding-top: 60px;
}

.fomr-sex{
  padding:20px;
}

</style>
