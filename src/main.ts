// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'

// loadFonts()

// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .mount('#app')

import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
