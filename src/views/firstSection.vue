<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          max-width="500"
          max-height="500"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">About Me</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'firstSection',
}
</script>