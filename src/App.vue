<template>
  <v-app>
    <loadingOverlay
      :overlay="overlay"
    />
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <div>
          <v-icon dark>
            mdi-home
          </v-icon>
        </div>
        <div style="margin-left: 15px; font-size: 20px; font-weight: bolder">
          My Portofolio
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <firstSection />
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import firstSection from './views/firstSection';
import loadingOverlay from './components/loadingOverlay';

export default {
  name: 'App',
  data() {
    return {
      overlay: true,
    }
  },

  components: {
    HelloWorld,
    firstSection,
    loadingOverlay,
  },

  mounted() {
    document.title = 'My Portofolio'
  },
};
</script>
