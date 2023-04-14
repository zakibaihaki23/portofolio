<template>
  <div class="text-center">
    <div v-if="overlay" class="overlay"></div>
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
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
</style>