<template>
  <v-app :dark="darkMode">
    <v-main>
      <loadingOverlay :overlay="loadingOverlay" />
      <navbar :darkMode="darkMode" @update:darkMode="darkMode = $event" @dark-mode-toggled="onDarkModeToggled" />
      <firstSection />
    </v-main>
    <footer-section></footer-section>
  </v-app>
</template>

<script>
import navbar from './components/navbar';
import loadingOverlay from './components/loadingOverlay';
import firstSection from './views/firstSection';

export default {
  components: {
    navbar,
    loadingOverlay,
    firstSection,
  },
  data() {
    return {
      darkMode: localStorage.getItem('darkMode') === 'true' || false,
      loadingOverlay: true,
    };
  },
  created() {
    // Set the Vuetify theme based on the initial value of the darkMode property
    this.$vuetify.theme.dark = this.darkMode;
    this.$root.$on('toggleLoadingOverlay', () => {
      this.loadingOverlay = !this.loadingOverlay;
    });
  },
  mounted() {
    document.title = 'My Portfolio';
    setTimeout(() => {
      this.loadingOverlay = false;
    }, 1000);
  },
  methods: {
    onDarkModeToggled() {
      // show the loading overlay when the theme is switched
      this.loadingOverlay = true;
      // hide the loading overlay after a delay
      setTimeout(() => {
        this.loadingOverlay = false;
      }, 1000);
    },
  },
};
</script>