<template>
<div>
  <div class="container_footer">
        <div class="row_footer">
          <div>
            <ul>
              <li><p>Transparência</p></li>
              <li>Empresa parceira</li>
              <li>Ajuda</li>
              <li>Voluntários</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><p>Links uteis</p></li>
              <li>Sua conta</li>
              <li>Relatórios</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div>
            <ul>
              <li><p>Contato</p></li>
              <li>Sua conta</li>
              <li>Relatórios</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-icons">
          <a href="#"><img src="../assets/instagram.svg" alt="Instagram"></a>
          <a href="#"><img src="../assets/facebook.svg" alt="Facebook"></a>
          <a href="#"><img src="../assets/youtube.svg" alt="Youtube"></a>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style lang="stylus">

.q-footer{
    height: 180px;
    background-color: $laranja;
}

.q-footer ul, li, a{
    list-style: none;
    text-decoration: none;
}

.container_footer{
    margin: 0 15% 0 15%; //FUNCIONA NÃO MEXE
}

.row_footer{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.footer-links{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: $larajuro;
    height: auto;
}

.footer-icons img {
    height: 46px;
    width : 46px;
    padding-right: 12px;
}

</style>
