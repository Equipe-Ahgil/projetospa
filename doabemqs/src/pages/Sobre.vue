<template>
  <q-page>
    <!-- page content -->
    <div class="container">
      <div class="header">
        <HeaderSobre/>
      </div>

      <div class="conteudo">

      </div>
    </div>
  </q-page>
</template>

<script>
import HeaderSobre from 'components/HeaderSobre.vue'

export default {
  name: 'sobre',
  components: { HeaderSobre },
  data () {
    return {}
  }
}
</script>
