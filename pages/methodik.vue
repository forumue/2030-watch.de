<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Methodik</h1>
        <p>Hier findest du Informationen zu unserer Methodik</p>
      </div>
    </header>
    <div class="content">
      <section id="methode" class="wrapper">
        <Accordeon :faqs="methode" />
      </section>
    </div>
  </div>
</template>

<script>
  import Accordeon from '~/components/Accordeon.vue'
  export default {
    data () {
      return {
        methode: [{
          title: 'Welche Indikatoren werden dargestellt?',
          id: 'methode-indikatoren',
          body: `
Als Vergleichsgröße haben wir die Indikatoren der Deutschen Nachhaltigkeitsstrategie herangezogen (Stand: 2018). Die Deutsche Nachhaltigkeitsstrategie stellt die Veränderungen einer Indikatorentwicklung mit Wettersymbolen dar: Sonne (Ziel nahezu erreicht), Wolke/Sonne (es geht in die richtige Richtung), Wolke (es gibt Lücken), Donner (die Entwicklungen gehen in die falsche Richtung) und zeigt so, ob sich der Indikator dem Zielwert nähert oder nicht. 2030Watch hat die Indikatoren in ein eigenes Bewertungssystem übersetzt, welches versucht, darzustellen, wie nah ein Indikator dem Ziel für das Jahr 2030 ist. Dieses Bewertungssystem wird laufend weiterentwickelt.

Auf 2030watch-modellprojekt.de werden außerdem weitere Indikatoren dargestellt, die größtenteils von zivilgesellschaftlichen Organisationen (NGOs) als Fortschrittsmaßstäbe  vorgeschlagen werden. Dabei beruhen die Daten größtenteils auch auf offiziellen Erhebungen, bspw. des Statistischen Bundesamts, von Eurostat, der OECD usw.`
        },
        {
          title: 'Wie hat 2030Watch Indikatoren ausgewählt?',
          id: 'methode-indikatoren-auswahl',
          body: `
Die ergänzenden Indikatoren hat 2030Watch geprüft und nach eigener Bewertung ausgewählt. Die Auswahl beruht auf unserer Recherche, Indikatorvorschlägen nichtstaatlicher Akteure und auf Gesprächen mit Expert&ast;innen aus Zivilgesellschaft und Forschung.

Unsere Auswahlkriterien waren:
1. Das SDG Unterziel ist für Deutschland relevant.
2. Deutschland hat aus offizieller Sicht zu diesem Unterziel Handlungsbedarf. Handlungsbedarf besteht, wenn eines der folgenden Kriterien erfüllt ist:
a. Es gibt einen offiziellen IAEG-SDG (Inter-Agency and Expert Group on Sustainable Development Goal) oder EU2020 Indikator, bei dem Deutschland mehr als 20% vom Zielwert entfernt ist.
b. Die Bundesregierung bezeichnet dieses Unterziel in der Nachhaltigkeitsstrategie als relevant, hat aber keinen eigenen Indikator.
c. Die Bundesregierung bezeichnet dieses Ziel selbst in offiziellen Verlautbarungen (inkl. internationalen Abkommen) als relevant, hat aber keinen eigenen Indikator.
3. Deutschland hat aus zivilgesellschaftlicher Sicht zu diesem Unterziel großen Handlungsbedarf. In öffentlichen Aufrufen von respektierten Organisationen wird ein Indikator zu diesem Thema gefordert.
4. Disaggregierte Daten "Leave no one behind"
a. Gender
b. Kinder, Jugendliche, Erwachsene, Senioren
c. Menschen mit Migrationshintergrund
d. Menschen mit Behinderungen
5. Vollständigkeit der Daten: Daten sind für Deutschland verfügbar, werden regelmäßig erhoben und sind in 2013 oder später erhoben worden.
6. Datenqualität: Daten stammen von offiziellen statistischen Quellen. Die Bewertungsmethode ist idealerweise an internationalen Vereinbarungen – good practices – angelehnt.`
        },
        {
          title: 'Wie hat 2030Watch die Indikatoren eingeteilt (Kategorien)?',
          id: 'methode-einteilung-kategorien',
          body: `
Indikatoren wurden in folgende Kategorien eingeteilt:

Neuer Indikator: Dieser Indikator legt ein neues Thema vor, das noch nicht in der Deutschen Nachhaltigkeitsstrategie enthalten ist.

Modifizierter Zielwert: Dieser Zielwert ist unzureichend und 2030Watch schlägt einen neuen Zielwert vor.

Nicht berechenbar: Für diesen Indikator kann man auf Grund fehlender Daten und Angaben der Ziel- oder Ausgangswert nicht berechnet werden.`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt eines Indikators?',
          id: 'methode-fortschrittsmessung',
          body: `
Wir berechnen für jeden Indikator, wie weit er vom jeweiligen Zielwert entfernt ist. Der Zielwert bezieht sich auf das Jahr 2030. Wir berechnen zwei Größen und setzen diese ins Verhältnis miteinander:

![Formel zur Fortschritssberechnung](/img/formula.gif)

So wird eine Vergleichbarkeit der Fortschritte zwischen den einzelnen Indikatoren hergestellt.`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt zur Erreichung eines Nachhaltigkeitsziels?',
          id: 'methode-fortschritt-nachhaltigkeit',
          body: `
Der Fortschritt bezieht sich auf das definierte Ziel für das Jahr 2030. Der offizielle Fortschritt wird mit einem Mittelwert von allen offiziellen Indikatorenwerten pro jeweiligem SDG berechnet. Der Fortschritt auf der Seite von 2030Watch wird über den Mittelwert der jeweiligen erweiterten Indikatorenliste berechnet: also alle berechenbaren offiziellen Indikatoren plus neue 2030Watch Indikatoren (um Dopplungen zu vermeiden, werden Indikatoren mit modifizierten Zielwert nur einmal berechnet).

Wichtig ist zu betonen, dass wir nicht behaupten, diese Fortschrittsberechnung sei eine objektive Darstellung. Die Berechnungen sollen dazu dienen, einen Vergleich zwischen Nachhaltigkeitsbildern zu ermöglichen und stellen einen Debattenbeitrag dar.`
        },
        {
          title: 'Wie werden Ausgangswerte berechnet?',
          id: 'methode-ausgangswerte',
          body: `
Wir lehnen unsere Auswahl an gängige Vorgehen an, wie zum Beispiel das von <a href="http://www.sdgindex.org/" target="_blank">Sustainable Development Solutions Network</a> (SDSN). Sobald ein eindeutiger Ausgangswert in den Datenreihen definiert ist, übernehmen wir diesen. Wenn dies nicht der Fall ist, wenden wir die Methode von <a href="http://www.sdgindex.org/" target="_blank">SDSN</a> an: von den internationalen Länderdaten werden 2,5% der Anzahl der Werte gestrichen. Wenn es also 40 Beobachtungen gibt (Daten für 40 Länder), kann der niedrigste Werte gestrichen werden. Für Indikatoren ohne international vergleichbare Daten und ohne natürlichen Ausgangswert, orientieren wir uns an dem <a href="http://ec.europa.eu/eurostat/documents/3217494/8113874/KS-EZ-17-001-EN-N.pdf/c810af1c-0980-4a3b-bfdd-f6aa4d8a004e" target="_blank">Basisjahr 2008 der EU2020 Strategie</a>.`
        },
        {
          title: 'Wie werden Zielwerte berechnet?',
          id: 'methode-zielwerte',
          body: `
Bei der Verwendung der Indikatoren der Deutschen Nachhaltigkeitsstrategie übernehmen wir die offiziellen Zielwerte (Stand 2018).

Für die ergänzenden Indikatoren wird der Zielwert von uns ausgewählt, beruhend auf internationalen Abkommen, Fachliteratur oder Expertengesprächen.

In den Fällen, in denen wir keinen Zielwert haben, nehmen wir den Durchschnitt der "5 Top Performer", sprich die fünf besten Werte der vorhandenen Länderreihe.`
        },
        {
          title: 'Welche Länder werden zum Vergleich herangezogen?',
          id: 'methode-laendervergleich',
          body: `
Wir vergleichen die deutschen Werte wenn möglich mit Daten der EU- oder OECD-Mitglieder mit Präferenz für Daten mit den aktuellsten Werten.`
        }
        ]
      }
    },
    components: {
      Accordeon
    },
    head () {
      return {
        title: 'Über das Projekt | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Über das Projekt' }
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
    }
  }

  ul li, ol li {
    list-style: inherit;
    > ol li {
      list-style-type: lower-latin;
    }
  }

  ol {
    padding-left: 1rem;
    margin-left: 0;
  }

  section > p > span {
    text-decoration: underline;
  }

  .formula {
    text-align: center;
  }
</style>
