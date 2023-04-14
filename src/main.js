import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// create a new Vuetify theme with a default light mode
const theme = {
  themes: {
    light: {
      primary: '#009688',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    },
    dark: {
      primary: '#26A69A',
      secondary: '#757575',
      accent: '#FF4081',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  }
}

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')