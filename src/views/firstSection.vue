<template>
  <v-container>
    <v-row align="center" justify="center" align-sm="center" justify-sm="center">
      <v-col cols="12" md="6">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          max-width="500"
          max-height="500"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-card-title class="headline">About Me</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <about :data="experience"></about>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import about from '../components/about';
export default {
  name: 'firstSection',
  components: {
    about,
  },
  data() {
    return {
      experience: {
        title: "Experiences",
        data: [
          {
            id: 1,
            name: "PT. Eden Pangan Indonesia (Eden Farm)",
            date: "March 2022 - Present",
            position: "Front-End Developer",
            description: "Build and maintain Web using Vue.js and Mobile Application using React Native and Flutter (Warehouse Management System, Logistic Management System)",
            skills: ["VueJS", "Golang", "React Native", "Flutter", "JavaSript", "leafletjs"]
          },
          {
            id: 2,
            name: "PT. Eden Pangan Indonesia (Eden Farm)",
            date: "February 2021 - April 2021",
            position: "Front-End Developer",
            description: "Internship Position in Eden Farm",
            skills: ["Javascript", "VueJS"]
          },
          {
            id: 3,
            name: "Information and Information Technology Codes and Statistics Office of Pandeglang Regency",
            date: "22 July - 23 August 2019",
            position: "Pranata Komputer",
            description: "Maintain and develop the website of the Pandeglang Regency Information and Information Technology Codes and Statistics Office using VueJS as Frontend and Laravel as Backend",
            skills: ["VueJS", "Laravel", "MySQL", "Figma"]
          },
        ],
      },
    }
  }
}
</script>