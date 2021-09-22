<template>
  <div :class="{ 'page': true, [klasse]: klasse }">
    <header class="page-header columns">
      <div class="logo">
        <nuxt-link to="/">
          <img src="../assets/img/2030watch_logo_white.png" alt="2030Watch Logo"> <span>Modellprojekt</span>
        </nuxt-link>
      </div>
      <nav class="page-nav">
        <ul>
          <li><nuxt-link to="/projekt">Das Projekt</nuxt-link></li>
          <li><nuxt-link to="/methodik">Methodik</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="page-content">
      <div class="page-info">
        Das Modellprojekt 2030Watch ist ein zivilgesellschaftliches SDG-Monitoringkonzept, welches den realen 
        Umsetzungsstand der SDGs in Deutschland beleuchtet. Hierfür stellt es die Daten des offiziellen SDG-Monitoring 
        Deutschlands, eigenen, teils zivilgesellschaftlich entwickelten und erhobenen Daten und Indikatoren gegenüber. 
        Die Gegenüberstellung der Ergebnisse zeigt, wie unterschiedlich der Umsetzungsstand der SDGs, je nach Auswahl 
        von Daten und Indikatoren, bewertet werden kann. Das Modellprojekt ist seit 2018 beendet, weshalb die Daten auf 
        dieser Seite nicht weiter aktualisiert werden.
      </div>
      <div class="button-wrapper">
        <a class="btn btn-download" href="http://2030watch.de" target="_blank" title="2030watch.de">
          Zur Hauptseite
        </a>
      </div>
      <nuxt/>
    </div>
    <Explainer />
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Explainer from '~/components/Explainer.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    computed: {
      ...mapState([
        'data'
      ]),
      klasse () {
        if (typeof this.$route.params.sdg !== 'undefined') {
          return this.$route.params.sdg
        }
        if (typeof this.$route.params.indicator !== 'undefined') {
          return this.data[this.$route.params.indicator]['sdg']['slug']
        }
      }
    },
    components: {
      Footer,
      Explainer
    }
  }
</script>

<style lang="scss" scoped>
  .page-nav > ul{
    padding: 0;
  }
  
  .page-info {
    margin: 0 auto 0;
    width: 80vw;
    font-size: 22px;
    padding: 20px 0;
    font-weight: bold;
    text-align: left;
  }

  .button-wrapper {
    text-align: center;
    margin: 0 auto 0;
    width: 80vw;
    margin-bottom: 25px;
  }
</style>
