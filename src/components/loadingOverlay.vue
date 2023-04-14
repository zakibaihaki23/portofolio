<template>
  <div class="text-center">
    <v-overlay :value="overlay">
      <v-progress-circular
        v-if="overlay"
        indeterminate
        color="primary"
        :size="60"
        :width="10"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
  export default {
    name: 'firstLoadingOverlay',
    props: ['overlay'],

    mounted() {
      setTimeout(() => {
        this.overlay = false
      }, 1000)
    },
  }
</script>