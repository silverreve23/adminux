import Vue from 'vue'
import App from '@src/App.vue'
import router from '@src/router'
import store from '@src/store'
import '@src/sw'
import '@src/scss/app.scss'
import '@src/settings/window'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
