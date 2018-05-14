import Vue from 'vue'
import App from './App'
import store from './stores/index'
import PrivateComponents from './components/index'
import toast from './utils/toast'
import handleStorage from './utils/local'
import handleScan from './utils/scanCode'
import publicRequest from './utils/publicRequest'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(PrivateComponents)

Vue.prototype.$store = store

Vue.prototype.$totast = toast

Vue.prototype.$handleStorage = handleStorage

Vue.prototype.$handleScan = handleScan

Vue.prototype.$http = publicRequest

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['^pages/login/main', 'pages/cancode/main', 'pages/slide-del/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
