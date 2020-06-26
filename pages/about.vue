<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über uns</h1>
        <section class="columns columns-gutter">
        </section>
      </div>
    </header>
    <div class="content">
      <section>
        <div class="wrapper">
          <h2>2030Watch</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>
                2030Watch zeigt, wie gut Deutschland die global verabschiedeten Nachhaltigkeitsziele umsetzt. Ist Deutschland auf dem Weg einer Transformation, wie in der Agenda 2030 vorgesehen? 2030Watch untersucht diese Frage anhand von Indikatoren: Wie wird die Umsetzung zu einer nachhaltigen Entwicklung in Deutschland gemessen? Was wird übersehen? Dazu vergleicht 2030Watch die offiziellen Indikatoren der Deutschen Nachhaltigkeitsstrategien mit zusätzlichen Indikatoren.
              </p>
              <p>
                2030Watch wird aktuell gefördert durch Brot für die Welt. Die von der Open Knowledge Foundation geleistete Aufbauarbeit wurde hauptsächlich finanziert durch das Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung (BMZ) im Rahmen des von Engagement Global verwalteten Förderprogramms für Entwicklungspolitische Bildung (FEB) sowie von Brot für die Welt (BfdW) und der Landesstelle für Entwicklungszusammenarbeit (LEZ).
              </p>
            </div>
            <div class="section-img">
              <a href="https://www.2030-watch.de/" target="_blank">
                <img src="../assets/img/2030watch_logo.png" alt="2030Watch Logo" class="img-logos">
              </a>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="wrapper">
          <h2>Forum Umwelt und Entwicklung</h2>
          <div class="section-wrapper" style="padding-top: unset;">
            <div class="section-text">
              <p>
                Das Forum Umwelt &amp; Entwicklung wurde 1992 nach der UN-Konferenz für Umwelt und Entwicklung gegründet und koordiniert die Aktivitäten deutscher Nichtregierungsorganisationen in internationalen Politikprozessen zu nachhaltiger Entwicklung. Das Forum Umwelt und Entwicklung unterhält Kontakte zu Organisationen aus Entwicklungsländern und stimmt sich mit internationalen Verbänden für gemeinsame Aktionen ab. Es begleitet auf UN-Ebene die nach Rio weiterlaufenden internationalen Arbeiten zu Umwelt und Entwicklung.
              </p>
              <p>
                Eine der Hauptaufgaben des Forum ist es, der deutschen Öffentlichkeit den Zusammenhang zwischen Umwelt und Entwicklung zu verdeutlichen. Das geht einher mit der Bemühung für eine Änderung der verschwenderischen Wirtschafts- und Lebensweise in den industrialisierten Ländern einzutreten. Diese zerstören die natürlichen Lebensgrundlagen und berauben Millionen Menschen, insbesondere in den Ländern des Südens, ihrer Lebenschancen.
              </p>
              <p>
                Die Arbeit des Forum Umwelt und Entwicklung wird definiert von einem Leitungskreis, der sich aus Vertretern und Vertreterinnen von Umwelt- und Entwicklungsorganisationen zusammensetzt. Der Leitungskreis trägt die politische Verantwortung für die Leitung des Forums. Die Geschäftsstelle ist Sprachrohr und Koordinationsinstrument des Forums Umwelt und Entwicklung und Umschlagplatz gemeinsam erarbeiteter Positionen der Mitgliedsorganisationen. Die Mitgliedsorgansationen sowie die beteiligten Organisationen arbeiten in verschiedenen thematischen AGs zusammen.
              </p>
              <p>
                Mehr Infos hier: <a href="https://www.forumue.de/" target="_blank">forumue.de</a>
              </p>
            </div>
            <div class="section-img">
              <a href="https://www.forumue.de/" target="_blank">
                <img src="../assets/img/fue_logo.png" alt="Forum Umwelt und Entwicklung Logo" class="img-logos">
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <h2>Gefördert von</h2>
          <p>2030Watch wird gefördert von Brot für die Welt</p>
          <div class="section-wrapper section-wrapper-sponsors">
            <div class="section-img mobile-logos" style="text-align: left;">
              <a href="https://www.brot-fuer-die-welt.de/" target="_blank">
                <img src="../assets/img/Logo_Brot_fuer_die_Welt.png"
                  alt="Logo von Brot für die Welt"
                  width="150px"
                >
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- <section>
        <div class="wrapper">
          <h2>Finanzberichte</h2>
          <div class="section-wrapper section-wrapper-financial-report">
            <div class="section-text">
              <p>
                <a href="/document/Finanzuebersicht_2030Watch_2016-2018.pdf">Finanzübersicht</a>
              </p>
            </div>
          </div>
        </div>
      </section> -->

    </div>
  </div>
</template>

<script>
  import TeamMember from '~/components/TeamMember.vue'

  export default {
    data () {
      return {
        team: [{
          name: 'Rebecca Varghese Buchholz',
          imgUrl: require('~/assets/img/team/rebecca.jpg'),
          role: 'Projektleitung',
          email: 'rebecca.buchholz@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Claudia Schwegmann',
          imgUrl: require('~/assets/img/team/claudia.jpg'),
          role: 'Gründerin',
          email: 'claudia.schwegmann@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Saadya Windauer',
          imgUrl: require('~/assets/img/team/saadya.jpg'),
          role: 'Projektmanagerin',
          email: 'saadya.windauer@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Jennifer Gebske',
          imgUrl: require('~/assets/img/team/jenny.jpg'),
          role: 'Entwicklerin',
          email: 'jennifer.gebske@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        }]
      }
    },
    components: {
      TeamMember
    },
    head () {
      return {
        title: 'Über uns | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Über uns' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .content {
    section {
       &:nth-child(even) {
        background: #fff;
      }

      &:nth-of-type(2) {
        .section-wrapper {
          padding-top: $spacing;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
      }

      &:nth-of-type(4) {
        .section-wrapper {
          padding-top: $spacing;
        }
      }
    }
  }

  .section-description {
    text-align: left;
    font-size: 0.7rem;
    line-height: 1.0rem;
    color: gray;
  }

  .section-wrapper-sponsors {
    align-items: start;
    margin-top: 1em;
  }

  .EG-logo {
    margin-bottom: 1rem;
  }

  .EG-description {
    margin-bottom: 0.3rem;
  }

  .img-logos {
    width: 15rem;
  }

  @media screen and (max-width: $on-laptop) {
    .content .section-wrapper {
      flex-direction: column;
    }

    .img-logos, .mobile-logos {
      margin-top: 2.5rem;
    }

    .section-wrapper-sponsors {
      align-items: center;
    }

    .section-wrapper-financial-report {
      flex-direction: unset !important;
    }
  }
</style>
