<template>
  <v-app :dark="darkMode">
    <v-main>
      <loadingOverlay :overlay="loadingOverlay" />
      <navbar :darkMode="darkMode" @update:darkMode="darkMode = $event" />
      <firstSection />
    </v-main>
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
  },
  mounted() {
    document.title = 'My Portfolio';
    setTimeout(() => {
      this.loadingOverlay = false;
    }, 2000);
  },
};
</script>