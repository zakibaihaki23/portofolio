<template>
  <v-app-bar
    app
    :color="darkMode ? 'primary' : 'primary'"
    :dark="darkMode"
    :elevation="darkMode ? 0 : 2"
  >
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-switch
      v-model="darkModeValue"
      hide-details
      :color="darkMode ? 'indigo' : 'primary'"
      :thumb-label="false"
      :class="{'primary--text': !darkMode, 'secondary--text': darkMode}"
      @change="toggleDarkMode"
    >
      <template v-slot:prepend>
        <v-icon>mdi-weather-sunny</v-icon>
      </template>
      <template v-slot:append>
        <v-icon>mdi-weather-night</v-icon>
      </template>
    </v-switch>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      darkModeValue: this.darkMode,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$emit('update:darkMode', this.darkModeValue);
      this.$vuetify.theme.dark = this.darkModeValue;
      localStorage.setItem('darkMode', this.darkModeValue);
    },
  },
};
</script>

<style scoped>
  .v-app-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .v-content {
    margin-top: 64px; /* adjust this value based on your app bar height */
  }
  .v-switch__label {
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
  }
</style>